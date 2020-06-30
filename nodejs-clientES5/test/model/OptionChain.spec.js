/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
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

  describe('(package)', function() {
    describe('OptionChain', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.OptionChain();
      });

      it('should create an instance of OptionChain', function() {
        // TODO: update the code to test OptionChain
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.OptionChain);
      });

      it('should have the property callExpDateMap (base name: "callExpDateMap")', function() {
        // TODO: update the code to test the property callExpDateMap
        expect(instance).to.have.property('callExpDateMap');
        // expect(instance.callExpDateMap).to.be(expectedValueLiteral);
      });

      it('should have the property daysToExpiration (base name: "daysToExpiration")', function() {
        // TODO: update the code to test the property daysToExpiration
        expect(instance).to.have.property('daysToExpiration');
        // expect(instance.daysToExpiration).to.be(expectedValueLiteral);
      });

      it('should have the property interestRate (base name: "interestRate")', function() {
        // TODO: update the code to test the property interestRate
        expect(instance).to.have.property('interestRate');
        // expect(instance.interestRate).to.be(expectedValueLiteral);
      });

      it('should have the property interval (base name: "interval")', function() {
        // TODO: update the code to test the property interval
        expect(instance).to.have.property('interval');
        // expect(instance.interval).to.be(expectedValueLiteral);
      });

      it('should have the property isDelayed (base name: "isDelayed")', function() {
        // TODO: update the code to test the property isDelayed
        expect(instance).to.have.property('isDelayed');
        // expect(instance.isDelayed).to.be(expectedValueLiteral);
      });

      it('should have the property isIndex (base name: "isIndex")', function() {
        // TODO: update the code to test the property isIndex
        expect(instance).to.have.property('isIndex');
        // expect(instance.isIndex).to.be(expectedValueLiteral);
      });

      it('should have the property putExpDateMap (base name: "putExpDateMap")', function() {
        // TODO: update the code to test the property putExpDateMap
        expect(instance).to.have.property('putExpDateMap');
        // expect(instance.putExpDateMap).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property strategy (base name: "strategy")', function() {
        // TODO: update the code to test the property strategy
        expect(instance).to.have.property('strategy');
        // expect(instance.strategy).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property underlying (base name: "underlying")', function() {
        // TODO: update the code to test the property underlying
        expect(instance).to.have.property('underlying');
        // expect(instance.underlying).to.be(expectedValueLiteral);
      });

      it('should have the property underlyingPrice (base name: "underlyingPrice")', function() {
        // TODO: update the code to test the property underlyingPrice
        expect(instance).to.have.property('underlyingPrice');
        // expect(instance.underlyingPrice).to.be(expectedValueLiteral);
      });

      it('should have the property volatility (base name: "volatility")', function() {
        // TODO: update the code to test the property volatility
        expect(instance).to.have.property('volatility');
        // expect(instance.volatility).to.be(expectedValueLiteral);
      });

    });
  });

}));
