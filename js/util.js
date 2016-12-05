// various utilities
function hexify(a)
{
   if( a == "0000") return("0");
   if( a == "0001") return("1");
   if( a == "0010") return("2");
   if( a == "0011") return("3");
   if( a == "0100") return("4");
   if( a == "0101") return("5");
   if( a == "0110") return("6");
   if( a == "0111") return("7");
   if( a == "1000") return("8");
   if( a == "1001") return("9");
   if( a == "1010") return("A");
   if( a == "1011") return("B");
   if( a == "1100") return("C");
   if( a == "1101") return("D");
   if( a == "1110") return("E");
   if( a == "1111") return("F");
   return("00");
} //hexify

function binify(a)
{
   switch(a.toLowerCase()) {
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

function decify(a)
{
   switch(a.toLowerCase()) {
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

function hex_dec(a)
{
	writedebug("hexdec a = :" + a + ":");
   if(a.length > 1) {
      var d1=decify(a.slice(0,1));
      var d2=decify(a.slice(1,2));
      return(((d1-0) * 16) + (d2-0)); 
   }
   else {
      return(decify(a.slice(0,1))); 
   }
} // hex_dec
