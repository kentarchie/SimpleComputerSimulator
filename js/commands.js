// user level commands
function loadit()
{
   set_status("Program Loading");
   var prog=document.program.prog.value;
   var start=document.program.start_addr.value - 0;
   var code=prog.split("\n");
	var mem;
   init();
   for(i=0;i<code.length;i++) {
   	mem = document.getElementById("mem" + (start + (i*2)));
      mem.innerHTML = code[i].slice(0,2);
   	mem = document.getElementById("mem" + (start + (i*2)+1));
      mem.innerHTML = code[i].slice(2,4);
   }
   setPC(document.program.start_addr.value);
   Runflag=true;
   set_status("Program Loaded");
} // loadit

function runit()
{
   var addr;
   while(Runflag) {
      addr=hex_dec(getPC());
      setIR(getmem(addr) + "" +  getmem(addr+1));
      setPC(addr+2);
      execute(getIR());
   }
   set_status("Program Ended");
} //runit

function stepit()
{
   var addr=hex_dec(getPC());
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
