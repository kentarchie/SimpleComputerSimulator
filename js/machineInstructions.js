// actual machine instructions

function rotate(register,amount)
{
   var regstr=Registers[Utilities.hexToInt(register)];
   var value=binify(regstr.slice(0,1)) + binify(regstr.slice(1,2));
   for(var i=0;i<hex_dec(amount);i++) {
      var bit=value.charAt(7);
      var v=bit+value.slice(0,7);
      value=v;
   } // for
   return(hexify(value.slice(0,4)) + hexify(value.slice(4,8)));
} // rotate

function xor(a,b)
{
   var r,l,res="";
   var left=binify(a.slice(0,1)) + binify(a.slice(1,2));
   var right=binify(b.slice(0,1)) + binify(b.slice(1,2));
   for(var i=0;i<8;i++) {
      l=left.charAt(i)-0; r=right.charAt(i)-0;
      if((r+l) == 0) res = res + "0";
      if((r+l) == 1) res = res + "1";
      if((r+l) == 2) res = res + "0";
   } // for
   return(hexify(res.slice(0,4)) + hexify(res.slice(4,8)));
} // xor

function twos_add(a,b)
{
   var r,l,carry=0,res="",result="";
   var left=binify(a.slice(0,1)) + binify(a.slice(1,2));
   var right=binify(b.slice(0,1)) + binify(b.slice(1,2));
   for(i=7;i>=0;i--) {
      l=left.charAt(i)-0; r=right.charAt(i)-0;
      if((r+l) == 0) {res = res + carry; carry=0;}
      if((r+l) == 1)
	 if(carry == 1) res = res + "0";
	 else res = res + "1";
      if((r+l) == 2) {
	 if(carry == 1) {
            res = res + "1"; carry = 1;
	 }
	 else {
            res = res + "0"; carry = 1;
	 }
      }
   } // for
   // reverse the string
   for(i=7;i>=0;i--) {
      result = result + res.charAt(i);
   }
   return(hexify(result.slice(0,4)) + hexify(result.slice(4,8)));
} // twos_add

function float_add(a,b)
{
   return((a-0)+(b-0));
} // float_add
