
function Register (elId,domObject,initValue) {
    this.elementId = elId;
    this.domObject = domObject;
    this.value = initvalue;
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
};

Register.prototype.updateFromDisplay = function() {
    this.Value = domObject.html();
};

Register.prototype.updateDisplay = function() {
    domObject.html(this.value);
};
