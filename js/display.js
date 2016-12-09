// display controls
function set_status(str)
{
   var status = MWJ_findObj('status');
   status.innerHTML=str;
} // set_status

function writedebug(str)
{
   var debug = MWJ_findObj('debug');
	debug.value += "\n" + str;
} // writedebug

function showregs()
{
  var memstr="";
  for(i=0;i<NumRegs;i++) {
     memstr = memstr + (i).toString(16) + ": " + Registers[i] + "\n";
  } // inner for
  document.program.regs.value=memstr;
} // showregs

function make_prog()
{
   document.writeln("<form name=program>");
   document.writeln("<table>");
   document.writeln("<tr>");
   document.writeln("<td><b>Program Text</b><br>");
   document.writeln("<textarea name='prog' rows=15 cols=6></textarea></td>");

   document.writeln("<td><table>");
   document.writeln("<tr><td><b>Program Start <br>Address</b><br>");
   document.writeln("<input type=text name='start_addr' size=10></td></tr>");
   document.writeln("<tr><td><b>Set Memory <br>Values</b><br>");
   document.writeln("<textarea name='memval' rows=8 cols=8></textarea></td></tr>");
   document.writeln("</table></td>");

   document.writeln("<td><b>Registers</b><br>");
   document.writeln("<textarea name='regs' rows=16 cols=6></textarea></td>");
   document.writeln("<td><b>Memory</b><br>");
   document.writeln("<textarea name='mem1' rows="+MemDisp+" cols=6></textarea></td>");
   document.writeln("<td><b>Memory</b><br>");
   document.writeln("<textarea name='mem2' rows="+MemDisp+" cols=6></textarea></td>");
   document.writeln("<td><b>Memory</b><br>");
   document.writeln("<textarea name='mem3' rows="+MemDisp+" cols=6></textarea></td>");
   document.writeln("<td><b>Memory</b><br>");
   document.writeln("<textarea name='mem4' rows="+MemDisp+" cols=6></textarea></td>");
   document.writeln("<td><b>Memory</b><br>");
   document.writeln("<textarea name='mem5' rows="+MemDisp+" cols=6></textarea></td>");
   document.writeln("</tr>");
   document.writeln("</table>");
   document.writeln("</form>");
} // make_prog

function init()
{
   for(i=0;i<16;i++) Registers[i]="00";
   for(i=0;i<255;i++) Memory[i]="00";
   var pc = MWJ_findObj('pc');
   pc.innerHTML="00";
   var ir = MWJ_findObj('ir');
   ir.innerHTML="";
}

function clearit()
{
   init();
   document.program.prog.value="";
   set_status("");
}
