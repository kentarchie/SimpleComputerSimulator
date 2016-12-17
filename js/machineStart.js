var Memory = new Array();
var Registers = new Array();
var Runflag=true;
var MemRows=16;  // number of memory cells in a column
var MemCols=16; // number of memory display columns
var NumMemCells = MemRows * MemCols;  // total size of memory
var NumRegs=16;

function init()
{
   for(i=0;i<NumRegs;i++) Registers[i]="00";
   for(i=0;i<NumMemCells;i++) Memory[i]="00";
   var pc = document.getElementById('pc');
   pc.innerHTML="00";
   var ir = document.getElementById('ir');
   ir.innerHTML="00";
   makeregcol();
   makemem();

   // register control buttons
  $('setm').click(setmem);
  $('Load').click(loadProgram);
  $('Run').click(loadProgram);
  $('Step').click(stepit);
  $('Clear').click(clearit);
  $('memtxt').click(chgmem);
  //$('Test').click(Test);
} // init
