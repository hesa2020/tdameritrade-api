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
* Enum class FrequencyType.
* @enum {}
* @readonly
*/
export default class FrequencyType {
        /**
         * value: "minute"
         * @const
         */
        minute = "minute";

        /**
         * value: "daily"
         * @const
         */
        daily = "daily";

        /**
         * value: "weekly"
         * @const
         */
        weekly = "weekly";

        /**
         * value: "monthly"
         * @const
         */
        monthly = "monthly";


    /**
    * Returns a <code>FrequencyType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/FrequencyType} The enum <code>FrequencyType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
