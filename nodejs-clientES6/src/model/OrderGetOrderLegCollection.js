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
import OrderGetInstrument from './OrderGetInstrument';

/**
* The OrderGetOrderLegCollection model module.
* @module model/OrderGetOrderLegCollection
* @version 0.1.4
*/
export default class OrderGetOrderLegCollection {
    /**
    * Constructs a new <code>OrderGetOrderLegCollection</code>.
    * @alias module:model/OrderGetOrderLegCollection
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OrderGetOrderLegCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderGetOrderLegCollection} obj Optional instance to populate.
    * @return {module:model/OrderGetOrderLegCollection} The populated <code>OrderGetOrderLegCollection</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderGetOrderLegCollection();
                        
            
            if (data.hasOwnProperty('orderLegType')) {
                obj['orderLegType'] = ApiClient.convertToType(data['orderLegType'], 'String');
            }
            if (data.hasOwnProperty('legId')) {
                obj['legId'] = ApiClient.convertToType(data['legId'], 'Number');
            }
            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = OrderGetInstrument.constructFromObject(data['instrument']);
            }
            if (data.hasOwnProperty('instruction')) {
                obj['instruction'] = ApiClient.convertToType(data['instruction'], 'String');
            }
            if (data.hasOwnProperty('positionEffect')) {
                obj['positionEffect'] = ApiClient.convertToType(data['positionEffect'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('quantityType')) {
                obj['quantityType'] = ApiClient.convertToType(data['quantityType'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/OrderGetOrderLegCollection.OrderLegTypeEnum} orderLegType
    */
    'orderLegType' = undefined;
    /**
    * @member {Number} legId
    */
    'legId' = undefined;
    /**
    * @member {module:model/OrderGetInstrument} instrument
    */
    'instrument' = undefined;
    /**
    * @member {module:model/OrderGetOrderLegCollection.InstructionEnum} instruction
    */
    'instruction' = undefined;
    /**
    * @member {module:model/OrderGetOrderLegCollection.PositionEffectEnum} positionEffect
    */
    'positionEffect' = undefined;
    /**
    * @member {Number} quantity
    */
    'quantity' = undefined;
    /**
    * @member {module:model/OrderGetOrderLegCollection.QuantityTypeEnum} quantityType
    */
    'quantityType' = undefined;



    /**
    * Allowed values for the <code>orderLegType</code> property.
    * @enum {String}
    * @readonly
    */
    static OrderLegTypeEnum = {
        /**
         * value: "EQUITY"
         * @const
         */
        "EQUITY": "EQUITY",
        /**
         * value: "OPTION"
         * @const
         */
        "OPTION": "OPTION",
        /**
         * value: "INDEX"
         * @const
         */
        "INDEX": "INDEX",
        /**
         * value: "MUTUAL_FUND"
         * @const
         */
        "MUTUAL_FUND": "MUTUAL_FUND",
        /**
         * value: "CASH_EQUIVALENT"
         * @const
         */
        "CASH_EQUIVALENT": "CASH_EQUIVALENT",
        /**
         * value: "FIXED_INCOME"
         * @const
         */
        "FIXED_INCOME": "FIXED_INCOME",
        /**
         * value: "CURRENCY"
         * @const
         */
        "CURRENCY": "CURRENCY"    };
    /**
    * Allowed values for the <code>instruction</code> property.
    * @enum {String}
    * @readonly
    */
    static InstructionEnum = {
        /**
         * value: "BUY"
         * @const
         */
        "BUY": "BUY",
        /**
         * value: "SELL"
         * @const
         */
        "SELL": "SELL",
        /**
         * value: "BUY_TO_COVER"
         * @const
         */
        "BUY_TO_COVER": "BUY_TO_COVER",
        /**
         * value: "SELL_SHORT"
         * @const
         */
        "SELL_SHORT": "SELL_SHORT",
        /**
         * value: "BUY_TO_OPEN"
         * @const
         */
        "BUY_TO_OPEN": "BUY_TO_OPEN",
        /**
         * value: "BUY_TO_CLOSE"
         * @const
         */
        "BUY_TO_CLOSE": "BUY_TO_CLOSE",
        /**
         * value: "SELL_TO_OPEN"
         * @const
         */
        "SELL_TO_OPEN": "SELL_TO_OPEN",
        /**
         * value: "SELL_TO_CLOSE"
         * @const
         */
        "SELL_TO_CLOSE": "SELL_TO_CLOSE",
        /**
         * value: "EXCHANGE"
         * @const
         */
        "EXCHANGE": "EXCHANGE"    };
    /**
    * Allowed values for the <code>positionEffect</code> property.
    * @enum {String}
    * @readonly
    */
    static PositionEffectEnum = {
        /**
         * value: "OPENING"
         * @const
         */
        "OPENING": "OPENING",
        /**
         * value: "CLOSING"
         * @const
         */
        "CLOSING": "CLOSING",
        /**
         * value: "AUTOMATIC"
         * @const
         */
        "AUTOMATIC": "AUTOMATIC"    };
    /**
    * Allowed values for the <code>quantityType</code> property.
    * @enum {String}
    * @readonly
    */
    static QuantityTypeEnum = {
        /**
         * value: "ALL_SHARES"
         * @const
         */
        "ALL_SHARES": "ALL_SHARES",
        /**
         * value: "DOLLARS"
         * @const
         */
        "DOLLARS": "DOLLARS",
        /**
         * value: "SHARES"
         * @const
         */
        "SHARES": "SHARES"    };

}
