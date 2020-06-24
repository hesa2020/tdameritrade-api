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
    define(['ApiClient', 'model/EASObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EASObject'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.AuthenticationApi = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.EASObject);
  }
}(this, function(ApiClient, EASObject) {
  'use strict';

  /**
   * Authentication service.
   * @module api/AuthenticationApi
   * @version 0.1.3
   */

  /**
   * Constructs a new AuthenticationApi. 
   * @alias module:api/AuthenticationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Post Access Token
     * The token endpoint returns an access token along with an optional refresh token.
     * @param {String} grant_type The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token
     * @param {Number} client_id OAuth User ID of your application
     * @param {Object} opts Optional parameters
     * @param {String} opts.refresh_token Required if using refresh token grant
     * @param {String} opts.access_type Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request.
     * @param {String} opts.code Required if trying to use authorization code grant
     * @param {String} opts.redirect_uri Required if trying to use authorization code grant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EASObject} and HTTP response
     */
    this.oauth2TokenPOSTWithHttpInfo = function(grant_type, client_id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'grant_type' is set
      if (grant_type === undefined || grant_type === null) {
        throw new Error("Missing the required parameter 'grant_type' when calling oauth2TokenPOST");
      }

      // verify the required parameter 'client_id' is set
      if (client_id === undefined || client_id === null) {
        throw new Error("Missing the required parameter 'client_id' when calling oauth2TokenPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'grant_type': grant_type,
        'refresh_token': opts['refresh_token'],
        'access_type': opts['access_type'],
        'code': opts['code'],
        'client_id': client_id,
        'redirect_uri': opts['redirect_uri']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = EASObject;

      return this.apiClient.callApi(
        '/oauth2/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post Access Token
     * The token endpoint returns an access token along with an optional refresh token.
     * @param {String} grant_type The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token
     * @param {Number} client_id OAuth User ID of your application
     * @param {Object} opts Optional parameters
     * @param {String} opts.refresh_token Required if using refresh token grant
     * @param {String} opts.access_type Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request.
     * @param {String} opts.code Required if trying to use authorization code grant
     * @param {String} opts.redirect_uri Required if trying to use authorization code grant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EASObject}
     */
    this.oauth2TokenPOST = function(grant_type, client_id, opts) {
      return this.oauth2TokenPOSTWithHttpInfo(grant_type, client_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));