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
    define(['ApiClient', 'model/EASObject', 'model/Hours'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EASObject'), require('../model/Hours'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.MarketHoursApi = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.EASObject, root.GitChrisQueen_TDA_JS.Hours);
  }
}(this, function(ApiClient, EASObject, Hours) {
  'use strict';

  /**
   * MarketHours service.
   * @module api/MarketHoursApi
   * @version 0.1.4
   */

  /**
   * Constructs a new MarketHoursApi. 
   * @alias module:api/MarketHoursApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Hours for Multiple Markets
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @param {module:model/String} opts.markets 
     * @param {Date} opts._date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Hours} and HTTP response
     */
    this.marketdataHoursGETWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'apiKey': opts['apiKey'],
        'markets': opts['markets'],
        'date': opts['_date'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Hours;

      return this.apiClient.callApi(
        '/marketdata/hours', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Hours for Multiple Markets
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @param {module:model/String} opts.markets 
     * @param {Date} opts._date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Hours}
     */
    this.marketdataHoursGET = function(opts) {
      return this.marketdataHoursGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Hours for Multiple Markets
     * @param {String} market 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @param {Date} opts._date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Hours} and HTTP response
     */
    this.marketdataMarketHoursGETWithHttpInfo = function(market, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'market' is set
      if (market === undefined || market === null) {
        throw new Error("Missing the required parameter 'market' when calling marketdataMarketHoursGET");
      }


      var pathParams = {
        'market': market
      };
      var queryParams = {
        'apiKey': opts['apiKey'],
        'date': opts['_date'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Hours;

      return this.apiClient.callApi(
        '/marketdata/{market}/hours', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Hours for Multiple Markets
     * @param {String} market 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @param {Date} opts._date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Hours}
     */
    this.marketdataMarketHoursGET = function(market, opts) {
      return this.marketdataMarketHoursGETWithHttpInfo(market, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
