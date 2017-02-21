
function Register (elId,domObject,initValue) {
    this.elementId = elId;
    this.domObject = domObject;
    this.value = initValue;
}

Register.prototype.getValue = function() {
    return this.getValue;
};

Register.prototype.getId = function() {
    return this.elementId;
};

Register.prototype.getDomObject = function() {
    return this.domObject;
};

Register.prototype.setValue = function(val) {
    this.Value = val;
    this.updateDisplay();
    console.log('Register: setValue: val=:'+this.value+ ':')
};

Register.prototype.updateFromDisplay = function() {
    this.value = this.domObject.html();
    console.log('Register: updateFromDisplay: val=:'+this.value+ ':')
};

Register.prototype.updateDisplay = function() {
    this.domObject.html(this.value);
};

Register.prototype.validate = function() {
    if((this.value < 0) && (this.value >= 255)) return false;
    return true;
};
