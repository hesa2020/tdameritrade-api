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
import EquityAssetType from './EquityAssetType';
import OptionOptionDeliverables from './OptionOptionDeliverables';

/**
* The Option model module.
* @module model/Option
* @version 0.1.4
*/
export default class Option {
    /**
    * Constructs a new <code>Option</code>.
    * @alias module:model/Option
    * @class
    */

    constructor() {
        
        OneOfInstrumentSchema.call(this);
        
    }

    /**
    * Constructs a <code>Option</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Option} obj Optional instance to populate.
    * @return {module:model/Option} The populated <code>Option</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Option();
                        
            
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = EquityAssetType.constructFromObject(data['assetType']);
            }
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('putCall')) {
                obj['putCall'] = ApiClient.convertToType(data['putCall'], 'String');
            }
            if (data.hasOwnProperty('underlyingSymbol')) {
                obj['underlyingSymbol'] = ApiClient.convertToType(data['underlyingSymbol'], 'String');
            }
            if (data.hasOwnProperty('optionMultiplier')) {
                obj['optionMultiplier'] = ApiClient.convertToType(data['optionMultiplier'], 'Number');
            }
            if (data.hasOwnProperty('optionDeliverables')) {
                obj['optionDeliverables'] = ApiClient.convertToType(data['optionDeliverables'], [OptionOptionDeliverables]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/EquityAssetType} assetType
    */
    'assetType' = undefined;
    /**
    * @member {String} cusip
    */
    'cusip' = undefined;
    /**
    * @member {String} symbol
    */
    'symbol' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {module:model/Option.TypeEnum} type
    */
    'type' = undefined;
    /**
    * @member {module:model/Option.PutCallEnum} putCall
    */
    'putCall' = undefined;
    /**
    * @member {String} underlyingSymbol
    */
    'underlyingSymbol' = undefined;
    /**
    * @member {Number} optionMultiplier
    */
    'optionMultiplier' = undefined;
    /**
    * @member {Array.<module:model/OptionOptionDeliverables>} optionDeliverables
    */
    'optionDeliverables' = undefined;

    // Implement OneOfInstrumentSchema interface:
    

    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "VANILLA"
         * @const
         */
        "VANILLA": "VANILLA",
        /**
         * value: "BINARY"
         * @const
         */
        "BINARY": "BINARY",
        /**
         * value: "BARRIER"
         * @const
         */
        "BARRIER": "BARRIER"    };
    /**
    * Allowed values for the <code>putCall</code> property.
    * @enum {String}
    * @readonly
    */
    static PutCallEnum = {
        /**
         * value: "PUT"
         * @const
         */
        "PUT": "PUT",
        /**
         * value: "CALL"
         * @const
         */
        "CALL": "CALL"    };

}
