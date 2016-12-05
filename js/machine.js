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
   	var mem = MWJ_findObj("mem" + m );
		mem.innerHTML = v;
} // setmem

// return the value at memory location m 
function getmem(m)
{
		if(!checkMrange(m)) return;
   	var mem = MWJ_findObj("mem" + m );
		return mem.innerHTML;
} // getmem

// set Register r to the value v
function setreg(r,v)
{
		if(!checkVrange(v)) return;
		if(!checkRrange(r)) return;
   	var reg = MWJ_findObj("r" + r );
		reg.innerHTML = v;
} // setreg

// return the value of Register m as an integer
function getreg(r)
{
		if(!checkRrange(r)) return;
   	var reg = MWJ_findObj("r" + r );
		return reg.innerHTML - 0; // convert from string to number
} // getreg

// set PC to the value v
function setPC(v)
{
		if(!checkVrange(v)) return;
   	var pc = MWJ_findObj("pc");
		pc.innerHTML = v;
} // setPC

// return the value of PC as an integer
function getPC()
{
   	var pc = MWJ_findObj("pc");
		return pc.innerHTML; 
} // getPC

// set IR to the string value v
function setIR(v)
{
   	var ir = MWJ_findObj("ir");
		ir.innerHTML = v;
} // setIR

// return the value of IR as an string
function getIR()
{
   	var ir = MWJ_findObj("ir");
		return ir.innerHTML; 
} // getIR

// implements the machine
function execute(instr)
{
	writedebug("instr = :" + instr + ":");
   switch((instr.slice(0,1)).toUpperCase()) {
      case '1' : // load
         setreg(hex_dec(instr.slice(1,2)),getmem(hex_dec(instr.slice(2,4))));
         set_status("load R" + instr.slice(1,2) + " from mem(" + instr.slice(2,4) + ")");
                 break;
      case '2' : // load
         setreg(hex_dec(instr.slice(1,2)),instr.slice(2,4));
         set_status("Set R" + instr.slice(1,2) + " to " + instr.slice(2,4));
                 break;
      case '3' : // store
         setmem(hex_dec(instr.slice(2,4)),getreg(hex_dec(instr.slice(1,2))));
         set_status("Store R" + instr.slice(1,2) + " to mem(" + instr.slice(2,4) + ")");
                 break;
      case '4' : // copy register
         setreg(hex_dec(instr.slice(3,4)), getreg(hex_dec(instr.slice(2,3))));
         set_status("Copy R" + instr.slice(3,4) + " to R" + instr.slice(2,3));
                 break;
      case '5' : // add integer
         var ires=twos_add(getreg(hex_dec(instr.slice(3,4))),getreg(hex_dec(instr.slice(2,3))));
         setreg(hex_dec(instr.slice(1,2)),ires);
         set_status("Add integer R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " + R" + instr.slice(2,3));
         break;
      case '6' : // add float
         var fres=float_add(getreg(hex_dec(instr.slice(3,4))),getreg(hex_dec(instr.slice(2,3))));
         setreg(hex_dec(instr.slice(1,2)),fres);
         set_status("Add float R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " + R" + instr.slice(2,3));
         break;
      case '7' : // or 
         var left=getreg(hex_dec(instr.slice(3,4)));
         var right=getreg(hex_dec(instr.slice(2,3)));
         setreg(hex_dec(instr.slice(1,2)),left | right);
         set_status("bitwise or R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " ! R" + instr.slice(2,3));
         break;
      case '8' : // and 
         var left=getreg(hex_dec(instr.slice(3,4)));
         var right=getreg(hex_dec(instr.slice(2,3)));
         setreg(hex_dec(instr.slice(1,2)),left & right);
         set_status("bitwise and R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " & R" + instr.slice(2,3));
         break;
      case '9' : // xor 
         var left=getreg(hex_dec(instr.slice(3,4)));
         var right=getreg(hex_dec(instr.slice(2,3)));
         setreg(hex_dec(instr.slice(1,2)),xor(left,right));
         set_status("bitwise xor R" + instr.slice(1,2) + " = R" + instr.slice(3,4) + " ^ R" + instr.slice(2,3));
         set_status("bitwise xor");
         break;
      case 'A' : // rotate 
         var res=rotate(instr.slice(1,2),instr.slice(3,4));
         setreg(hex_dec(instr.slice(1,2)),res);
         set_status("rotate R"+instr.slice(1,2)+ " "+instr.slice(3,4)+" places");
         break;
      case 'B' : // jump 
         var rn=getreg(hex_dec(instr.slice(1,2)));
         var r0=getreg(0);
         if(rn == r0)   // jump
            setPC(hex_dec(instr.slice(2,4)).toString(16));
         set_status("jump (R" + instr.slice(1,2)+ " == R0) to " + instr.slice(2,4));
         break;
      case 'C' : // halt
         Runflag = false;
         set_status("Program halted");
         break;
      default : // illegal instruction
         Runflag = false;
         set_status("Illegal instruction <" + instr + ">");
         break;
   } // esac
} // execute
