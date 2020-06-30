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
import OptionChainOptionOptionDeliverablesList from './OptionChainOptionOptionDeliverablesList';
import OptionChainOptionPutCall from './OptionChainOptionPutCall';

/**
* The OptionChainOption model module.
* @module model/OptionChainOption
* @version 0.1.4
*/
export default class OptionChainOption {
    /**
    * Constructs a new <code>OptionChainOption</code>.
    * @alias module:model/OptionChainOption
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OptionChainOption</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OptionChainOption} obj Optional instance to populate.
    * @return {module:model/OptionChainOption} The populated <code>OptionChainOption</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionChainOption();
                        
            
            if (data.hasOwnProperty('putCall')) {
                obj['putCall'] = OptionChainOptionPutCall.constructFromObject(data['putCall']);
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('exchangeName')) {
                obj['exchangeName'] = ApiClient.convertToType(data['exchangeName'], 'String');
            }
            if (data.hasOwnProperty('bidPrice')) {
                obj['bidPrice'] = ApiClient.convertToType(data['bidPrice'], 'Number');
            }
            if (data.hasOwnProperty('askPrice')) {
                obj['askPrice'] = ApiClient.convertToType(data['askPrice'], 'Number');
            }
            if (data.hasOwnProperty('lastPrice')) {
                obj['lastPrice'] = ApiClient.convertToType(data['lastPrice'], 'Number');
            }
            if (data.hasOwnProperty('markPrice')) {
                obj['markPrice'] = ApiClient.convertToType(data['markPrice'], 'Number');
            }
            if (data.hasOwnProperty('bidSize')) {
                obj['bidSize'] = ApiClient.convertToType(data['bidSize'], 'Number');
            }
            if (data.hasOwnProperty('askSize')) {
                obj['askSize'] = ApiClient.convertToType(data['askSize'], 'Number');
            }
            if (data.hasOwnProperty('lastSize')) {
                obj['lastSize'] = ApiClient.convertToType(data['lastSize'], 'Number');
            }
            if (data.hasOwnProperty('highPrice')) {
                obj['highPrice'] = ApiClient.convertToType(data['highPrice'], 'Number');
            }
            if (data.hasOwnProperty('lowPrice')) {
                obj['lowPrice'] = ApiClient.convertToType(data['lowPrice'], 'Number');
            }
            if (data.hasOwnProperty('opePrice')) {
                obj['opePrice'] = ApiClient.convertToType(data['opePrice'], 'Number');
            }
            if (data.hasOwnProperty('closePrice')) {
                obj['closePrice'] = ApiClient.convertToType(data['closePrice'], 'Number');
            }
            if (data.hasOwnProperty('totalVolume')) {
                obj['totalVolume'] = ApiClient.convertToType(data['totalVolume'], 'Number');
            }
            if (data.hasOwnProperty('quoteTimeInLong')) {
                obj['quoteTimeInLong'] = ApiClient.convertToType(data['quoteTimeInLong'], 'Number');
            }
            if (data.hasOwnProperty('tradeTimeInLong')) {
                obj['tradeTimeInLong'] = ApiClient.convertToType(data['tradeTimeInLong'], 'Number');
            }
            if (data.hasOwnProperty('netChange')) {
                obj['netChange'] = ApiClient.convertToType(data['netChange'], 'Number');
            }
            if (data.hasOwnProperty('volatility')) {
                obj['volatility'] = ApiClient.convertToType(data['volatility'], 'Number');
            }
            if (data.hasOwnProperty('delta')) {
                obj['delta'] = ApiClient.convertToType(data['delta'], 'Number');
            }
            if (data.hasOwnProperty('gamma')) {
                obj['gamma'] = ApiClient.convertToType(data['gamma'], 'Number');
            }
            if (data.hasOwnProperty('theta')) {
                obj['theta'] = ApiClient.convertToType(data['theta'], 'Number');
            }
            if (data.hasOwnProperty('vega')) {
                obj['vega'] = ApiClient.convertToType(data['vega'], 'Number');
            }
            if (data.hasOwnProperty('rho')) {
                obj['rho'] = ApiClient.convertToType(data['rho'], 'Number');
            }
            if (data.hasOwnProperty('timeValue')) {
                obj['timeValue'] = ApiClient.convertToType(data['timeValue'], 'Number');
            }
            if (data.hasOwnProperty('openInterest')) {
                obj['openInterest'] = ApiClient.convertToType(data['openInterest'], 'Number');
            }
            if (data.hasOwnProperty('isInTheMoney')) {
                obj['isInTheMoney'] = ApiClient.convertToType(data['isInTheMoney'], 'Boolean');
            }
            if (data.hasOwnProperty('theoreticalOptionValue')) {
                obj['theoreticalOptionValue'] = ApiClient.convertToType(data['theoreticalOptionValue'], 'Number');
            }
            if (data.hasOwnProperty('theoreticalVolatility')) {
                obj['theoreticalVolatility'] = ApiClient.convertToType(data['theoreticalVolatility'], 'Number');
            }
            if (data.hasOwnProperty('isMini')) {
                obj['isMini'] = ApiClient.convertToType(data['isMini'], 'Boolean');
            }
            if (data.hasOwnProperty('isNonStandard')) {
                obj['isNonStandard'] = ApiClient.convertToType(data['isNonStandard'], 'Boolean');
            }
            if (data.hasOwnProperty('optionDeliverablesList')) {
                obj['optionDeliverablesList'] = OptionChainOptionOptionDeliverablesList.constructFromObject(data['optionDeliverablesList']);
            }
            if (data.hasOwnProperty('strikePrice')) {
                obj['strikePrice'] = ApiClient.convertToType(data['strikePrice'], 'Number');
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'String');
            }
            if (data.hasOwnProperty('expirationType')) {
                obj['expirationType'] = ApiClient.convertToType(data['expirationType'], 'String');
            }
            if (data.hasOwnProperty('multiplier')) {
                obj['multiplier'] = ApiClient.convertToType(data['multiplier'], 'Number');
            }
            if (data.hasOwnProperty('settlementType')) {
                obj['settlementType'] = ApiClient.convertToType(data['settlementType'], 'String');
            }
            if (data.hasOwnProperty('delverableNote')) {
                obj['delverableNote'] = ApiClient.convertToType(data['delverableNote'], 'String');
            }
            if (data.hasOwnProperty('isIndexOption')) {
                obj['isIndexOption'] = ApiClient.convertToType(data['isIndexOption'], 'Boolean');
            }
            if (data.hasOwnProperty('percentChange')) {
                obj['percentChange'] = ApiClient.convertToType(data['percentChange'], 'Number');
            }
            if (data.hasOwnProperty('markChange')) {
                obj['markChange'] = ApiClient.convertToType(data['markChange'], 'Number');
            }
            if (data.hasOwnProperty('markPercentChange')) {
                obj['markPercentChange'] = ApiClient.convertToType(data['markPercentChange'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/OptionChainOptionPutCall} putCall
    */
    'putCall' = undefined;
    /**
    * @member {String} symbol
    */
    'symbol' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {String} exchangeName
    */
    'exchangeName' = undefined;
    /**
    * @member {Number} bidPrice
    */
    'bidPrice' = undefined;
    /**
    * @member {Number} askPrice
    */
    'askPrice' = undefined;
    /**
    * @member {Number} lastPrice
    */
    'lastPrice' = undefined;
    /**
    * @member {Number} markPrice
    */
    'markPrice' = undefined;
    /**
    * @member {Number} bidSize
    */
    'bidSize' = undefined;
    /**
    * @member {Number} askSize
    */
    'askSize' = undefined;
    /**
    * @member {Number} lastSize
    */
    'lastSize' = undefined;
    /**
    * @member {Number} highPrice
    */
    'highPrice' = undefined;
    /**
    * @member {Number} lowPrice
    */
    'lowPrice' = undefined;
    /**
    * @member {Number} opePrice
    */
    'opePrice' = undefined;
    /**
    * @member {Number} closePrice
    */
    'closePrice' = undefined;
    /**
    * @member {Number} totalVolume
    */
    'totalVolume' = undefined;
    /**
    * @member {Number} quoteTimeInLong
    */
    'quoteTimeInLong' = undefined;
    /**
    * @member {Number} tradeTimeInLong
    */
    'tradeTimeInLong' = undefined;
    /**
    * @member {Number} netChange
    */
    'netChange' = undefined;
    /**
    * @member {Number} volatility
    */
    'volatility' = undefined;
    /**
    * @member {Number} delta
    */
    'delta' = undefined;
    /**
    * @member {Number} gamma
    */
    'gamma' = undefined;
    /**
    * @member {Number} theta
    */
    'theta' = undefined;
    /**
    * @member {Number} vega
    */
    'vega' = undefined;
    /**
    * @member {Number} rho
    */
    'rho' = undefined;
    /**
    * @member {Number} timeValue
    */
    'timeValue' = undefined;
    /**
    * @member {Number} openInterest
    */
    'openInterest' = undefined;
    /**
    * @member {Boolean} isInTheMoney
    */
    'isInTheMoney' = undefined;
    /**
    * @member {Number} theoreticalOptionValue
    */
    'theoreticalOptionValue' = undefined;
    /**
    * @member {Number} theoreticalVolatility
    */
    'theoreticalVolatility' = undefined;
    /**
    * @member {Boolean} isMini
    */
    'isMini' = undefined;
    /**
    * @member {Boolean} isNonStandard
    */
    'isNonStandard' = undefined;
    /**
    * @member {module:model/OptionChainOptionOptionDeliverablesList} optionDeliverablesList
    */
    'optionDeliverablesList' = undefined;
    /**
    * @member {Number} strikePrice
    */
    'strikePrice' = undefined;
    /**
    * @member {String} expirationDate
    */
    'expirationDate' = undefined;
    /**
    * @member {String} expirationType
    */
    'expirationType' = undefined;
    /**
    * @member {Number} multiplier
    */
    'multiplier' = undefined;
    /**
    * @member {String} settlementType
    */
    'settlementType' = undefined;
    /**
    * @member {String} delverableNote
    */
    'delverableNote' = undefined;
    /**
    * @member {Boolean} isIndexOption
    */
    'isIndexOption' = undefined;
    /**
    * @member {Number} percentChange
    */
    'percentChange' = undefined;
    /**
    * @member {Number} markChange
    */
    'markChange' = undefined;
    /**
    * @member {Number} markPercentChange
    */
    'markPercentChange' = undefined;




}
