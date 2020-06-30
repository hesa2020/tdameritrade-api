/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import CandleList from '../model/CandleList';
import EASObject from '../model/EASObject';
import FrequencyType from '../model/FrequencyType';
import PeriodType from '../model/PeriodType';

/**
* PriceHistory service.
* @module api/PriceHistoryApi
* @version 0.1.4
*/
export default class PriceHistoryApi {

    /**
    * Constructs a new PriceHistoryApi. 
    * @alias module:api/PriceHistoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get price history for a symbol
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CandleList} and HTTP response
     */
    marketdataSymbolPricehistoryGETWithHttpInfo(symbol, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
        'apikey': opts['apikey'],
        'periodType': opts['periodType'],
        'period': opts['period'],
        'frequencyType': opts['frequencyType'],
        'frequency': opts['frequency'],
        'endDate': opts['endDate'],
        'startDate': opts['startDate'],
        'needExtendedHoursData': opts['needExtendedHoursData']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CandleList;

      return this.apiClient.callApi(
        '/marketdata/{symbol}/pricehistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get price history for a symbol
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CandleList}
     */
    marketdataSymbolPricehistoryGET(symbol, opts) {
      return this.marketdataSymbolPricehistoryGETWithHttpInfo(symbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
