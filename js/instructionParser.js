var InstructionParser = function(instruction) {
      this.instruction = instruction;
      this.opCode = '';
      this.p1 = '';
      this.p2 = '';
      this.p3 = '';
      this.error = '';
}
$.extend(InstructionParser.prototype, {
      parseInstruction: function() {
          if(this.instruction.length != 4) {
             this.error='Wrong instruction length: ' + this.instruction.length ;
             throw this.error;
          }
          var p = this.instruction.split('');
          this.opCode = p[0];
          this.p1 = p[1];
          this.p2 = p[2];
          this.p3 = p[3];
      }
      ,getOperand: function() {
            return Instructions[this.opCode]['operand'];
      }
      ,getDescription: function() {
            return Instructions[this.opCode]['description'];
      }
      ,getExample: function() {
            return Instructions[this.opCode]['example'];
      }
      ,execute: function() {
            return Instructions[this.opCode]['op']();
      }
      ,toString: function() {
            return this.opCode + ':' + this.p1 + ':' + this.p2 + ':' + this.p3;
      }
});
