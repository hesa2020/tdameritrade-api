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

import ApiClient from '../ApiClient';
/**
* Enum class PutCall.
* @enum {}
* @readonly
*/
export default class PutCall {
        /**
         * value: "PUT"
         * @const
         */
        PUT = "PUT";

        /**
         * value: "CALL"
         * @const
         */
        CALL = "CALL";


    /**
    * Returns a <code>PutCall</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PutCall} The enum <code>PutCall</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
