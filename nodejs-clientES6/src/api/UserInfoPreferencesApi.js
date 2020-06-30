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
import Preferences from '../model/Preferences';
import SubscriptionKey from '../model/SubscriptionKey';
import UserPrincipal from '../model/UserPrincipal';

/**
* UserInfoPreferences service.
* @module api/UserInfoPreferencesApi
* @version 0.1.4
*/
export default class UserInfoPreferencesApi {

    /**
    * Constructs a new UserInfoPreferencesApi. 
    * @alias module:api/UserInfoPreferencesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Preferences
     * Preferences for a specific account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Preferences} and HTTP response
     */
    accountsAccountIdPreferencesGETWithHttpInfo(accountId) {
      let postBody = null;

      let pathParams = {
        'accountId': accountId
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
      let returnType = Preferences;

      return this.apiClient.callApi(
        '/accounts/{accountId}/preferences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Preferences
     * Preferences for a specific account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Preferences}
     */
    accountsAccountIdPreferencesGET(accountId) {
      return this.accountsAccountIdPreferencesGETWithHttpInfo(accountId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Preferences
     * Update preferences for a specific account. Please note that the directOptionsRouting and directEquityRouting values cannot be modified via this operation.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    accountsAccountIdPreferencesPUTWithHttpInfo(accountId, opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/accounts/{accountId}/preferences', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update Preferences
     * Update preferences for a specific account. Please note that the directOptionsRouting and directEquityRouting values cannot be modified via this operation.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    accountsAccountIdPreferencesPUT(accountId, opts) {
      return this.accountsAccountIdPreferencesPUTWithHttpInfo(accountId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get User Principals
     * User Principal details.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserPrincipal} and HTTP response
     */
    userprincipalsGETWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserPrincipal;

      return this.apiClient.callApi(
        '/userprincipals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get User Principals
     * User Principal details.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserPrincipal}
     */
    userprincipalsGET(opts) {
      return this.userprincipalsGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Streamer Subscription Keys
     * SubscriptionKey for provided accounts or default accounts.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionKey} and HTTP response
     */
    userprincipalsStreamersubscriptionkeysGETWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'accountIds': opts['accountIds']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionKey;

      return this.apiClient.callApi(
        '/userprincipals/streamersubscriptionkeys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Streamer Subscription Keys
     * SubscriptionKey for provided accounts or default accounts.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionKey}
     */
    userprincipalsStreamersubscriptionkeysGET(opts) {
      return this.userprincipalsStreamersubscriptionkeysGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
