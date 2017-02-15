var Memory = new Array();
var Registers = {};
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
	//for(i=0;i<NumRegs;i++) Registers[i] = '00';
	for(i=0;i<NumMemCells;i++) Memory[i] = '00';
	$('#pc').html("00");
	$('#ir').html("00");

	console.log('init: before makeRegisterDisplay');
	makeRegisterDisplay();
	makeMemoryDisplay();

   // register control buttons
  //$('#registers').on('dblclick',"span[class='registerCell']",registerUpdate);

	$('#registers').on('focus','.registerCell',function(){
		event.preventDefault();
		selectElementContents(this);
		makeEditable($(this));
		console.log('init: registers.onClick: this.id=:'+$(this).attr('id')+':');
        $(this).data("initialText", $(this).html());
    	$(this).removeClass('registerCellNormal');
    	$(this).addClass('registerCellEdit');
	});

	$('#registers').on('blur','.registerCell',function() {
        console.log('init: registers.onblur: STAR registers.onBlur: this.id=:'+$(this).attr('id')+':');
        var savedData = $(this).data("initialText");
		var thisHtml= $(this).html();
        console.log('init: registers.onblur: savedData=:'+savedData+': thisHtml = :'+thisHtml+':');
		registerEditDone($(this));
    });

	$('#registers').on('keypress','.registerCell',function(ev) {
		var that = this;
        console.log('init: registers.onkeypress: key.:'+ev.which+':');
  		if ( ev.which == 13 ) {
			 ev.preventDefault();
			 registerEditDone($(that));
		}
    });

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

function registerEditDone(thisRegister)
{
	var newValue = thisRegister.html();
    console.log('init: registers.onblur: New data when content change.:'+newValue+':');
    thisRegister.removeClass('registerCellEdit');
    thisRegister.addClass('registerCellNormal');
}
