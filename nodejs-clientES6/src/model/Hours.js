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
import HoursSessionHours from './HoursSessionHours';

/**
* The Hours model module.
* @module model/Hours
* @version 0.1.4
*/
export default class Hours {
    /**
    * Constructs a new <code>Hours</code>.
    * @alias module:model/Hours
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Hours</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Hours} obj Optional instance to populate.
    * @return {module:model/Hours} The populated <code>Hours</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Hours();
                        
            
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('isOpen')) {
                obj['isOpen'] = ApiClient.convertToType(data['isOpen'], 'Boolean');
            }
            if (data.hasOwnProperty('marketType')) {
                obj['marketType'] = ApiClient.convertToType(data['marketType'], 'String');
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('sessionHours')) {
                obj['sessionHours'] = HoursSessionHours.constructFromObject(data['sessionHours']);
            }
        }
        return obj;
    }

    /**
    * @member {String} category
    */
    'category' = undefined;
    /**
    * @member {String} date
    */
    'date' = undefined;
    /**
    * @member {String} exchange
    */
    'exchange' = undefined;
    /**
    * @member {Boolean} isOpen
    */
    'isOpen' = undefined;
    /**
    * @member {module:model/Hours.MarketTypeEnum} marketType
    */
    'marketType' = undefined;
    /**
    * @member {String} product
    */
    'product' = undefined;
    /**
    * @member {String} productName
    */
    'productName' = undefined;
    /**
    * @member {module:model/HoursSessionHours} sessionHours
    */
    'sessionHours' = undefined;



    /**
    * Allowed values for the <code>marketType</code> property.
    * @enum {String}
    * @readonly
    */
    static MarketTypeEnum = {
        /**
         * value: "BOND"
         * @const
         */
        "BOND": "BOND",
        /**
         * value: "EQUITY"
         * @const
         */
        "EQUITY": "EQUITY",
        /**
         * value: "ETF"
         * @const
         */
        "ETF": "ETF",
        /**
         * value: "FOREX"
         * @const
         */
        "FOREX": "FOREX",
        /**
         * value: "FUTURE"
         * @const
         */
        "FUTURE": "FUTURE",
        /**
         * value: "FUTURE_OPTION"
         * @const
         */
        "FUTURE_OPTION": "FUTURE_OPTION",
        /**
         * value: "INDEX"
         * @const
         */
        "INDEX": "INDEX",
        /**
         * value: "INDICATOR"
         * @const
         */
        "INDICATOR": "INDICATOR",
        /**
         * value: "MUTUAL_FUND"
         * @const
         */
        "MUTUAL_FUND": "MUTUAL_FUND",
        /**
         * value: "OPTION"
         * @const
         */
        "OPTION": "OPTION",
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN": "UNKNOWN"    };

}