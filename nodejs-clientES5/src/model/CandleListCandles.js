/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.3
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.CandleListCandles = factory(root.GitChrisQueen_TDA_JS.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CandleListCandles model module.
   * @module model/CandleListCandles
   * @version 0.1.3
   */

  /**
   * Constructs a new <code>CandleListCandles</code>.
   * @alias module:model/CandleListCandles
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CandleListCandles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CandleListCandles} obj Optional instance to populate.
   * @return {module:model/CandleListCandles} The populated <code>CandleListCandles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('close'))
        obj.close = ApiClient.convertToType(data['close'], 'Number');
      if (data.hasOwnProperty('datetime'))
        obj.datetime = ApiClient.convertToType(data['datetime'], 'Number');
      if (data.hasOwnProperty('high'))
        obj.high = ApiClient.convertToType(data['high'], 'Number');
      if (data.hasOwnProperty('low'))
        obj.low = ApiClient.convertToType(data['low'], 'Number');
      if (data.hasOwnProperty('open'))
        obj.open = ApiClient.convertToType(data['open'], 'Number');
      if (data.hasOwnProperty('volume'))
        obj.volume = ApiClient.convertToType(data['volume'], 'Number');
    }
    return obj;
  }

  /**
   * Close
   * @member {Number} close
   */
  exports.prototype.close = undefined;

  /**
   * DateTime
   * @member {Number} datetime
   */
  exports.prototype.datetime = undefined;

  /**
   * High
   * @member {Number} high
   */
  exports.prototype.high = undefined;

  /**
   * Low
   * @member {Number} low
   */
  exports.prototype.low = undefined;

  /**
   * Open
   * @member {Number} open
   */
  exports.prototype.open = undefined;

  /**
   * Volume
   * @member {Number} volume
   */
  exports.prototype.volume = undefined;

  return exports;

}));