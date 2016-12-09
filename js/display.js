var Memory = new Array();
var Registers = new Array();
var Runflag=true;
var MemDisp=16;  // number of memory cells in a column
var NumMemCols=7; // number of memory display columns
var NumMemCells = MemDisp * NumMemCols;  // total size of memory
var NumRegs=16;

// display controls
function set_status(str)
{
   var status = document.getElementById('status');
   status.innerHTML=str;
} // set_status

function writedebug(str)
{
   var debug = document.getElementById('debug');
	debug.value += "\n" + str;
} // writedebug

function showregs()
{
  var memstr="";
  for(i=0;i<NumRegs;i++) {
     memstr = memstr + (i).toString(16) + ": " + Registers[i] + "\n";
  } // inner for
  document.program.regs.value=memstr;
} // showregs

function init()
{
   for(i=0;i<16;i++) Registers[i]="00";
   for(i=0;i<255;i++) Memory[i]="00";
   var pc = document.getElementById('pc');
   pc.innerHTML="00";
   var ir = document.getElementById('ir');
   ir.innerHTML="";
   makeregcol();
   memMaker();
}

function clearit()
{
   init();
   document.program.prog.value="";
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

// convert a single decimal digit to hex
function tohex(d)
{
	var hexstring="0123456789ABCDEF";
	if(d < 16)
		return hexstring.charAt(d);
	return '-';
} // tohex

function memMaker()
{
   var tr = document.getElementById("mainmem_tr");
   var str = "";
	 for(i=0; i< NumMemCols ; i++) {
       str += '<td>';
       str += "<td>\n";
       str += makememcol(i);
       str += '</td>';
    }
    tr.innerHTML=str;
} // memMaker

function makememcol(c)
{
	var num,i,id,label,sp;
  var str="";
	str += '<table id="memcol' + c + '" >\n';
	for(i=0;i<MemDisp; i++) {
		// unique, sequential memory cell ids
		num=i + (MemDisp * c);
		id="mem" + num;
   	label = tohex(c) + "" + tohex(i) + ":";
   	sp = " <span style='font-size:12' id='" + id + "' onClick = 'clicked(this);'>00</span>";
   	str += "<tr><td width=40>" + label + sp + "</td></tr>\n";
	} // for
	str += '</table>\n';
  return str;
} // makememcol

function makeregcol()
{
	var i,id,label,sp;
  var regs = document.getElementById('registers');
  var str = "";
	for(i=0;i<NumRegs; i++) {
   	id= "r" + i;
   	label = "R" + tohex(i) + ":";
   	sp = " <span style='font-size:12' id='" + id + "' onClick = 'clicked(this);'>00</span>";
   	str+= "<tr><td width=40>" + label + sp + "</td></tr>\n";
	} // for
  regs.innerHTML = str;
} // makeregcol
