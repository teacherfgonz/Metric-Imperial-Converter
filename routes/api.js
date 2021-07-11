'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
      app.route('/api/convert').get((req, res) => {
        var input = req.query.input;
        var initNum = convertHandler.getNum(input);
        var initUnit = convertHandler.getUnit(input);
        var returnNum = convertHandler.convert(initNum, initUnit)
        var returnUnit = convertHandler.getReturnUnit(initUnit)
        var string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)

        console.log(input)

        if (initNum === 'Invalid number' && initUnit === 'invalid unit') {
          res.json('Invalid number and unit')
        }

        if (initNum === 'Invalid number') {
          res.json('Invalid number')
        }

        if (initUnit === 'invalid unit') {
          res.json('Invalid unit')
        }

        res.json({
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string
        })
      })
};
