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
   $('#memoryEdit').hide();

   console.log('init: before makeRegisterDisplay');
   makeRegisterDisplay();
   makeMemoryDisplay();

   // register control buttons
  $('#registers').on('dblclick',"span[class='registerCell']",registerUpdate);
  $('#memoryBlock').on('dblclick',"span[class='memoryCell']",memoryUpdate);

  $('.closeButton').on('click',saveMemory);
  $('.exitButton').on('click',cancelMemoryUpdate);
  $('.memoryEdit' ).draggable();

  $('#setm').on('click',setmem);
  $('#Load').on('click',loadProgram);
  $('#Run').on('click',loadProgram);
  $('#Step').on('click',stepit);
  $('#Clear').on('click',clearit);
  $('#memtxt').on('click',chgmem);
  //$('#Test').on('click',Test);
  console.log('init: DONE');
} // init
