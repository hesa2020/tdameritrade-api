/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitChrisQueen_TDA_JS);
  }
}(this, function(expect, GitChrisQueen_TDA_JS) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitChrisQueen_TDA_JS.MutualFundQuote();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MutualFundQuote', function() {
    it('should create an instance of MutualFundQuote', function() {
      // uncomment below and update the code to test MutualFundQuote
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.MutualFundQuote);
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property closePrice (base name: "closePrice")', function() {
      // uncomment below and update the code to test the property closePrice
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property netChange (base name: "netChange")', function() {
      // uncomment below and update the code to test the property netChange
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property totalVolume (base name: "totalVolume")', function() {
      // uncomment below and update the code to test the property totalVolume
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property tradeTimeInLong (base name: "tradeTimeInLong")', function() {
      // uncomment below and update the code to test the property tradeTimeInLong
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property exchange (base name: "exchange")', function() {
      // uncomment below and update the code to test the property exchange
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property exchangeName (base name: "exchangeName")', function() {
      // uncomment below and update the code to test the property exchangeName
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property digits (base name: "digits")', function() {
      // uncomment below and update the code to test the property digits
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property _52WkHigh (base name: "52WkHigh")', function() {
      // uncomment below and update the code to test the property _52WkHigh
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property _52WkLow (base name: "52WkLow")', function() {
      // uncomment below and update the code to test the property _52WkLow
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property nAV (base name: "nAV")', function() {
      // uncomment below and update the code to test the property nAV
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property perRatio (base name: "perRatio")', function() {
      // uncomment below and update the code to test the property perRatio
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property divAmount (base name: "divAmount")', function() {
      // uncomment below and update the code to test the property divAmount
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property divYield (base name: "divYield")', function() {
      // uncomment below and update the code to test the property divYield
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property divDate (base name: "divDate")', function() {
      // uncomment below and update the code to test the property divDate
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

    it('should have the property securityStatus (base name: "securityStatus")', function() {
      // uncomment below and update the code to test the property securityStatus
      //var instane = new GitChrisQueen_TDA_JS.MutualFundQuote();
      //expect(instance).to.be();
    });

  });

}));