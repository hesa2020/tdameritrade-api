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

  beforeEach(function() {
    instance = new GitChrisQueen_TDA_JS.SavedOrdersApi();
  });

  describe('(package)', function() {
    describe('SavedOrdersApi', function() {
      describe('accountsAccountIdSavedordersGET', function() {
        it('should call accountsAccountIdSavedordersGET successfully', function(done) {
          // TODO: uncomment, update parameter values for accountsAccountIdSavedordersGET call and complete the assertions
          /*
          var accountId = 56;

          instance.accountsAccountIdSavedordersGET(accountId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(GitChrisQueen_TDA_JS.OrderGet);
            expect(data.accountId).to.be.a('number');
            expect(data.accountId).to.be("0");
            expect(data.activationPrice).to.be.a('number');
            expect(data.activationPrice).to.be(0.0);
            expect(data.cancelTime).to.be.a(GitChrisQueen_TDA_JS.OrderGetCancelTime);
                  expect(data.cancelTime._date).to.be.a('string');
              expect(data.cancelTime._date).to.be("");
              expect(data.cancelTime.shortFormat).to.be.a('boolean');
              expect(data.cancelTime.shortFormat).to.be(false);
            expect(data.cancelable).to.be.a('boolean');
            expect(data.cancelable).to.be(false);
            {
              let dataCtr = data.childOrderStrategies;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.closedTime).to.be.a(Date);
            expect(data.closedTime).to.be(new Date());
            expect(data.complexOrderStrategyType).to.be.a('string');
            expect(data.complexOrderStrategyType).to.be("NONE");
            expect(data.destinationLinkName).to.be.a('string');
            expect(data.destinationLinkName).to.be("");
            expect(data.duration).to.be.a(GitChrisQueen_TDA_JS.OrderGetDuration);
                  expect(data.duration.schema).to.be.a(GitChrisQueen_TDA_JS.Duration);
      
            expect(data.editable).to.be.a('boolean');
            expect(data.editable).to.be(false);
            expect(data.enteredTime).to.be.a(Date);
            expect(data.enteredTime).to.be(new Date());
            expect(data.filledQuantity).to.be.a('number');
            expect(data.filledQuantity).to.be(0.0);
            {
              let dataCtr = data.orderActivityCollection;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(GitChrisQueen_TDA_JS.OrderGetOrderActivityCollection);
                expect(data.schema).to.be.a(GitChrisQueen_TDA_JS.OrderActivity);
                      expect(data.schema.schema).to.be.a(GitChrisQueen_TDA_JS.Execution);
                        expect(data.schema.schema.activityType).to.be.a('string');
                    expect(data.schema.schema.activityType).to.be("EXECUTION");
                    {
                      let dataCtr = data.schema.schema.executionLegs;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(GitChrisQueen_TDA_JS.ExecutionExecutionLegs);
                        expect(data.legId).to.be.a('number');
                        expect(data.legId).to.be(0);
                        expect(data.mismarkedQuantity).to.be.a('number');
                        expect(data.mismarkedQuantity).to.be(0.0);
                        expect(data.price).to.be.a('number');
                        expect(data.price).to.be(0.0);
                        expect(data.quantity).to.be.a('number');
                        expect(data.quantity).to.be(0.0);
                        expect(data.time).to.be.a(Date);
                        expect(data.time).to.be(new Date());
        
                              }
                    }
                    expect(data.schema.schema.executionType).to.be.a('string');
                    expect(data.schema.schema.executionType).to.be("FILL");
                    expect(data.schema.schema.orderRamainingQuantity).to.be.a('number');
                    expect(data.schema.schema.orderRamainingQuantity).to.be();
                    expect(data.schema.schema.quantity).to.be.a('number');
                    expect(data.schema.schema.quantity).to.be(0.0);

                      }
            }
            expect(data.orderId).to.be.a('number');
            expect(data.orderId).to.be("0");
            {
              let dataCtr = data.orderLegCollection;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(GitChrisQueen_TDA_JS.OrderGetOrderLegCollection);
                expect(data.instruction).to.be.a('string');
                expect(data.instruction).to.be("BUY");
                expect(data.instrument).to.be.a(GitChrisQueen_TDA_JS.OrderGetInstrument);
                      expect(data.instrument.schema).to.be.a(GitChrisQueen_TDA_JS.Instrument);
                        expect(data.instrument.schema.schema).to.be.a(Object);
                    expect(data.instrument.schema.schema).to.be();
                expect(data.legId).to.be.a('number');
                expect(data.legId).to.be("0");
                expect(data.orderLegType).to.be.a('string');
                expect(data.orderLegType).to.be("EQUITY");
                expect(data.positionEffect).to.be.a('string');
                expect(data.positionEffect).to.be("OPENING");
                expect(data.quantity).to.be.a('number');
                expect(data.quantity).to.be(0.0);
                expect(data.quantityType).to.be.a('string');
                expect(data.quantityType).to.be("ALL_SHARES");

                      }
            }
            expect(data.orderStrategyType).to.be.a('string');
            expect(data.orderStrategyType).to.be("SINGLE");
            expect(data.orderType).to.be.a(GitChrisQueen_TDA_JS.OrderGetOrderType);
                  expect(data.orderType.schema).to.be.a(GitChrisQueen_TDA_JS.OrderType);
      
            expect(data.price).to.be.a('number');
            expect(data.price).to.be(0.0);
            expect(data.priceLinkBasis).to.be.a('string');
            expect(data.priceLinkBasis).to.be("MANUAL");
            expect(data.priceLinkType).to.be.a('string');
            expect(data.priceLinkType).to.be("VALUE");
            expect(data.quality).to.be.a('number');
            expect(data.quality).to.be(0.0);
            expect(data.releaseTime).to.be.a(Date);
            expect(data.releaseTime).to.be(new Date());
            expect(data.remainingQuantity).to.be.a('number');
            expect(data.remainingQuantity).to.be(0.0);
            {
              let dataCtr = data.replacingOrderCollection;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.requestedDestination).to.be.a('string');
            expect(data.requestedDestination).to.be("INET");
            expect(data.session).to.be.a(GitChrisQueen_TDA_JS.OrderGetSession);
                  expect(data.session.schema).to.be.a(GitChrisQueen_TDA_JS.Session);
      
            expect(data.specialInstruction).to.be.a('string');
            expect(data.specialInstruction).to.be("ALL_OR_NONE");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("AWAITING_PARENT_ORDER");
            expect(data.statusDescription).to.be.a('string');
            expect(data.statusDescription).to.be("");
            expect(data.stopPrice).to.be.a('number');
            expect(data.stopPrice).to.be(0.0);
            expect(data.stopPriceLinkBasis).to.be.a('string');
            expect(data.stopPriceLinkBasis).to.be("MANUAL");
            expect(data.stopPriceLinkType).to.be.a('string');
            expect(data.stopPriceLinkType).to.be("VALUE");
            expect(data.stopPriceOffset).to.be.a('number');
            expect(data.stopPriceOffset).to.be(0.0);
            expect(data.stopType).to.be.a('string');
            expect(data.stopType).to.be("STANDARD");
            expect(data.tag).to.be.a('string');
            expect(data.tag).to.be("");
            expect(data.taxLotMethod).to.be.a('string');
            expect(data.taxLotMethod).to.be("FIFO");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountsAccountIdSavedordersPOST', function() {
        it('should call accountsAccountIdSavedordersPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for accountsAccountIdSavedordersPOST call and complete the assertions
          /*
          var accountId = 56;
          var opts = {};
          opts.body = new GitChrisQueen_TDA_JS.OrderGet();
          opts.body.accountId = "0";
          opts.body.activationPrice = 0.0;
          opts.body.cancelTime = new GitChrisQueen_TDA_JS.OrderGetCancelTime();
          opts.body.cancelTime._date = "";
          opts.body.cancelTime.shortFormat = false;
          opts.body.cancelable = false;
          opts.body.childOrderStrategies = [];
          opts.body.closedTime = new Date();
          opts.body.complexOrderStrategyType = "NONE";
          opts.body.destinationLinkName = "";
          opts.body.duration = new GitChrisQueen_TDA_JS.OrderGetDuration();
          opts.body.duration.schema = new GitChrisQueen_TDA_JS.Duration();
          opts.body.editable = false;
          opts.body.enteredTime = new Date();
          opts.body.filledQuantity = 0.0;
          opts.body.orderActivityCollection = [new GitChrisQueen_TDA_JS.OrderGetOrderActivityCollection()];
          opts.body.orderActivityCollection[0].schema = new GitChrisQueen_TDA_JS.OrderActivity();
          opts.body.orderActivityCollection[0].schema.schema = new GitChrisQueen_TDA_JS.Execution();
          opts.body.orderActivityCollection[0].schema.schema.activityType = "EXECUTION";
          opts.body.orderActivityCollection[0].schema.schema.executionLegs = [new GitChrisQueen_TDA_JS.ExecutionExecutionLegs()];
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].legId = 0;
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].mismarkedQuantity = 0.0;
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].price = 0.0;
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].quantity = 0.0;
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].time = new Date();
          opts.body.orderActivityCollection[0].schema.schema.executionType = "FILL";
          opts.body.orderActivityCollection[0].schema.schema.orderRamainingQuantity = ;
          opts.body.orderActivityCollection[0].schema.schema.quantity = 0.0;
          opts.body.orderId = "0";
          opts.body.orderLegCollection = [new GitChrisQueen_TDA_JS.OrderGetOrderLegCollection()];
          opts.body.orderLegCollection[0].instruction = "BUY";
          opts.body.orderLegCollection[0].instrument = new GitChrisQueen_TDA_JS.OrderGetInstrument();
          opts.body.orderLegCollection[0].instrument.schema = new GitChrisQueen_TDA_JS.Instrument();
          opts.body.orderLegCollection[0].instrument.schema.schema = ;
          opts.body.orderLegCollection[0].legId = "0";
          opts.body.orderLegCollection[0].orderLegType = "EQUITY";
          opts.body.orderLegCollection[0].positionEffect = "OPENING";
          opts.body.orderLegCollection[0].quantity = 0.0;
          opts.body.orderLegCollection[0].quantityType = "ALL_SHARES";
          opts.body.orderStrategyType = "SINGLE";
          opts.body.orderType = new GitChrisQueen_TDA_JS.OrderGetOrderType();
          opts.body.orderType.schema = new GitChrisQueen_TDA_JS.OrderType();
          opts.body.price = 0.0;
          opts.body.priceLinkBasis = "MANUAL";
          opts.body.priceLinkType = "VALUE";
          opts.body.quality = 0.0;
          opts.body.releaseTime = new Date();
          opts.body.remainingQuantity = 0.0;
          opts.body.replacingOrderCollection = [];
          opts.body.requestedDestination = "INET";
          opts.body.session = new GitChrisQueen_TDA_JS.OrderGetSession();
          opts.body.session.schema = new GitChrisQueen_TDA_JS.Session();
          opts.body.specialInstruction = "ALL_OR_NONE";
          opts.body.status = "AWAITING_PARENT_ORDER";
          opts.body.statusDescription = "";
          opts.body.stopPrice = 0.0;
          opts.body.stopPriceLinkBasis = "MANUAL";
          opts.body.stopPriceLinkType = "VALUE";
          opts.body.stopPriceOffset = 0.0;
          opts.body.stopType = "STANDARD";
          opts.body.tag = "";
          opts.body.taxLotMethod = "FIFO";

          instance.accountsAccountIdSavedordersPOST(accountId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(GitChrisQueen_TDA_JS.OrderGet);
            expect(data.accountId).to.be.a('number');
            expect(data.accountId).to.be("0");
            expect(data.activationPrice).to.be.a('number');
            expect(data.activationPrice).to.be(0.0);
            expect(data.cancelTime).to.be.a(GitChrisQueen_TDA_JS.OrderGetCancelTime);
                  expect(data.cancelTime._date).to.be.a('string');
              expect(data.cancelTime._date).to.be("");
              expect(data.cancelTime.shortFormat).to.be.a('boolean');
              expect(data.cancelTime.shortFormat).to.be(false);
            expect(data.cancelable).to.be.a('boolean');
            expect(data.cancelable).to.be(false);
            {
              let dataCtr = data.childOrderStrategies;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.closedTime).to.be.a(Date);
            expect(data.closedTime).to.be(new Date());
            expect(data.complexOrderStrategyType).to.be.a('string');
            expect(data.complexOrderStrategyType).to.be("NONE");
            expect(data.destinationLinkName).to.be.a('string');
            expect(data.destinationLinkName).to.be("");
            expect(data.duration).to.be.a(GitChrisQueen_TDA_JS.OrderGetDuration);
                  expect(data.duration.schema).to.be.a(GitChrisQueen_TDA_JS.Duration);
      
            expect(data.editable).to.be.a('boolean');
            expect(data.editable).to.be(false);
            expect(data.enteredTime).to.be.a(Date);
            expect(data.enteredTime).to.be(new Date());
            expect(data.filledQuantity).to.be.a('number');
            expect(data.filledQuantity).to.be(0.0);
            {
              let dataCtr = data.orderActivityCollection;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(GitChrisQueen_TDA_JS.OrderGetOrderActivityCollection);
                expect(data.schema).to.be.a(GitChrisQueen_TDA_JS.OrderActivity);
                      expect(data.schema.schema).to.be.a(GitChrisQueen_TDA_JS.Execution);
                        expect(data.schema.schema.activityType).to.be.a('string');
                    expect(data.schema.schema.activityType).to.be("EXECUTION");
                    {
                      let dataCtr = data.schema.schema.executionLegs;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(GitChrisQueen_TDA_JS.ExecutionExecutionLegs);
                        expect(data.legId).to.be.a('number');
                        expect(data.legId).to.be(0);
                        expect(data.mismarkedQuantity).to.be.a('number');
                        expect(data.mismarkedQuantity).to.be(0.0);
                        expect(data.price).to.be.a('number');
                        expect(data.price).to.be(0.0);
                        expect(data.quantity).to.be.a('number');
                        expect(data.quantity).to.be(0.0);
                        expect(data.time).to.be.a(Date);
                        expect(data.time).to.be(new Date());
        
                              }
                    }
                    expect(data.schema.schema.executionType).to.be.a('string');
                    expect(data.schema.schema.executionType).to.be("FILL");
                    expect(data.schema.schema.orderRamainingQuantity).to.be.a('number');
                    expect(data.schema.schema.orderRamainingQuantity).to.be();
                    expect(data.schema.schema.quantity).to.be.a('number');
                    expect(data.schema.schema.quantity).to.be(0.0);

                      }
            }
            expect(data.orderId).to.be.a('number');
            expect(data.orderId).to.be("0");
            {
              let dataCtr = data.orderLegCollection;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(GitChrisQueen_TDA_JS.OrderGetOrderLegCollection);
                expect(data.instruction).to.be.a('string');
                expect(data.instruction).to.be("BUY");
                expect(data.instrument).to.be.a(GitChrisQueen_TDA_JS.OrderGetInstrument);
                      expect(data.instrument.schema).to.be.a(GitChrisQueen_TDA_JS.Instrument);
                        expect(data.instrument.schema.schema).to.be.a(Object);
                    expect(data.instrument.schema.schema).to.be();
                expect(data.legId).to.be.a('number');
                expect(data.legId).to.be("0");
                expect(data.orderLegType).to.be.a('string');
                expect(data.orderLegType).to.be("EQUITY");
                expect(data.positionEffect).to.be.a('string');
                expect(data.positionEffect).to.be("OPENING");
                expect(data.quantity).to.be.a('number');
                expect(data.quantity).to.be(0.0);
                expect(data.quantityType).to.be.a('string');
                expect(data.quantityType).to.be("ALL_SHARES");

                      }
            }
            expect(data.orderStrategyType).to.be.a('string');
            expect(data.orderStrategyType).to.be("SINGLE");
            expect(data.orderType).to.be.a(GitChrisQueen_TDA_JS.OrderGetOrderType);
                  expect(data.orderType.schema).to.be.a(GitChrisQueen_TDA_JS.OrderType);
      
            expect(data.price).to.be.a('number');
            expect(data.price).to.be(0.0);
            expect(data.priceLinkBasis).to.be.a('string');
            expect(data.priceLinkBasis).to.be("MANUAL");
            expect(data.priceLinkType).to.be.a('string');
            expect(data.priceLinkType).to.be("VALUE");
            expect(data.quality).to.be.a('number');
            expect(data.quality).to.be(0.0);
            expect(data.releaseTime).to.be.a(Date);
            expect(data.releaseTime).to.be(new Date());
            expect(data.remainingQuantity).to.be.a('number');
            expect(data.remainingQuantity).to.be(0.0);
            {
              let dataCtr = data.replacingOrderCollection;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.requestedDestination).to.be.a('string');
            expect(data.requestedDestination).to.be("INET");
            expect(data.session).to.be.a(GitChrisQueen_TDA_JS.OrderGetSession);
                  expect(data.session.schema).to.be.a(GitChrisQueen_TDA_JS.Session);
      
            expect(data.specialInstruction).to.be.a('string');
            expect(data.specialInstruction).to.be("ALL_OR_NONE");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("AWAITING_PARENT_ORDER");
            expect(data.statusDescription).to.be.a('string');
            expect(data.statusDescription).to.be("");
            expect(data.stopPrice).to.be.a('number');
            expect(data.stopPrice).to.be(0.0);
            expect(data.stopPriceLinkBasis).to.be.a('string');
            expect(data.stopPriceLinkBasis).to.be("MANUAL");
            expect(data.stopPriceLinkType).to.be.a('string');
            expect(data.stopPriceLinkType).to.be("VALUE");
            expect(data.stopPriceOffset).to.be.a('number');
            expect(data.stopPriceOffset).to.be(0.0);
            expect(data.stopType).to.be.a('string');
            expect(data.stopType).to.be("STANDARD");
            expect(data.tag).to.be.a('string');
            expect(data.tag).to.be("");
            expect(data.taxLotMethod).to.be.a('string');
            expect(data.taxLotMethod).to.be("FIFO");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountsAccountIdSavedordersSavedOrderIdDELETE', function() {
        it('should call accountsAccountIdSavedordersSavedOrderIdDELETE successfully', function(done) {
          // TODO: uncomment, update parameter values for accountsAccountIdSavedordersSavedOrderIdDELETE call and complete the assertions
          /*
          var accountId = 56;
          var savedOrderId = 56;

          instance.accountsAccountIdSavedordersSavedOrderIdDELETE(accountId, savedOrderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(GitChrisQueen_TDA_JS.EASObject);
            expect(data.access_token).to.be.a('string');
            expect(data.access_token).to.be("");
            expect(data.expires_in).to.be.a('number');
            expect(data.expires_in).to.be(0);
            expect(data.refresh_token).to.be.a('string');
            expect(data.refresh_token).to.be("");
            expect(data.refresh_token_expires_in).to.be.a('number');
            expect(data.refresh_token_expires_in).to.be(0);
            expect(data.scope).to.be.a('string');
            expect(data.scope).to.be("");
            expect(data.token_type).to.be.a('string');
            expect(data.token_type).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountsAccountIdSavedordersSavedOrderIdGET', function() {
        it('should call accountsAccountIdSavedordersSavedOrderIdGET successfully', function(done) {
          // TODO: uncomment, update parameter values for accountsAccountIdSavedordersSavedOrderIdGET call and complete the assertions
          /*
          var accountId = 56;
          var savedOrderId = 56;

          instance.accountsAccountIdSavedordersSavedOrderIdGET(accountId, savedOrderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(GitChrisQueen_TDA_JS.OrderGet);
            expect(data.accountId).to.be.a('number');
            expect(data.accountId).to.be("0");
            expect(data.activationPrice).to.be.a('number');
            expect(data.activationPrice).to.be(0.0);
            expect(data.cancelTime).to.be.a(GitChrisQueen_TDA_JS.OrderGetCancelTime);
                  expect(data.cancelTime._date).to.be.a('string');
              expect(data.cancelTime._date).to.be("");
              expect(data.cancelTime.shortFormat).to.be.a('boolean');
              expect(data.cancelTime.shortFormat).to.be(false);
            expect(data.cancelable).to.be.a('boolean');
            expect(data.cancelable).to.be(false);
            {
              let dataCtr = data.childOrderStrategies;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.closedTime).to.be.a(Date);
            expect(data.closedTime).to.be(new Date());
            expect(data.complexOrderStrategyType).to.be.a('string');
            expect(data.complexOrderStrategyType).to.be("NONE");
            expect(data.destinationLinkName).to.be.a('string');
            expect(data.destinationLinkName).to.be("");
            expect(data.duration).to.be.a(GitChrisQueen_TDA_JS.OrderGetDuration);
                  expect(data.duration.schema).to.be.a(GitChrisQueen_TDA_JS.Duration);
      
            expect(data.editable).to.be.a('boolean');
            expect(data.editable).to.be(false);
            expect(data.enteredTime).to.be.a(Date);
            expect(data.enteredTime).to.be(new Date());
            expect(data.filledQuantity).to.be.a('number');
            expect(data.filledQuantity).to.be(0.0);
            {
              let dataCtr = data.orderActivityCollection;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(GitChrisQueen_TDA_JS.OrderGetOrderActivityCollection);
                expect(data.schema).to.be.a(GitChrisQueen_TDA_JS.OrderActivity);
                      expect(data.schema.schema).to.be.a(GitChrisQueen_TDA_JS.Execution);
                        expect(data.schema.schema.activityType).to.be.a('string');
                    expect(data.schema.schema.activityType).to.be("EXECUTION");
                    {
                      let dataCtr = data.schema.schema.executionLegs;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(GitChrisQueen_TDA_JS.ExecutionExecutionLegs);
                        expect(data.legId).to.be.a('number');
                        expect(data.legId).to.be(0);
                        expect(data.mismarkedQuantity).to.be.a('number');
                        expect(data.mismarkedQuantity).to.be(0.0);
                        expect(data.price).to.be.a('number');
                        expect(data.price).to.be(0.0);
                        expect(data.quantity).to.be.a('number');
                        expect(data.quantity).to.be(0.0);
                        expect(data.time).to.be.a(Date);
                        expect(data.time).to.be(new Date());
        
                              }
                    }
                    expect(data.schema.schema.executionType).to.be.a('string');
                    expect(data.schema.schema.executionType).to.be("FILL");
                    expect(data.schema.schema.orderRamainingQuantity).to.be.a('number');
                    expect(data.schema.schema.orderRamainingQuantity).to.be();
                    expect(data.schema.schema.quantity).to.be.a('number');
                    expect(data.schema.schema.quantity).to.be(0.0);

                      }
            }
            expect(data.orderId).to.be.a('number');
            expect(data.orderId).to.be("0");
            {
              let dataCtr = data.orderLegCollection;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(GitChrisQueen_TDA_JS.OrderGetOrderLegCollection);
                expect(data.instruction).to.be.a('string');
                expect(data.instruction).to.be("BUY");
                expect(data.instrument).to.be.a(GitChrisQueen_TDA_JS.OrderGetInstrument);
                      expect(data.instrument.schema).to.be.a(GitChrisQueen_TDA_JS.Instrument);
                        expect(data.instrument.schema.schema).to.be.a(Object);
                    expect(data.instrument.schema.schema).to.be();
                expect(data.legId).to.be.a('number');
                expect(data.legId).to.be("0");
                expect(data.orderLegType).to.be.a('string');
                expect(data.orderLegType).to.be("EQUITY");
                expect(data.positionEffect).to.be.a('string');
                expect(data.positionEffect).to.be("OPENING");
                expect(data.quantity).to.be.a('number');
                expect(data.quantity).to.be(0.0);
                expect(data.quantityType).to.be.a('string');
                expect(data.quantityType).to.be("ALL_SHARES");

                      }
            }
            expect(data.orderStrategyType).to.be.a('string');
            expect(data.orderStrategyType).to.be("SINGLE");
            expect(data.orderType).to.be.a(GitChrisQueen_TDA_JS.OrderGetOrderType);
                  expect(data.orderType.schema).to.be.a(GitChrisQueen_TDA_JS.OrderType);
      
            expect(data.price).to.be.a('number');
            expect(data.price).to.be(0.0);
            expect(data.priceLinkBasis).to.be.a('string');
            expect(data.priceLinkBasis).to.be("MANUAL");
            expect(data.priceLinkType).to.be.a('string');
            expect(data.priceLinkType).to.be("VALUE");
            expect(data.quality).to.be.a('number');
            expect(data.quality).to.be(0.0);
            expect(data.releaseTime).to.be.a(Date);
            expect(data.releaseTime).to.be(new Date());
            expect(data.remainingQuantity).to.be.a('number');
            expect(data.remainingQuantity).to.be(0.0);
            {
              let dataCtr = data.replacingOrderCollection;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.requestedDestination).to.be.a('string');
            expect(data.requestedDestination).to.be("INET");
            expect(data.session).to.be.a(GitChrisQueen_TDA_JS.OrderGetSession);
                  expect(data.session.schema).to.be.a(GitChrisQueen_TDA_JS.Session);
      
            expect(data.specialInstruction).to.be.a('string');
            expect(data.specialInstruction).to.be("ALL_OR_NONE");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("AWAITING_PARENT_ORDER");
            expect(data.statusDescription).to.be.a('string');
            expect(data.statusDescription).to.be("");
            expect(data.stopPrice).to.be.a('number');
            expect(data.stopPrice).to.be(0.0);
            expect(data.stopPriceLinkBasis).to.be.a('string');
            expect(data.stopPriceLinkBasis).to.be("MANUAL");
            expect(data.stopPriceLinkType).to.be.a('string');
            expect(data.stopPriceLinkType).to.be("VALUE");
            expect(data.stopPriceOffset).to.be.a('number');
            expect(data.stopPriceOffset).to.be(0.0);
            expect(data.stopType).to.be.a('string');
            expect(data.stopType).to.be("STANDARD");
            expect(data.tag).to.be.a('string');
            expect(data.tag).to.be("");
            expect(data.taxLotMethod).to.be.a('string');
            expect(data.taxLotMethod).to.be("FIFO");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountsAccountIdSavedordersSavedOrderIdPUT', function() {
        it('should call accountsAccountIdSavedordersSavedOrderIdPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for accountsAccountIdSavedordersSavedOrderIdPUT call
          /*
          var accountId = 56;
          var savedOrderId = 56;
          var opts = {};
          opts.body = new GitChrisQueen_TDA_JS.OrderGet();
          opts.body.accountId = "0";
          opts.body.activationPrice = 0.0;
          opts.body.cancelTime = new GitChrisQueen_TDA_JS.OrderGetCancelTime();
          opts.body.cancelTime._date = "";
          opts.body.cancelTime.shortFormat = false;
          opts.body.cancelable = false;
          opts.body.childOrderStrategies = [];
          opts.body.closedTime = new Date();
          opts.body.complexOrderStrategyType = "NONE";
          opts.body.destinationLinkName = "";
          opts.body.duration = new GitChrisQueen_TDA_JS.OrderGetDuration();
          opts.body.duration.schema = new GitChrisQueen_TDA_JS.Duration();
          opts.body.editable = false;
          opts.body.enteredTime = new Date();
          opts.body.filledQuantity = 0.0;
          opts.body.orderActivityCollection = [new GitChrisQueen_TDA_JS.OrderGetOrderActivityCollection()];
          opts.body.orderActivityCollection[0].schema = new GitChrisQueen_TDA_JS.OrderActivity();
          opts.body.orderActivityCollection[0].schema.schema = new GitChrisQueen_TDA_JS.Execution();
          opts.body.orderActivityCollection[0].schema.schema.activityType = "EXECUTION";
          opts.body.orderActivityCollection[0].schema.schema.executionLegs = [new GitChrisQueen_TDA_JS.ExecutionExecutionLegs()];
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].legId = 0;
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].mismarkedQuantity = 0.0;
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].price = 0.0;
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].quantity = 0.0;
          opts.body.orderActivityCollection[0].schema.schema.executionLegs[0].time = new Date();
          opts.body.orderActivityCollection[0].schema.schema.executionType = "FILL";
          opts.body.orderActivityCollection[0].schema.schema.orderRamainingQuantity = ;
          opts.body.orderActivityCollection[0].schema.schema.quantity = 0.0;
          opts.body.orderId = "0";
          opts.body.orderLegCollection = [new GitChrisQueen_TDA_JS.OrderGetOrderLegCollection()];
          opts.body.orderLegCollection[0].instruction = "BUY";
          opts.body.orderLegCollection[0].instrument = new GitChrisQueen_TDA_JS.OrderGetInstrument();
          opts.body.orderLegCollection[0].instrument.schema = new GitChrisQueen_TDA_JS.Instrument();
          opts.body.orderLegCollection[0].instrument.schema.schema = ;
          opts.body.orderLegCollection[0].legId = "0";
          opts.body.orderLegCollection[0].orderLegType = "EQUITY";
          opts.body.orderLegCollection[0].positionEffect = "OPENING";
          opts.body.orderLegCollection[0].quantity = 0.0;
          opts.body.orderLegCollection[0].quantityType = "ALL_SHARES";
          opts.body.orderStrategyType = "SINGLE";
          opts.body.orderType = new GitChrisQueen_TDA_JS.OrderGetOrderType();
          opts.body.orderType.schema = new GitChrisQueen_TDA_JS.OrderType();
          opts.body.price = 0.0;
          opts.body.priceLinkBasis = "MANUAL";
          opts.body.priceLinkType = "VALUE";
          opts.body.quality = 0.0;
          opts.body.releaseTime = new Date();
          opts.body.remainingQuantity = 0.0;
          opts.body.replacingOrderCollection = [];
          opts.body.requestedDestination = "INET";
          opts.body.session = new GitChrisQueen_TDA_JS.OrderGetSession();
          opts.body.session.schema = new GitChrisQueen_TDA_JS.Session();
          opts.body.specialInstruction = "ALL_OR_NONE";
          opts.body.status = "AWAITING_PARENT_ORDER";
          opts.body.statusDescription = "";
          opts.body.stopPrice = 0.0;
          opts.body.stopPriceLinkBasis = "MANUAL";
          opts.body.stopPriceLinkType = "VALUE";
          opts.body.stopPriceOffset = 0.0;
          opts.body.stopType = "STANDARD";
          opts.body.tag = "";
          opts.body.taxLotMethod = "FIFO";

          instance.accountsAccountIdSavedordersSavedOrderIdPUT(accountId, savedOrderId, opts).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
