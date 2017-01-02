
// check the range of the value
function checkVrange(v)
{
		if( (v < 0) || (v > 255)) {
			set_status("Memory Fault: trying to store " + v + " at memory " + m);
			return false;
		}
		return true;
} // checkVrange

// check the range of the memory address
function checkMrange(m)
{
		if( (m < 0) || (m >= NumMemCells)) {
			set_status("Memory Fault: trying to access memory location" + m);
			return false;
		}
		return true;
} // checkMrange

// check the range of the Register number
function checkRrange(r)
{
		if( (r < 0) || (r >= NumRegs)) {
			set_status("Register Fault: trying to access Register " + r);
			return false;
		}
		return true;
} // checkRrange

// set memory location m to the value v
function setmem(m,v)
{
		if(!checkVrange(v)) return;
		if(!checkMrange(m)) return;
   	var mem = document.getElementById("mem" + m );
		mem.innerHTML = v;
} // setmem

// return the value at memory location m
function getmem(m)
{
		if(!checkMrange(m)) return;
   	var mem = document.getElementById("mem" + m );
		return mem.innerHTML;
} // getmem

// set Register r to the value v
function setreg(r,v)
{
		if(!checkVrange(v)) return;
		if(!checkRrange(r)) return;
   	var reg = document.getElementById("r" + r );
		reg.innerHTML = v;
} // setreg

// return the value of Register m as an integer
function getreg(r)
{
		if(!checkRrange(r)) return;
   	var reg = document.getElementById("r" + r );
		return reg.innerHTML - 0; // convert from string to number
} // getreg

// set PC to the value v
function setPC(v)
{
		if(!checkVrange(v)) return;
   	var pc = document.getElementById("pc");
		pc.innerHTML = v;
} // setPC

// return the value of PC as an integer
function getPC()
{
   	var pc = document.getElementById("pc");
		return pc.innerHTML;
} // getPC

// set IR to the string value v
function setIR(v)
{
   	var ir = document.getElementById("ir");
		ir.innerHTML = v;
} // setIR

// return the value of IR as an string
function getIR()
{
   	var ir = document.getElementById("ir");
		return ir.innerHTML;
} // getIR

var Instructions = {
	'1' : {
			'mnemonic' : 'LOADREG'
			,'operand' : "RXY"
			,'op' : function() {
         		setreg(hex_dec(instr.slice(1,2)),getmem(hex_dec(instr.slice(2,4))));
         		set_status("load R" + instr.slice(1,2) + " from mem(" + instr.slice(2,4) + ")");
			}
			,'description' : "LOAD the register R with the bit pattern found in the memory cell whoes address is XY"
			,'example' : "14A3 would cause the contents of the memory cell located at address A3 to be placed in register 4."
	}
	,'2' : {
			'mnemonic' : 'LOADBITS'
			,'operand' : "RXY"
			,'op' : function() {
         		setreg(hex_dec(instr.slice(1,2)),instr.slice(2,4));
         		set_status("Set R" + instr.slice(1,2) + " to " + instr.slice(2,4));
			}
			,'description' : "LOAD the register R with the bit pattern XY."
			,'example' : "20A3 would cause the value A3 to be placed in regster 0"
	}
	,'3' : {
			'mnemonic' : 'STORE'
			,'operand' : "RXY"
			,'op' : function() {
				setmem(hex_dec(instr.slice(2,4)),getreg(hex_dec(instr.slice(1,2))));
				set_status("Store R" + instr.slice(1,2) + " to mem(" + instr.slice(2,4) + ")");
			}
			,'description' : "STORE the bit pattern found in register R in the memory cell whose address is XY"
			,'example' : "35B1 would cause the contents of register 5 to be placed in the memory cell whose address is B1"
	}
	,'4' : {
			'mnemonic' : 'MOVE'
			,'operand' : "0RS"
			,'op' : function() {
				setreg(hex_dec(instr.slice(3,4)), getreg(hex_dec(instr.slice(2,3))));
		 		set_status("Copy R" + instr.slice(3,4) + " to R" + instr.slice(2,3));
			}
			,'description' : "MOVE the bit pattern found in register R to register S"
			,'example' : "40A4 would cause the contents of register A to be copied to register 4"
	}
	,'5' : {
			'mnemonic' : 'ADDINT'
			,'operand' : "RST"
			,'op' : function() {
				var ires=twos_add(getreg(hex_dec(instr.slice(3,4))),getreg(hex_dec(instr.slice(2,3))));
				setreg(hex_dec(instr.slice(1,2)),ires);
				set_status("Add integer R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " + R" + instr.slice(2,3));
			}
			,'description' : "ADD the bit pattern in registers S and T as though they were two's complement representations and leave the result in register R"
			,'example' : "5726 would cause the binary values in registers 2 and 6 to be added and the sum placed in register 7"
	}
	,'6' : {
			'mnemonic' : 'ADDFLOAT'
			,'operand' : "RST"
			,'op' : function() {
         		var fres=float_add(getreg(hex_dec(instr.slice(3,4))),getreg(hex_dec(instr.slice(2,3))));
         		setreg(hex_dec(instr.slice(1,2)),fres);
         		set_status("Add float R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " + R" + instr.slice(2,3));
			}
			,'description' : "ADD the bit pattern in registers S and T as though they were floating point notation and leave the result in register R"
			,'example' : "634E would cause the values in registers 4 and E to be added as floating point numbers and the result placed in register 3"
	}
	,'7' : {
			'mnemonic' : 'OR'
			,'operand' : "RST"
			,'op' : function() {
         		var left=getreg(hex_dec(instr.slice(3,4)));
         		var right=getreg(hex_dec(instr.slice(2,3)));
         		setreg(hex_dec(instr.slice(1,2)),left | right);
         		set_status("bitwise or R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " ! R" + instr.slice(2,3));
			}
			,'description' : "OR the bit patterns in registers S and T and place the result in register R"
			,'example' : "7CB4 would cause the result of ORing the contents of register B and 4 to be placed in register C"
	}
	,'8' : {
			'mnemonic' : 'AND'
			,'operand' : "RST"
			,'op' : function() {
         		var left=getreg(hex_dec(instr.slice(3,4)));
         		var right=getreg(hex_dec(instr.slice(2,3)));
         		setreg(hex_dec(instr.slice(1,2)),left & right);
         		set_status("bitwise and R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " & R" + instr.slice(2,3));
			}
			,'description' : "AND the bit patterns in registers S and T and place the result in register R"
			,'example' : "8045 would cause the result of ANDing the contents of register 4 and 5 to be placed in register 0"
	}
	,'9' : {
			'mnemonic' : 'XOR'
			,'operand' : "RST"
			,'op' : function() {
         		var left=getreg(hex_dec(instr.slice(3,4)));
         		var right=getreg(hex_dec(instr.slice(2,3)));
         		setreg(hex_dec(instr.slice(1,2)),xor(left,right));
         		set_status("bitwise xor R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " ^ R" + instr.slice(2,3));
         		set_status("bitwise xor");
			}
			,'description' : "EXCLUSIVE OR the bit patterns in registers S and T and place the result in register R"
			,'example' : "95F3 would cause the result of EXCLUSIVE ORing the contents of register F and 3 to be placed in register 5"
	}
	,'A' : {
			'mnemonic' : 'ROTATE'
			,'operand' : "R0X"
			,'op' : function() {
         		var res=rotate(instr.slice(1,2),instr.slice(3,4));
         		setreg(hex_dec(instr.slice(1,2)),res);
         		set_status("rotate R"+instr.slice(1,2)+ " "+instr.slice(3,4)+" places");
			}
			,'description' : "ROTATE the bit pattern in register R one bit to the right X times. Each time place the bit that started at the low-order end at the high-order end"
			,'example' : "A403 would cause the contents of register 4 to be rotated 3 bits to the right in a circular fashion"
	}
	,'B' : {
			'mnemonic' : 'JUMP'
			,'operand' : "RXY"
			,'op' : function() {
         		var rn=getreg(hex_dec(instr.slice(1,2)));
         		var r0=getreg(0);
         		if(rn == r0)   // jump
            		setPC(hex_dec(instr.slice(2,4)).toString(16));
         		set_status("jump (R" + instr.slice(1,2)+ " == R0) to " + instr.slice(2,4));
			}
			,'description' : "JUMP to the instruction located in the memory cell at address XY if the bit pattern in register R is equal to the bit pattern in register 0. Otherwise, continue with the normal sequence of execution"
			,'example' : "B43C would first compare the contents of register 4 with the contents of register 0. If the two were equal, the execution sequence would be altered so that the next instruction executed would be the one located at memory address 3C. Otherwise program execution would continue in its normal sequence"
	}
	,'C' : {
			'mnemonic' : 'HALT'
			,'operand' : "000"
			,'op' : function() {
         		Runflag = false;
         		set_status("Program halted");
			}
			,'description' : "HALT execution"
			,'example' : "C000 would cause the program execution to stop"
	}
}; // Instructions

// implements the machine
function execute(instr)
{
	writedebug("instr = :" + instr + ":");
   switch((instr.slice(0,1)).toUpperCase()) {
   } // esac
} // execute

function registerUpdate(ev)
{
	console.log('registerUpdate: START')
	console.log('registerUpdate: id=:'+this.id+':');
	$('#memoryUpdate').show();
	//console.log('registerUpdate: ev=:'+JSON.stringify(ev,null,'\n')+':')
	console.log('registerUpdate: DONE')
} // registerUpdate

function memoryUpdate(ev)
{
	console.log('memoryUpdate: START')
	console.log('memoryUpdate: id=:'+this.id+':');
	//console.log('memoryUpdate: ev=:'+JSON.stringify(ev,null,'\n')+':')
} // memoryUpdate
