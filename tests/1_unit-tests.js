const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Read a whole number input.', function(done) {
        let input = '35kg'
        assert.equal(convertHandler.getNum(input), 35);
        done();
    });
    test('Read a decimal number input', function(done) {
        let decimal = '109.30l'
        assert.equal(convertHandler.getNum(decimal), 109.30);
        done()
    });
    test('Read a fractional input', function(done) {
        let fraction = '259/32gal'
        assert.equal(convertHandler.getNum(fraction), 259/32)
        done()
    });
    test('Read a fractional input with a decimal', function (done) {
        let fractionWithDecimal = '245.45/213.34gal'
        assert.equal(convertHandler.getNum(fractionWithDecimal), 245.45/213.34)
        done()
    });
    test('Return an error on a double-fraction', function (done) {
        let nullFraction = '34/53/12km'
        assert.equal(convertHandler.getNum(nullFraction), 'Invalid number')
        done()
    });
    test('default to a numerical input of 1 when no numerical input is provided', function (done) {
        let noNumInput = 'kg'
        assert.equal(convertHandler.getNum(noNumInput), 1)
        done()
    });
    test('read each valid input unit', function (done) {
        let input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG']
        let input2 = []
        input.forEach(function(element) {
            if (element === 'l') {
                input2.push('L')
            }
            if (element === 'L') {
                input2.push('L')
            }
            else {
                input2.push(element.toLowerCase())
            }
        })
        input2.forEach(function(element) {
            assert.equal(convertHandler.getUnit(45 + element), element)
        })
        done()
    });
    test('return an error for an invalid input unit', function (done) {
        let input = '345kilometers'
        assert.equal(convertHandler.getUnit(input), 'invalid unit')
        done()
    });
    test('return unit for each valid input unit', function (done) {
        let input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg']
        let expect = ['L', 'gal', 'km', 'mi', 'kg', 'lbs']
        input.forEach(function(element, i) {
            assert.equal(convertHandler.getReturnUnit(element), expect[i]);
        })
        done()        
    });
    test('return the spelled-out string unit for each valid input unit', function (done) {
        let input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg']
        let expect = ['gallon(s)', 'litre(s)', 'mile(s)', 'kilometer(s)', 'pound(s)', 'kilogram(s)']
        input.forEach(function(element, i) {
            assert.equal(convertHandler.spellOutUnit(element), expect[i])
        })
        done()
    });
    test('should correctly convert gal to L', function (done) {
        let initNum = 3
        let initUnit = 'gal'
        let convert = 3.78541;
        assert.equal(convertHandler.convert(initNum, initUnit), (initNum*convert).toFixed(5))
        done()
    })
    test('should correctly convert L to gal', function (done) {
        let initNum = 3
        let initUnit = 'L'
        let convert = 3.78541;
        assert.equal(convertHandler.convert(initNum, initUnit), (initNum/convert).toFixed(5))
        done()
    });
    test('should correctly convert mi to km', function (done) {
        let initNum = 3
        let initUnit = 'mi'
        let convert = 1.60934;
        assert.equal(convertHandler.convert(initNum, initUnit), (initNum*convert).toFixed(5))
        done()
    });4
    test('should correctly convert km to mi', function (done) {
        let initNum = 3
        let initUnit = 'km'
        let convert = 1.60934;
        assert.equal(convertHandler.convert(initNum, initUnit), (initNum/convert).toFixed(5))
        done()
    });
    test('should correctly convert lbs to kg', function(done) {
        let initNum = 3
        let initUnit = 'lbs'
        let convert = 0.453592;
        assert.equal(convertHandler.convert(initNum, initUnit), (initNum*convert).toFixed(5))
        done()
    });
    test('should correctly convert kg to lbs', function (done) {
        let initNum = 3
        let initUnit = 'kg'
        let convert = 0.453592;
        assert.equal(convertHandler.convert(initNum, initUnit), (initNum/convert).toFixed(5))
        done()
    });
});