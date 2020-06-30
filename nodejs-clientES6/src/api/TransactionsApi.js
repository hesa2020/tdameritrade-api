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
import ErrorObject from '../model/ErrorObject';
import Transaction from '../model/Transaction';

/**
* Transactions service.
* @module api/TransactionsApi
* @version 0.1.4
*/
export default class TransactionsApi {

    /**
    * Constructs a new TransactionsApi. 
    * @alias module:api/TransactionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Transactions
     * Transaction for a specific account.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Transaction} and HTTP response
     */
    accountsAccountIdTransactionsGETWithHttpInfo(accountId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
        'type': opts['type'],
        'symbol': opts['symbol'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/accounts/{accountId}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Transactions
     * Transaction for a specific account.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Transaction}
     */
    accountsAccountIdTransactionsGET(accountId, opts) {
      return this.accountsAccountIdTransactionsGETWithHttpInfo(accountId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Transaction
     * Transaction for a specific account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Transaction} and HTTP response
     */
    accountsAccountIdTransactionsTransactionIdGETWithHttpInfo(accountId, transactionId) {
      let postBody = null;

      let pathParams = {
        'accountId': accountId,
        'transactionId': transactionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/accounts/{accountId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Transaction
     * Transaction for a specific account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Transaction}
     */
    accountsAccountIdTransactionsTransactionIdGET(accountId, transactionId) {
      return this.accountsAccountIdTransactionsTransactionIdGETWithHttpInfo(accountId, transactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
