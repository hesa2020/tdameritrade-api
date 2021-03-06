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
* Enum class AssetType.
* @enum {}
* @readonly
*/
export default class AssetType {
        /**
         * value: "EQUITY"
         * @const
         */
        EQUITY = "EQUITY";

        /**
         * value: "OPTION"
         * @const
         */
        OPTION = "OPTION";

        /**
         * value: "INDEX"
         * @const
         */
        INDEX = "INDEX";

        /**
         * value: "MUTUAL_FUND"
         * @const
         */
        MUTUAL_FUND = "MUTUAL_FUND";

        /**
         * value: "CASH_EQUIVALENT"
         * @const
         */
        CASH_EQUIVALENT = "CASH_EQUIVALENT";

        /**
         * value: "FIXED_INCOME"
         * @const
         */
        FIXED_INCOME = "FIXED_INCOME";

        /**
         * value: "CURRENCY"
         * @const
         */
        CURRENCY = "CURRENCY";


    /**
    * Returns a <code>AssetType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AssetType} The enum <code>AssetType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
