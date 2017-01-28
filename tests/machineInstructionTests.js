QUnit.module( "Utilities: toHex Tests");

QUnit.test( "decimal to hex: 10 -> A", function( assert ) {
  var hexValue = Utilities.toHex(10);
  console.log('toHex : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , "A", "Passed!" );
});

QUnit.test( "decimal to hex: 9 -> 9", function( assert ) {
  var hexValue = Utilities.toHex(9);
  console.log('toHex : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , "9", "Passed!" );
});

QUnit.test( "decimal to hex: 16 -> -", function( assert ) {
  var hexValue = Utilities.toHex(16);
  console.log('toHex : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , "-", "Passed!" );
});

QUnit.test( "decimal to hex: 15 -> F", function( assert ) {
  var hexValue = Utilities.toHex(15);
  console.log('toHex : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , "F", "Passed!" );
});

QUnit.test( "decimal to hex: -1 -> -", function( assert ) {
  var hexValue = Utilities.toHex(-1);
  console.log('toHex : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , "-", "Passed!" );
});

QUnit.module( 'Utilities: hexify (Binary To Hex) Tests');
QUnit.test( 'binary to hex: 1111 ->F ', function( assert ) {
  var hexValue = Utilities.hexify('1111');
  console.log('hexify : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , 'F', "Passed!" );
});

QUnit.test( 'binary to hex: 0 ->- ', function( assert ) {
  var hexValue = Utilities.hexify('0');
  console.log('hexify : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , '-', "Passed!" );
});

QUnit.test( 'binary to hex: 0000 ->- ', function( assert ) {
  var hexValue = Utilities.hexify('0000');
  console.log('hexify : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , '0', "Passed!" );
});

QUnit.test( 'binary to hex: 0101 ->5 ', function( assert ) {
  var hexValue = Utilities.hexify('0101');
  console.log('hexify : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , '5', "Passed!" );
});

QUnit.test( 'binary to hex: 1011 ->B ', function( assert ) {
  var hexValue = Utilities.hexify('1011');
  console.log('hexify : hexValue =:'+hexValue+':');
  assert.deepEqual( hexValue , 'B', "Passed!" );
});

QUnit.module('Utilities: HexToBinary Tests');
QUnit.test('B -> 1011', function(assert) {
  var binValue = Utilities.hexToBinary('B');
  console.log('hexToBinary : binValue =:'+binValue+':');
  assert.deepEqual(binValue,'1011', "Passed!");
});

QUnit.test('B -> 1011', function(assert) {
  var binValue = Utilities.hexToBinary('B');
  var binValueOld = Utilities.binify('B');
  console.log('hexToBinary : binValue =:'+binValue+': binValue2=:'+binValueOld+':');
  assert.deepEqual(binValue,binValueOld, "Passed!");
});

QUnit.module('Utilities: String To Hex Tests');
QUnit.test('"B" -> 1011', function(assert) {
  var intValue = parseInt('B',16);
  console.log('String To Hex : intValue =:'+intValue+':');
  var stringValue = intValue.toString(2);
  console.log('String To Hex : stringValue =:'+stringValue+':');
  assert.deepEqual(stringValue,"1011", "Passed!");
});
