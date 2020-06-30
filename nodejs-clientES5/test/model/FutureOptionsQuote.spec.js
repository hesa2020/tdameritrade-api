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
    describe('FutureOptionsQuote', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.FutureOptionsQuote();
      });

      it('should create an instance of FutureOptionsQuote', function() {
        // TODO: update the code to test FutureOptionsQuote
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.FutureOptionsQuote);
      });

      it('should have the property askPriceInDouble (base name: "askPriceInDouble")', function() {
        // TODO: update the code to test the property askPriceInDouble
        expect(instance).to.have.property('askPriceInDouble');
        // expect(instance.askPriceInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property bidPriceInDouble (base name: "bidPriceInDouble")', function() {
        // TODO: update the code to test the property bidPriceInDouble
        expect(instance).to.have.property('bidPriceInDouble');
        // expect(instance.bidPriceInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property closePriceInDouble (base name: "closePriceInDouble")', function() {
        // TODO: update the code to test the property closePriceInDouble
        expect(instance).to.have.property('closePriceInDouble');
        // expect(instance.closePriceInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property contractType (base name: "contractType")', function() {
        // TODO: update the code to test the property contractType
        expect(instance).to.have.property('contractType');
        // expect(instance.contractType).to.be(expectedValueLiteral);
      });

      it('should have the property deltaInDouble (base name: "deltaInDouble")', function() {
        // TODO: update the code to test the property deltaInDouble
        expect(instance).to.have.property('deltaInDouble');
        // expect(instance.deltaInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property digits (base name: "digits")', function() {
        // TODO: update the code to test the property digits
        expect(instance).to.have.property('digits');
        // expect(instance.digits).to.be(expectedValueLiteral);
      });

      it('should have the property exchangeName (base name: "exchangeName")', function() {
        // TODO: update the code to test the property exchangeName
        expect(instance).to.have.property('exchangeName');
        // expect(instance.exchangeName).to.be(expectedValueLiteral);
      });

      it('should have the property exerciseType (base name: "exerciseType")', function() {
        // TODO: update the code to test the property exerciseType
        expect(instance).to.have.property('exerciseType');
        // expect(instance.exerciseType).to.be(expectedValueLiteral);
      });

      it('should have the property expirationType (base name: "expirationType")', function() {
        // TODO: update the code to test the property expirationType
        expect(instance).to.have.property('expirationType');
        // expect(instance.expirationType).to.be(expectedValueLiteral);
      });

      it('should have the property futureExpirationDate (base name: "futureExpirationDate")', function() {
        // TODO: update the code to test the property futureExpirationDate
        expect(instance).to.have.property('futureExpirationDate');
        // expect(instance.futureExpirationDate).to.be(expectedValueLiteral);
      });

      it('should have the property futureIsActive (base name: "futureIsActive")', function() {
        // TODO: update the code to test the property futureIsActive
        expect(instance).to.have.property('futureIsActive');
        // expect(instance.futureIsActive).to.be(expectedValueLiteral);
      });

      it('should have the property futureIsTradable (base name: "futureIsTradable")', function() {
        // TODO: update the code to test the property futureIsTradable
        expect(instance).to.have.property('futureIsTradable');
        // expect(instance.futureIsTradable).to.be(expectedValueLiteral);
      });

      it('should have the property futurePercentChange (base name: "futurePercentChange")', function() {
        // TODO: update the code to test the property futurePercentChange
        expect(instance).to.have.property('futurePercentChange');
        // expect(instance.futurePercentChange).to.be(expectedValueLiteral);
      });

      it('should have the property futureTradingHours (base name: "futureTradingHours")', function() {
        // TODO: update the code to test the property futureTradingHours
        expect(instance).to.have.property('futureTradingHours');
        // expect(instance.futureTradingHours).to.be(expectedValueLiteral);
      });

      it('should have the property gammaInDouble (base name: "gammaInDouble")', function() {
        // TODO: update the code to test the property gammaInDouble
        expect(instance).to.have.property('gammaInDouble');
        // expect(instance.gammaInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property highPriceInDouble (base name: "highPriceInDouble")', function() {
        // TODO: update the code to test the property highPriceInDouble
        expect(instance).to.have.property('highPriceInDouble');
        // expect(instance.highPriceInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property inTheMoney (base name: "inTheMoney")', function() {
        // TODO: update the code to test the property inTheMoney
        expect(instance).to.have.property('inTheMoney');
        // expect(instance.inTheMoney).to.be(expectedValueLiteral);
      });

      it('should have the property lastPriceInDouble (base name: "lastPriceInDouble")', function() {
        // TODO: update the code to test the property lastPriceInDouble
        expect(instance).to.have.property('lastPriceInDouble');
        // expect(instance.lastPriceInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property lowPriceInDouble (base name: "lowPriceInDouble")', function() {
        // TODO: update the code to test the property lowPriceInDouble
        expect(instance).to.have.property('lowPriceInDouble');
        // expect(instance.lowPriceInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property mark (base name: "mark")', function() {
        // TODO: update the code to test the property mark
        expect(instance).to.have.property('mark');
        // expect(instance.mark).to.be(expectedValueLiteral);
      });

      it('should have the property moneyIntrinsicValueInDouble (base name: "moneyIntrinsicValueInDouble")', function() {
        // TODO: update the code to test the property moneyIntrinsicValueInDouble
        expect(instance).to.have.property('moneyIntrinsicValueInDouble');
        // expect(instance.moneyIntrinsicValueInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property multiplierInDouble (base name: "multiplierInDouble")', function() {
        // TODO: update the code to test the property multiplierInDouble
        expect(instance).to.have.property('multiplierInDouble');
        // expect(instance.multiplierInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property netChangeInDouble (base name: "netChangeInDouble")', function() {
        // TODO: update the code to test the property netChangeInDouble
        expect(instance).to.have.property('netChangeInDouble');
        // expect(instance.netChangeInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property openInterest (base name: "openInterest")', function() {
        // TODO: update the code to test the property openInterest
        expect(instance).to.have.property('openInterest');
        // expect(instance.openInterest).to.be(expectedValueLiteral);
      });

      it('should have the property openPriceInDouble (base name: "openPriceInDouble")', function() {
        // TODO: update the code to test the property openPriceInDouble
        expect(instance).to.have.property('openPriceInDouble');
        // expect(instance.openPriceInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property rhoInDouble (base name: "rhoInDouble")', function() {
        // TODO: update the code to test the property rhoInDouble
        expect(instance).to.have.property('rhoInDouble');
        // expect(instance.rhoInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property securityStatus (base name: "securityStatus")', function() {
        // TODO: update the code to test the property securityStatus
        expect(instance).to.have.property('securityStatus');
        // expect(instance.securityStatus).to.be(expectedValueLiteral);
      });

      it('should have the property strikePriceInDouble (base name: "strikePriceInDouble")', function() {
        // TODO: update the code to test the property strikePriceInDouble
        expect(instance).to.have.property('strikePriceInDouble');
        // expect(instance.strikePriceInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property thetaInDouble (base name: "thetaInDouble")', function() {
        // TODO: update the code to test the property thetaInDouble
        expect(instance).to.have.property('thetaInDouble');
        // expect(instance.thetaInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property tick (base name: "tick")', function() {
        // TODO: update the code to test the property tick
        expect(instance).to.have.property('tick');
        // expect(instance.tick).to.be(expectedValueLiteral);
      });

      it('should have the property tickAmount (base name: "tickAmount")', function() {
        // TODO: update the code to test the property tickAmount
        expect(instance).to.have.property('tickAmount');
        // expect(instance.tickAmount).to.be(expectedValueLiteral);
      });

      it('should have the property timeValueInDouble (base name: "timeValueInDouble")', function() {
        // TODO: update the code to test the property timeValueInDouble
        expect(instance).to.have.property('timeValueInDouble');
        // expect(instance.timeValueInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property underlying (base name: "underlying")', function() {
        // TODO: update the code to test the property underlying
        expect(instance).to.have.property('underlying');
        // expect(instance.underlying).to.be(expectedValueLiteral);
      });

      it('should have the property vegaInDouble (base name: "vegaInDouble")', function() {
        // TODO: update the code to test the property vegaInDouble
        expect(instance).to.have.property('vegaInDouble');
        // expect(instance.vegaInDouble).to.be(expectedValueLiteral);
      });

      it('should have the property volatility (base name: "volatility")', function() {
        // TODO: update the code to test the property volatility
        expect(instance).to.have.property('volatility');
        // expect(instance.volatility).to.be(expectedValueLiteral);
      });

    });
  });

}));
