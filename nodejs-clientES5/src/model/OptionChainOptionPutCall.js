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
    define(['ApiClient', 'model/PutCall'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PutCall'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.OptionChainOptionPutCall = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.PutCall);
  }
}(this, function(ApiClient, PutCall) {
  'use strict';

  /**
   * The OptionChainOptionPutCall model module.
   * @module model/OptionChainOptionPutCall
   * @version 0.1.4
   */

  /**
   * Constructs a new <code>OptionChainOptionPutCall</code>.
   * @alias module:model/OptionChainOptionPutCall
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OptionChainOptionPutCall</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionChainOptionPutCall} obj Optional instance to populate.
   * @return {module:model/OptionChainOptionPutCall} The populated <code>OptionChainOptionPutCall</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('schema'))
        obj.schema = PutCall.constructFromObject(data['schema']);
    }
    return obj;
  }

  /**
   * @member {module:model/PutCall} schema
   */
  exports.prototype.schema = undefined;

  return exports;

}));
