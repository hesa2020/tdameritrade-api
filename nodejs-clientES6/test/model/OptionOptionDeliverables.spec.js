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
    instance = new GitChrisQueen_TDA_JS.OptionOptionDeliverables();
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

  describe('OptionOptionDeliverables', function() {
    it('should create an instance of OptionOptionDeliverables', function() {
      // uncomment below and update the code to test OptionOptionDeliverables
      //var instane = new GitChrisQueen_TDA_JS.OptionOptionDeliverables();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.OptionOptionDeliverables);
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instane = new GitChrisQueen_TDA_JS.OptionOptionDeliverables();
      //expect(instance).to.be();
    });

    it('should have the property deliverableUnits (base name: "deliverableUnits")', function() {
      // uncomment below and update the code to test the property deliverableUnits
      //var instane = new GitChrisQueen_TDA_JS.OptionOptionDeliverables();
      //expect(instance).to.be();
    });

    it('should have the property currencyType (base name: "currencyType")', function() {
      // uncomment below and update the code to test the property currencyType
      //var instane = new GitChrisQueen_TDA_JS.OptionOptionDeliverables();
      //expect(instance).to.be();
    });

    it('should have the property assetType (base name: "assetType")', function() {
      // uncomment below and update the code to test the property assetType
      //var instane = new GitChrisQueen_TDA_JS.OptionOptionDeliverables();
      //expect(instance).to.be();
    });

  });

}));
