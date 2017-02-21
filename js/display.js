var EDIT_BOX_WIDTH = 10;
var EDIT_BOX_HEIGHT = 10;

function flashUpdate(el,value)
{
   $('#' + el).text(value);
   $('#' + el).addClass('highlighted');
   setTimeout(function(){
     $('#' + el).removeClass('highlighted');
    }, 500);
} // flashUpdate

// display controls
function set_status(str)
{
   //var status = document.getElementById('status');
   //status.innerHTML=str;
   flashUpdate('status',str);
} // set_status

function writedebug(str)
{
   var oldStr = $('#debug').innerHTML;
   $('debug').innerHTML = oldStr + "\n" + str;
} // writedebug

function clearit()
{
   init();
   $('#prog').value("");
   set_status("");
}

function makeMemoryDisplay()
{
	var str = "<table id='memory'>\n";
	for(var row=0;row<MemRows; row++) {
    	str += '<tr>';
	  	for(var col=0; col< MemCols ; col++) {
       		str += '<td>';
		    // unique, sequential memory cell ids
		    var num=col + (MemRows * row);
		    var id="mem" + num;
   	     	var label = Utilities.intToHex(row) + "" + Utilities.intToHex(col) + ":";
   	     	str += "<label>"+label+"</label>";
   	     	str += "<div contenteditable='true' class='memoryCell' id='" + id + "'>00</div>";
       		str += '</td>';
	  	} // for
    	str += '</tr>';
  	} // for
	str += '</table>\n';
  	$("#memoryBlock").html(str);
} // makeMemoryDisplay


// from https://stackoverflow.com/questions/6139107/programatically-select-text-in-a-contenteditable-html-element/6150060#6150060
function selectElementContents(el)
{
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
} // selectElementContents

function makeEditable(el)
{
    el.addClass('registerCellEdit');
} // makeEditable
