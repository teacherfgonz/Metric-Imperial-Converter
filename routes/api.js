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

        if (initNum === 'Invalid number' && initUnit === 'invalid unit') {
          res.json('invalid number and unit')
          return
        }

        if (initNum === 'Invalid number') {
          res.json('invalid number')
          return
        }

        if (initUnit === 'invalid unit') {
          res.json('invalid unit')
          return
        }

        return res.json({
          initNum: Number(initNum),
          initUnit,
          returnNum: Number(returnNum),
          returnUnit,
          string
        })
      })
};
