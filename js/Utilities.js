// various utilities
function Utilities()
{
}

Utilities.ValidHexDigits = "0123456789ABCDEF";

Utilities.isGoodHexDigit = function(hexDigit)
{
	if(hexDigit.length != 1) return false;
	if(Utilities.ValidHexDigits.indexOf(hexDigit.toUpperCase()) == -1) return false;
	return true;
} // isGoodHexDigit

Utilities.hexToInt = function(hexValue)
{
	var intValue = 0;
	for(var h=hexValue.length-1; h>=0; --h) {
		var thisChar = hexValue.charAt(h);
		console.log('Utilities.hexToInt: hexValue.charAt('+h+') = :'+thisChar+':')
		if(!Utilities.isGoodHexDigit(thisChar)) throw "Invalid Hex Value";
		console.log('Utilities.hexToInt:  = :'+parseInt(thisChar,16)+':')
		intValue += parseInt(thisChar,16) * Math.pow(16,h);
	}
		console.log('Utilities.hexToInt:  intValue= :'+intValue+':')
	return intValue;
} // hexToInt

Utilities.hexToBinary = function(hexValue)
{
	var bitString = Utilities.hexToInt(hexValue).toString(2);
	console.log('Utilities.hexToInt:  bitString= :'+bitString+':')
	return bitString;
} // hexToBinary

Utilities.intToHex = function(intValue)
{
	var hexValue = intValue.toString(16).toUpperCase();
	console.log('Utilities.intToHex:  hexValue= :'+hexValue+':')
	return hexValue;
} // intToHex

Utilities.binaryToHex = function(bitString)
{
	var intValue = parseInt(bitString,2);
	console.log('Utilities.binaryToHex:  intValue= :'+intValue+':')
	return Utilities.intToHex(intValue);
} // binaryToHex
