var Memory = new Array();
var Registers = new Array();
var Runflag=true;
var MemRows=16;  // number of memory cells in a column
var MemCols=16; // number of memory display columns
var NumMemCells = MemRows * MemCols;  // total size of memory
var NumRegs=16;

$(document).ready(function() {
	init();
});

function init()
{
  console.log('init: START');
   for(i=0;i<NumRegs;i++) Registers[i] = '00';
   for(i=0;i<NumMemCells;i++) Memory[i] = '00';
   $('#pc').html("00");
   $('#ir').html("00");
  console.log('init: before makeRegisterDisplay');
   makeRegisterDisplay();
   makemem();

   // register control buttons
  $('#registers').on('dblclick',"span[class='registerCell']",registerUpdate);
  $('#setm').click(setmem);
  $('#Load').click(loadProgram);
  $('#Run').click(loadProgram);
  $('#Step').click(stepit);
  $('#Clear').click(clearit);
  $('#memtxt').click(chgmem);
  //$('#Test').click(Test);
  console.log('init: DONE');
} // init
