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
    define(['ApiClient', 'model/ErrorObject', 'model/OptionChain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorObject'), require('../model/OptionChain'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.OptionChainsApi = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.ErrorObject, root.GitChrisQueen_TDA_JS.OptionChain);
  }
}(this, function(ApiClient, ErrorObject, OptionChain) {
  'use strict';

  /**
   * OptionChains service.
   * @module api/OptionChainsApi
   * @version 0.1.4
   */

  /**
   * Constructs a new OptionChainsApi. 
   * @alias module:api/OptionChainsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Option Chain
     * Get option chain for an optionable Symbol
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey Pass your OAuth User ID to make an unauthenticated request for delayed data.
     * @param {String} opts.symbol Enter one symbol
     * @param {module:model/String} opts.contractType Type of contracts to return in the chain. Can be CALL, PUT, or ALL. Default is ALL. (default to ALL)
     * @param {Number} opts.strikeCount The number of strikes to return above and below the at-the-money price.
     * @param {Boolean} opts.includeQuotes Include quotes for options in the option chain. Can be TRUE or FALSE. Default is FALSE. (default to false)
     * @param {module:model/String} opts.strategy Passing a value returns a Strategy Chain. Possible values are SINGLE, ANALYTICAL (allows use of the volatility, underlyingPrice, interestRate, and daysToExpiration params to calculate theoretical values), COVERED, VERTICAL, CALENDAR, STRANGLE, STRADDLE, BUTTERFLY, CONDOR, DIAGONAL, COLLAR, or ROLL. Default is SINGLE.
     * @param {Number} opts.interval Strike interval for spread strategy chains (see strategy param).
     * @param {Number} opts.strike Provide a strike price to return options only at that strike price.
     * @param {module:model/String} opts.range Returns options for the given range. Possible values are: ITM: In-the-money NTM: Near-the-money OTM: Out-of-the-money SAK: Strikes Above Market SBK: Strikes Below Market SNK: Strikes Near Market ALL: All Strikes Default is ALL.
     * @param {Date} opts.fromDate Only return expirations after this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz.
     * @param {Date} opts.toDate Only return expirations before this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz.
     * @param {Number} opts.volatility Volatility to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param).
     * @param {Number} opts.underlyingPrice Underlying price to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param).
     * @param {Number} opts.interestRate Interest rate to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param).
     * @param {Number} opts.daysToExpiration Days to expiration to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param)
     * @param {String} opts.expMonth Return only options expiring in the specified month. Month is given in the three character format. Example: JAN Default is ALL. (default to ALL)
     * @param {String} opts.optionType Type of contracts to return. Possible values are: S: Standard contract NS: Non-standard contract ALL: All contracts Default is ALL. (default to ALL)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OptionChain} and HTTP response
     */
    this.marketdataChainsGETWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'apikey': opts['apikey'],
        'symbol': opts['symbol'],
        'contractType': opts['contractType'],
        'strikeCount': opts['strikeCount'],
        'includeQuotes': opts['includeQuotes'],
        'strategy': opts['strategy'],
        'interval': opts['interval'],
        'strike': opts['strike'],
        'range': opts['range'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
        'volatility': opts['volatility'],
        'underlyingPrice': opts['underlyingPrice'],
        'interestRate': opts['interestRate'],
        'daysToExpiration': opts['daysToExpiration'],
        'expMonth': opts['expMonth'],
        'optionType': opts['optionType'],
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
      var returnType = OptionChain;

      return this.apiClient.callApi(
        '/marketdata/chains', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Option Chain
     * Get option chain for an optionable Symbol
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey Pass your OAuth User ID to make an unauthenticated request for delayed data.
     * @param {String} opts.symbol Enter one symbol
     * @param {module:model/String} opts.contractType Type of contracts to return in the chain. Can be CALL, PUT, or ALL. Default is ALL. (default to ALL)
     * @param {Number} opts.strikeCount The number of strikes to return above and below the at-the-money price.
     * @param {Boolean} opts.includeQuotes Include quotes for options in the option chain. Can be TRUE or FALSE. Default is FALSE. (default to false)
     * @param {module:model/String} opts.strategy Passing a value returns a Strategy Chain. Possible values are SINGLE, ANALYTICAL (allows use of the volatility, underlyingPrice, interestRate, and daysToExpiration params to calculate theoretical values), COVERED, VERTICAL, CALENDAR, STRANGLE, STRADDLE, BUTTERFLY, CONDOR, DIAGONAL, COLLAR, or ROLL. Default is SINGLE.
     * @param {Number} opts.interval Strike interval for spread strategy chains (see strategy param).
     * @param {Number} opts.strike Provide a strike price to return options only at that strike price.
     * @param {module:model/String} opts.range Returns options for the given range. Possible values are: ITM: In-the-money NTM: Near-the-money OTM: Out-of-the-money SAK: Strikes Above Market SBK: Strikes Below Market SNK: Strikes Near Market ALL: All Strikes Default is ALL.
     * @param {Date} opts.fromDate Only return expirations after this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz.
     * @param {Date} opts.toDate Only return expirations before this date. For strategies, expiration refers to the nearest term expiration in the strategy. Valid ISO-8601 formats are: yyyy-MM-dd and yyyy-MM-ddTHH:mm:ssz.
     * @param {Number} opts.volatility Volatility to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param).
     * @param {Number} opts.underlyingPrice Underlying price to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param).
     * @param {Number} opts.interestRate Interest rate to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param).
     * @param {Number} opts.daysToExpiration Days to expiration to use in calculations. Applies only to ANALYTICAL strategy chains (see strategy param)
     * @param {String} opts.expMonth Return only options expiring in the specified month. Month is given in the three character format. Example: JAN Default is ALL. (default to ALL)
     * @param {String} opts.optionType Type of contracts to return. Possible values are: S: Standard contract NS: Non-standard contract ALL: All contracts Default is ALL. (default to ALL)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OptionChain}
     */
    this.marketdataChainsGET = function(opts) {
      return this.marketdataChainsGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));