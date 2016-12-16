var Memory = new Array();
var Registers = new Array();
var Runflag=true;
var MemRows=16;  // number of memory cells in a column
var MemCols=16; // number of memory display columns
var NumMemCells = MemRows * MemCols;  // total size of memory
var NumRegs=16;

function init()
{
   for(i=0;i<16;i++) Registers[i]="00";
   for(i=0;i<255;i++) Memory[i]="00";
   var pc = document.getElementById('pc');
   pc.innerHTML="00";
   var ir = document.getElementById('ir');
   ir.innerHTML="00";
   makeregcol();
   makemem();

   // register control buttons
  $('setm').click(setmem);
  $('Load').click(loadit);
  $('Run').click(runit);
  $('Step').click(stepit);
  $('Clear').click(clearit);
  //$('Test').click(Test);
} // init

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

/*
	When a memory or register cell is clicked, an input box
	and button appear. the new value for the cell is entered in the
	textbox and when the change button is pressed, the value is set
	into the memory cell.
	This routine stores the id of the clicked cell in a form variable
	and makes the box and button visible.
*/
function clicked(cell)
{
	// just in case, we will clear the background of the
	// previously chosen cell. This is cleared by the chgmem()
	// routine, but you never know.
   var x = document.getElementById('whichcell'); // find the hidden field
   var y = document.getElementById(x.value); // find the memory element
	y.style.backgroundColor='white';

   x = document.getElementById(cell.id); // find the memory cell that was clicked
	x.style.backgroundColor='lightgray';
   // find the table cell that holds the
   // form elements to get the new value
   var x = document.getElementById('newmem');
   x.style.visibility = 'visible'; // make them visible
   x = document.getElementById('whichcell');  // find the hidden field
   // save the id of the clicked on memory element
   x.value = cell.id;
   x = document.getElementById('memchange');  // find the input text box
   x.focus();
} // clicked

function chgmem()
{
   var x = document.getElementById('whichcell'); // find the hidden field
   // the contents of the field is the id of the
   // memory element that was clicked
   var y = document.getElementById(x.value); // find the memory element
   var z = document.getElementById('memchange'); // find the input box
   y.innerHTML = z.value; // change the memory elements value
   y.style.backgroundColor='white';
   z.value='';  // clear the new value from the input box

   // find the table cell that holds the
   // form elements to get the new value
   x = document.getElementById('newmem');
   x.style.visibility = 'hidden';  // make invisible
} // chgmem

function makemem()
{
	var num,id,label,sp;
  var str="";
  var memTable = document.getElementById("memoryBlock");
	str += "<table id='memory'>\n";
	for(var row=0;row<MemRows; row++) {
    str += '<tr>';
	  for(var col=0; col< MemCols ; col++) {
       str += '<td>';
		     // unique, sequential memory cell ids
		     num=col + (MemRows * row);
		     id="mem" + num;
   	     label = tohex(row) + "" + tohex(col) + ":";
   	     sp = "<span class='memoryCell' id='" + id + "' onClick = 'clicked(this);'>00</span>";
   	     str += "<label>"+label+"</label>";
   	     str +=  sp;
       str += '</td>';
	  } // for
    str += '</tr>';
  }
	str += '</table>\n';
  memTable.innerHTML = str;
} // makemem

function makeregcol()
{
	var i,id,label,sp;
  var regs = document.getElementById('registers');
  var str = "";
	for(i=0;i<NumRegs; i++) {
   	id= "r" + i;
   	label = '<label>'+"R" + tohex(i) + ":" + '</label>';
   	sp = " <span class='registerCell' id='" + id + "' onClick = 'clicked(this);'>00</span>";
   	str+= "<li width=40>" + label + sp + "</li>\n";
	} // for
  regs.innerHTML = str;
} // makeregcol
