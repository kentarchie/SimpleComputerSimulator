// user level commands
function loadProgram()
{
    set_status("Program Loading");
    var prog=$('#prog').text();
    var start=$('#start_addr').value - 0;
    var code=prog.split("\n");
    var mem;
    init();
    for(i=0;i<code.length;i++) {
   	    mem = $("#mem" + (start + (i*2)));
        mem.html(code[i].slice(0,2));
   	    mem = $("#mem" + (start + (i*2)+1));
        mem.html(code[i].slice(2,4));
    }
    setPC($('#start_addr').value);
    Runflag=true;
    set_status("Program Loaded");
} // loadProgram

function runProgram()
{
   var addr;
   while(Runflag) {
      addr=hex_dec(getPC());
      setIR(getmem(addr) + "" +  getmem(addr+1));
      setPC(addr+2);
      execute(getIR());
   }
   set_status("Program Ended");
} //runProgram

function stepit()
{
   var addr=Utilities.hexToInt(getPC());
   writedebug("pc is address " + addr);
   if(Runflag) {
	  writedebug(getmem(addr) + ":" +  getmem(addr+1));
      setIR(getmem(addr) + "" +  getmem(addr+1));
      setPC(addr+2);
      execute(getIR());
   }
   else
      set_status("Program Ended");
} // stepit
