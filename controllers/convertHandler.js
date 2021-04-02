function ConvertHandler() {
  
  this.getNum = function(input) {
    if (input == '') {
      return 'Invalid number'
    }

    let regex = /[a-z]+|[^a-z]+/gi
    let numRegex = /\d/g
    var result

    result = input.match(regex)[0]

    if (numRegex.test(result) === false) {
      result = 1
    }

    if (result.toString().includes('/')) {
      let values = result.toString().split('/')
      if (result.toString().split('/').length != 2) {
        return "Invalid number"
      }
      values[0] = parseFloat(values[0])
      values[1] = parseFloat(values[1])
      result = parseFloat((values[0]/values[1]));
    }

    if(isNaN(result)) {
      return 'Invalid number'
    }

    return result;
  };
  
  this.getUnit = function(input) {

    if (input == '') {
      return 'invalid unit'
    }

    let regex = /[a-z]+|[^a-z]+/gi
    let result = input.match(regex)[1]
    let validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']

    if (!result) {
      result = input.match(regex)[0]
    }

    if (!validUnits.includes(result)) {
      return 'invalid unit'
    }
    if (result == 'L' || result == 'l') {
      result = 'L'
      return result
    }
    return result.toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    if (initUnit == 'gal') {
      result = 'L'
    }

    if (initUnit == 'L') {
      result = 'gal'
    }

    if (initUnit == 'mi') {
      result = 'km'
    }

    if (initUnit == 'km') {
      result = 'mi'
    }
    if (initUnit == 'lbs') {
      result = 'kg'
    }
    if (initUnit == 'kg') {
      result = 'lbs'
    }

    return result;
    
  };

  this.spellOutUnit = function(unit) {
    let result;

    if (unit == 'gal') {
      result = 'gallon(s)'
    }

    if (unit == 'L') {
      result = 'litre(s)'
    }

    if (unit == 'mi') {
      result = 'mile(s)'
    }

    if (unit == 'km') {
      result = 'kilometer(s)'
    }
    if (unit == 'lbs') {
      result = 'pound(s)'
    }
    if (unit == 'kg') {
      result = 'kilogram(s)'
    }

    return result;   
  
  };

  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (initUnit == 'gal' || initUnit == 'GAL') {
      result = (initNum * galToL).toFixed(5)
    } else if (initUnit == 'l' || initUnit == 'L') {
      result = (initNum/galToL).toFixed(5)
    }

    if (initUnit == 'mi' || initUnit ==='MI') {
      result = (initNum*miToKm).toFixed(5)
    } else if (initUnit == 'km' || initUnit == 'KM') {
      result = (initNum/miToKm).toFixed(5)
    }

    if (initUnit == 'lbs' || initUnit == 'LBS') {
      result = (initNum*lbsToKg).toFixed(5)
    } else if (initUnit == 'kg' || initUnit == 'KG') {
      result = (initNum/lbsToKg).toFixed(5)
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    result = `${initNum} ${this.spellOutUnit(initUnit)}converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    
    return result;
  };
  
}

module.exports = ConvertHandler;
