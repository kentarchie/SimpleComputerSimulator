function RegistersHandling (registersElement) {
    this.registersElement = registersElement;
    this.Registers = {};
}

RegistersHandling.prototype.makeRegisterDisplay = function() {
  	console.log('RegistersHandling.makeRegisterDisplay: element=:'+this.registersElement+':');
	for(var i=0; i<NumRegs; i++) {
		var id = "r" + i;
		var label = '<label>'+'R' + Utilities.intToHex(i) + ':' + '</label>';
		var sp = " <div contenteditable='true' class='registerCell' id='" + id + "'>00</div>";
		var str = "<li>" + label + sp + "</li>\n";
        var reg = $(str);
        this.Registers[id] = new Register(id,reg,"00");
  	    $('#'+this.registersElement).append(reg);
	} // for
  	console.log('RegistersHandling.makeRegisterDisplay: DONE');
} // makeRegisterDisplay

RegistersHandling.prototype.getRegister = function() {
    return this.Registers[id];
} // getRegister

RegistersHandling.prototype.registerEditDone = function(thisRegister) {
	var newValue = thisRegister.html();
    console.log('RegistersHandling.registerEditDone: New data when content change.:'+newValue+':');
    thisRegister.removeClass('registerCellEdit');
    thisRegister.addClass('registerCellNormal');
} // registerEditDone

// register actions
RegistersHandling.prototype.setup = function() {
    var that = this;
	$('#' + this.registersElement).on('focus','.registerCell',function(){
		event.preventDefault();
		selectElementContents(this);
		makeEditable($(this));
		console.log('RegistersHandling.setup: onFocus: this.id=:'+$(this).attr('id')+':');
        $(this).data("initialText", $(this).html());
    	$(this).removeClass('registerCellNormal');
    	$(this).addClass('registerCellEdit');
	});

	$('#' + this.registersElement).on('blur','.registerCell',function() {
        console.log('RegistersHandling.setup: .onblur: START this.id=:'+$(this).attr('id')+':');
        var savedData = $(this).data("initialText");
		var thisHtml= $(this).html();
        console.log('RegistersHandling.setup: .onblur: savedData=:'+savedData+': thisHtml = :'+thisHtml+':');
		that.registerEditDone($(this));
    });

	$('#'+ this.registersElement ).on('keypress','.registerCell',function(ev) {
        console.log('RegistersHandling.setup: onkeypress: key=:'+ev.which+':');
  		if ( ev.which == 13 ) {
            console.log('RegistersHandling.setup: onkeypress: handling return');
			 ev.preventDefault();
			 that.registerEditDone($(this));
		}
    });
} // setup
