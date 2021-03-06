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
    define(['ApiClient', 'model/AccountSecuritiesAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountSecuritiesAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.Account = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.AccountSecuritiesAccount);
  }
}(this, function(ApiClient, AccountSecuritiesAccount) {
  'use strict';

  /**
   * The Account model module.
   * @module model/Account
   * @version 0.1.4
   */

  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('securitiesAccount'))
        obj.securitiesAccount = AccountSecuritiesAccount.constructFromObject(data['securitiesAccount']);
    }
    return obj;
  }

  /**
   * @member {module:model/AccountSecuritiesAccount} securitiesAccount
   */
  exports.prototype.securitiesAccount = undefined;

  return exports;

}));
