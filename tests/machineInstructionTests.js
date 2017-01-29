QUnit.module( "Utilities: isGoodHex Tests");
QUnit.test( "A", function( assert ) {
  assert.ok( Utilities.isGoodHexDigit('A') , "Passed!" );
});
QUnit.test( "0", function( assert ) {
  assert.ok( Utilities.isGoodHexDigit('0') , "Passed!" );
});
QUnit.test( "G", function( assert ) {
  assert.ok( !Utilities.isGoodHexDigit('G') , "Passed!" );
});
QUnit.test( "0A", function( assert ) {
  assert.ok( !Utilities.isGoodHexDigit('0AG') , "Passed!" );
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

QUnit.module('Utilities: isGoodHexDigit Tests');
QUnit.test('"B" ', function(assert) {
    var result = Utilities.isGoodHexDigit("b");
    console.log('isGo0dHexDigit : result=:'+result+':');
    assert.ok(result, "Passed!");
});

QUnit.test('"0" ', function(assert) {
    var result = Utilities.isGoodHexDigit("b");
    console.log('isGo0dHexDigit : result=:'+result+':');
    assert.ok(result, "Passed!");
});

QUnit.test('"F" ', function(assert) {
    var result = Utilities.isGoodHexDigit("F");
    console.log('isGo0dHexDigit : result=:'+result+':');
    assert.ok(result, "Passed!");
});

QUnit.test('"f" ', function(assert) {
    var result = Utilities.isGoodHexDigit("F");
    console.log('isGo0dHexDigit : result=:'+result+':');
    assert.ok(result, "Passed!");
});

QUnit.test('"g" ', function(assert) {
    var result = Utilities.isGoodHexDigit("g");
    console.log('isGo0dHexDigit : result=:'+result+':');
    assert.ok(!result, "Passed!");
});

QUnit.module('Utilities: Hex to Int Tests');
QUnit.test('"B" -> 11', function(assert) {
    var intValue = Utilities.hexToInt("b");
    console.log('hexToInt : intValue=:'+intValue+':');
    assert.deepEqual(intValue,11, "Passed!");
});

QUnit.test('"0" -> 0', function(assert) {
    var intValue = Utilities.hexToInt("0");
    console.log('hexToInt : intValue=:'+intValue+':');
    assert.deepEqual(intValue,0, "Passed!");
});

QUnit.test('"F" -> 15', function(assert) {
    var intValue = Utilities.hexToInt("F");
    console.log('hexToInt : intValue=:'+intValue+':');
    assert.deepEqual(intValue,15, "Passed!");
});

QUnit.test('"G" -> 16', function(assert) {
    try {
        var intValue = Utilities.hexToInt("g");
        console.log('hexToInt : intValue=:'+intValue+':');
        assert.deepEqual(intValue,16, "Passed!");
    }
    catch(e) {
        console.log('hexToInt : exception=:'+e+':');
        assert.ok(e=="Invalid Hex Value", "Passed!");
    }
});

QUnit.test('"FF" -> 255', function(assert) {
    var intValue = Utilities.hexToInt("FF");
    console.log('hexToInt : intValue=:'+intValue+':');
    assert.deepEqual(intValue,255, "Passed!");
});
