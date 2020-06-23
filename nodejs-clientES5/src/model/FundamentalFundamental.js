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
    define(['ApiClient', 'model/FundamentalData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FundamentalData'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.FundamentalFundamental = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.FundamentalData);
  }
}(this, function(ApiClient, FundamentalData) {
  'use strict';

  /**
   * The FundamentalFundamental model module.
   * @module model/FundamentalFundamental
   * @version 0.1.3
   */

  /**
   * Constructs a new <code>FundamentalFundamental</code>.
   * @alias module:model/FundamentalFundamental
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FundamentalFundamental</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FundamentalFundamental} obj Optional instance to populate.
   * @return {module:model/FundamentalFundamental} The populated <code>FundamentalFundamental</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('schema'))
        obj.Schema = FundamentalData.constructFromObject(data['schema']);
    }
    return obj;
  }

  /**
   * @member {module:model/FundamentalData} Schema
   */
  exports.prototype.Schema = undefined;

  return exports;

}));
