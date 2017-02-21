var Memory = new Array();
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
	for(i=0;i<NumMemCells;i++) Memory[i] = '00';
	$('#pc').html("00");
	$('#ir').html("00");

	console.log('init: before makeRegisterDisplay');
	var registersSetup = new RegistersHandling('registers');
	registersSetup.makeRegisterDisplay();
	registersSetup.setup();
	makeMemoryDisplay();


  //$('#memoryBlock').on('dblclick',"span[class='memoryCell']",memoryUpdate);

  $('.closeButton').on('click',saveMemory);
  $('.exitButton').on('click',cancelMemoryUpdate);

  $('#setm').on('click',setmem);
  $('#Load').on('click',loadProgram);
  $('#Run').on('click',loadProgram);
  $('#Step').on('click',stepit);
  $('#Clear').on('click',clearit);
  //$('#Test').on('click',Test);
  console.log('init: DONE');
} // init
