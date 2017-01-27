QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
})

QUnit.test( "decimal to hex: 10 -> A", function( assert ) {
  var hexValue = Utilities.toHex(10);
  console.log('toHex Test1: hexValue =:'+hexValue+':');
  assert.ok( hexValue == "A", "Passed!" );
})

QUnit.test( "decimal to hex: 9 -> 9", function( assert ) {
  var hexValue = Utilities.toHex(9);
  console.log('toHex Test1: hexValue =:'+hexValue+':');
  assert.ok( hexValue == "9", "Passed!" );
})

QUnit.test( "decimal to hex: 16 -> -", function( assert ) {
  var hexValue = Utilities.toHex(16);
  console.log('toHex Test1: hexValue =:'+hexValue+':');
  assert.ok( hexValue == "-", "Passed!" );
})

QUnit.test( "decimal to hex: 15 -> F", function( assert ) {
  var hexValue = Utilities.toHex(15);
  console.log('toHex Test1: hexValue =:'+hexValue+':');
  assert.ok( hexValue == "F", "Passed!" );
})

QUnit.test( "decimal to hex: -1 -> -", function( assert ) {
  var hexValue = Utilities.toHex(-1);
  console.log('toHex Test1: hexValue =:'+hexValue+':');
  assert.ok( hexValue == "-", "Passed!" );
})
