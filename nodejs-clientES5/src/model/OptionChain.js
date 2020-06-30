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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OptionChainStrategy', 'model/OptionChainUnderlying'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionChainStrategy'), require('./OptionChainUnderlying'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.OptionChain = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.OptionChainStrategy, root.GitChrisQueen_TDA_JS.OptionChainUnderlying);
  }
}(this, function(ApiClient, OptionChainStrategy, OptionChainUnderlying) {
  'use strict';

  /**
   * The OptionChain model module.
   * @module model/OptionChain
   * @version 0.1.4
   */

  /**
   * Constructs a new <code>OptionChain</code>.
   * @alias module:model/OptionChain
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OptionChain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionChain} obj Optional instance to populate.
   * @return {module:model/OptionChain} The populated <code>OptionChain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('callExpDateMap'))
        obj.callExpDateMap = ApiClient.convertToType(data['callExpDateMap'], {'String': Object});
      if (data.hasOwnProperty('daysToExpiration'))
        obj.daysToExpiration = ApiClient.convertToType(data['daysToExpiration'], 'Number');
      if (data.hasOwnProperty('interestRate'))
        obj.interestRate = ApiClient.convertToType(data['interestRate'], 'Number');
      if (data.hasOwnProperty('interval'))
        obj.interval = ApiClient.convertToType(data['interval'], 'Number');
      if (data.hasOwnProperty('isDelayed'))
        obj.isDelayed = ApiClient.convertToType(data['isDelayed'], 'Boolean');
      if (data.hasOwnProperty('isIndex'))
        obj.isIndex = ApiClient.convertToType(data['isIndex'], 'Boolean');
      if (data.hasOwnProperty('putExpDateMap'))
        obj.putExpDateMap = ApiClient.convertToType(data['putExpDateMap'], {'String': Object});
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('strategy'))
        obj.strategy = OptionChainStrategy.constructFromObject(data['strategy']);
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('underlying'))
        obj.underlying = OptionChainUnderlying.constructFromObject(data['underlying']);
      if (data.hasOwnProperty('underlyingPrice'))
        obj.underlyingPrice = ApiClient.convertToType(data['underlyingPrice'], 'Number');
      if (data.hasOwnProperty('volatility'))
        obj.volatility = ApiClient.convertToType(data['volatility'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Object.<String, Object>} callExpDateMap
   */
  exports.prototype.callExpDateMap = undefined;

  /**
   * @member {Number} daysToExpiration
   */
  exports.prototype.daysToExpiration = undefined;

  /**
   * @member {Number} interestRate
   */
  exports.prototype.interestRate = undefined;

  /**
   * @member {Number} interval
   */
  exports.prototype.interval = undefined;

  /**
   * @member {Boolean} isDelayed
   */
  exports.prototype.isDelayed = undefined;

  /**
   * @member {Boolean} isIndex
   */
  exports.prototype.isIndex = undefined;

  /**
   * @member {Object.<String, Object>} putExpDateMap
   */
  exports.prototype.putExpDateMap = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {module:model/OptionChainStrategy} strategy
   */
  exports.prototype.strategy = undefined;

  /**
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;

  /**
   * @member {module:model/OptionChainUnderlying} underlying
   */
  exports.prototype.underlying = undefined;

  /**
   * @member {Number} underlyingPrice
   */
  exports.prototype.underlyingPrice = undefined;

  /**
   * @member {Number} volatility
   */
  exports.prototype.volatility = undefined;

  return exports;

}));