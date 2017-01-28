// various utilities
function Utilities()
{
}

// convert a single decimal digit to hex
Utilities.toHex = function(d)
{
	var hexstring = '0123456789ABCDEF';
	if((d>=0) && (d < 16))
		return hexstring.charAt(d);
	return '-';
} // tohex

Utilities.hexify = function(binaryValue)
{
  if(  binaryValue == '0000') return('0');
   if( binaryValue == '0001') return('1');
   if( binaryValue == '0010') return('2');
   if( binaryValue == '0011') return('3');
   if( binaryValue == '0100') return('4');
   if( binaryValue == '0101') return('5');
   if( binaryValue == '0110') return('6');
   if( binaryValue == '0111') return('7');
   if( binaryValue == '1000') return('8');
   if( binaryValue == '1001') return('9');
   if( binaryValue == '1010') return('A');
   if( binaryValue == '1011') return('B');
   if( binaryValue == '1100') return('C');
   if( binaryValue == '1101') return('D');
   if( binaryValue == '1110') return('E');
   if( binaryValue == '1111') return('F');
   return('-');
} //hexify

Utilities.hexToBinary = function(hexValueAsString)
{
	console.log('Utilities.hexToBinary: hexValue=:'+hexValue+':')
	var hexValue = parseInt(hexValueAsString,16);
	var res = hexValue.toString(2);
	console.log('Utilities.hexToBinary: res=:'+res+':')
	return res;
}  // hexToBinary

Utilities.binify = function(hexValue)
{
   switch(hexValue.toLowerCase()) {
      case '0' : return("0000");
      case '1' : return("0001");
      case '2' : return("0010");
      case '3' : return("0011");
      case '4' : return("0100");
      case '5' : return("0101");
      case '6' : return("0110");
      case '7' : return("0111");
      case '8' : return("1000");
      case '9' : return("1001");
      case 'a' : return("1010");
      case 'b' : return("1011");
      case 'c' : return("1100");
      case 'd' : return("1101");
      case 'e' : return("1110");
      case 'f' : return("1111");
   } // esac
} //binify

Utilities.decify = function(decimalValue)
{
   switch(decimalValue.toLowerCase()) {
      case '0' : return(0);
      case '1' : return(1);
      case '2' : return(2);
      case '3' : return(3);
      case '4' : return(4);
      case '5' : return(5);
      case '6' : return(6);
      case '7' : return(7);
      case '8' : return(8);
      case '9' : return(9);
      case 'a' : return(10);
      case 'b' : return(11);
      case 'c' : return(12);
      case 'd' : return(13);
      case 'e' : return(14);
      case 'f' : return(15);
   } // esac
} //decify

Utilities.hexToDecimal = function(hexValue)
{
	writedebug("hexdec hexValue = :" + hexValue + ":");
   if(hexValue.length > 1) {
      var d1=decify(hexValue.slice(0,1));
      var d2=decify(hexValue.slice(1,2));
      return(((d1-0) * 16) + (d2-0));
   }
   else {
      return(decify(hexValue.slice(0,1)));
   }
} // hexToDecimal
