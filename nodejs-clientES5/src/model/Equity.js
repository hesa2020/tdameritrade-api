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
    define(['ApiClient', 'model/EquityAssetType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EquityAssetType'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.Equity = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.EquityAssetType);
  }
}(this, function(ApiClient, EquityAssetType) {
  'use strict';

  /**
   * The Equity model module.
   * @module model/Equity
   * @version 0.1.4
   */

  /**
   * Constructs a new <code>Equity</code>.
   * @alias module:model/Equity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Equity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Equity} obj Optional instance to populate.
   * @return {module:model/Equity} The populated <code>Equity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assetType'))
        obj.assetType = EquityAssetType.constructFromObject(data['assetType']);
      if (data.hasOwnProperty('cusip'))
        obj.cusip = ApiClient.convertToType(data['cusip'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/EquityAssetType} assetType
   */
  exports.prototype.assetType = undefined;

  /**
   * @member {String} cusip
   */
  exports.prototype.cusip = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;

  return exports;

}));
