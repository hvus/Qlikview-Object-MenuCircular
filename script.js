// Hector Vega 
// Solmar Resort's and Hotels 
// Date 2015-11-27
//
// Based on code shown in "Building a Circular Navigation with CSS Transforms" at http://tympanus.net/codrops/2013/08/09/building-a-circular-navigation-with-css-transforms
// by Sara Soueidan http://sarasoueidan.com
//
// Reference https://qlikcommunity.s3.amazonaws.com/misc/index.html QlikView Ajax Javascript Library
//
// How to Use:
// Use variable "vMenuOption" to get the value of the menu item selected
// Define a dimension on the properties object, to proliferate the menu items to be shown
// 
var template_path = Qva.Remote + "?public=only&name=Extensions/MenuCircular/"; 
 
function extension_Init() {
    Qva.LoadCSS(template_path + "style.css");
    Qva.LoadScript(template_path + "polyfills.js") 
    Qva.LoadScript(template_path + "modernizr-2.6.2.min.js", extension_Done);

};

var MenuItem= "";

function set_Option(IdOption){
  var mydoc = Qv.GetCurrentDocument();
  mydoc.SetVariable("vMenuOption",IdOption);
}; 
 

function extension_Done() {
     Qva.AddExtension('MenuCircular', function () {
    
 	    var addThis = "";
 	    addThis += "<div class='component'>";
 	    addThis +=  "<button class='cn-button' id='cn-button'>Menu</button>";
 	    addThis +=  "  <div class='cn-wrapper' id='cn-wrapper'>";
 	    addThis +=  "       <ul>";
 	    
 	    var  datos = this.Data.Rows;
   	    for (var i = 0; i < datos.length; i++) {
               var data = datos[i]; 
        		MenuItem = data[0].text;

	    		addThis +=  "<li><a href='javascript:;' onclick='set_Option(";
	    		addThis +=	'"'+MenuItem+'"'
	    		addThis += ");'><span>"+MenuItem+"</span></a></li>";
        	}

 	    addThis +=  "	</ul>";
 	    addThis +=  " </div>";
 	    addThis +=  " </div>";

	    this.Element.innerHTML = addThis;

	
 
	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){

	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}


    });
}
 
extension_Init(); //Initiate extension