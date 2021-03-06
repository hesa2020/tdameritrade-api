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
* The OptionQuote model module.
* @module model/OptionQuote
* @version 0.1.4
*/
export default class OptionQuote {
    /**
    * Constructs a new <code>OptionQuote</code>.
    * @alias module:model/OptionQuote
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OptionQuote</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OptionQuote} obj Optional instance to populate.
    * @return {module:model/OptionQuote} The populated <code>OptionQuote</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionQuote();
                        
            
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('bidPrice')) {
                obj['bidPrice'] = ApiClient.convertToType(data['bidPrice'], 'Number');
            }
            if (data.hasOwnProperty('bidSize')) {
                obj['bidSize'] = ApiClient.convertToType(data['bidSize'], 'Number');
            }
            if (data.hasOwnProperty('askPrice')) {
                obj['askPrice'] = ApiClient.convertToType(data['askPrice'], 'Number');
            }
            if (data.hasOwnProperty('askSize')) {
                obj['askSize'] = ApiClient.convertToType(data['askSize'], 'Number');
            }
            if (data.hasOwnProperty('lastPrice')) {
                obj['lastPrice'] = ApiClient.convertToType(data['lastPrice'], 'Number');
            }
            if (data.hasOwnProperty('lastSize')) {
                obj['lastSize'] = ApiClient.convertToType(data['lastSize'], 'Number');
            }
            if (data.hasOwnProperty('openPrice')) {
                obj['openPrice'] = ApiClient.convertToType(data['openPrice'], 'Number');
            }
            if (data.hasOwnProperty('highPrice')) {
                obj['highPrice'] = ApiClient.convertToType(data['highPrice'], 'Number');
            }
            if (data.hasOwnProperty('lowPrice')) {
                obj['lowPrice'] = ApiClient.convertToType(data['lowPrice'], 'Number');
            }
            if (data.hasOwnProperty('closePrice')) {
                obj['closePrice'] = ApiClient.convertToType(data['closePrice'], 'Number');
            }
            if (data.hasOwnProperty('netChange')) {
                obj['netChange'] = ApiClient.convertToType(data['netChange'], 'Number');
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
            if (data.hasOwnProperty('mark')) {
                obj['mark'] = ApiClient.convertToType(data['mark'], 'Number');
            }
            if (data.hasOwnProperty('openInterest')) {
                obj['openInterest'] = ApiClient.convertToType(data['openInterest'], 'Number');
            }
            if (data.hasOwnProperty('volatility')) {
                obj['volatility'] = ApiClient.convertToType(data['volatility'], 'Number');
            }
            if (data.hasOwnProperty('moneyIntrinsicValue')) {
                obj['moneyIntrinsicValue'] = ApiClient.convertToType(data['moneyIntrinsicValue'], 'Number');
            }
            if (data.hasOwnProperty('multiplier')) {
                obj['multiplier'] = ApiClient.convertToType(data['multiplier'], 'Number');
            }
            if (data.hasOwnProperty('strikePrice')) {
                obj['strikePrice'] = ApiClient.convertToType(data['strikePrice'], 'Number');
            }
            if (data.hasOwnProperty('contractType')) {
                obj['contractType'] = ApiClient.convertToType(data['contractType'], 'String');
            }
            if (data.hasOwnProperty('underlying')) {
                obj['underlying'] = ApiClient.convertToType(data['underlying'], 'String');
            }
            if (data.hasOwnProperty('timeValue')) {
                obj['timeValue'] = ApiClient.convertToType(data['timeValue'], 'Number');
            }
            if (data.hasOwnProperty('deliverables')) {
                obj['deliverables'] = ApiClient.convertToType(data['deliverables'], 'String');
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
            if (data.hasOwnProperty('securityStatus')) {
                obj['securityStatus'] = ApiClient.convertToType(data['securityStatus'], 'String');
            }
            if (data.hasOwnProperty('theoreticalOptionValue')) {
                obj['theoreticalOptionValue'] = ApiClient.convertToType(data['theoreticalOptionValue'], 'Number');
            }
            if (data.hasOwnProperty('underlyingPrice')) {
                obj['underlyingPrice'] = ApiClient.convertToType(data['underlyingPrice'], 'Number');
            }
            if (data.hasOwnProperty('uvExpirationType')) {
                obj['uvExpirationType'] = ApiClient.convertToType(data['uvExpirationType'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('exchangeName')) {
                obj['exchangeName'] = ApiClient.convertToType(data['exchangeName'], 'String');
            }
            if (data.hasOwnProperty('settlementType')) {
                obj['settlementType'] = ApiClient.convertToType(data['settlementType'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} symbol
    */
    'symbol' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {Number} bidPrice
    */
    'bidPrice' = undefined;
    /**
    * @member {Number} bidSize
    */
    'bidSize' = undefined;
    /**
    * @member {Number} askPrice
    */
    'askPrice' = undefined;
    /**
    * @member {Number} askSize
    */
    'askSize' = undefined;
    /**
    * @member {Number} lastPrice
    */
    'lastPrice' = undefined;
    /**
    * @member {Number} lastSize
    */
    'lastSize' = undefined;
    /**
    * @member {Number} openPrice
    */
    'openPrice' = undefined;
    /**
    * @member {Number} highPrice
    */
    'highPrice' = undefined;
    /**
    * @member {Number} lowPrice
    */
    'lowPrice' = undefined;
    /**
    * @member {Number} closePrice
    */
    'closePrice' = undefined;
    /**
    * @member {Number} netChange
    */
    'netChange' = undefined;
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
    * @member {Number} mark
    */
    'mark' = undefined;
    /**
    * @member {Number} openInterest
    */
    'openInterest' = undefined;
    /**
    * @member {Number} volatility
    */
    'volatility' = undefined;
    /**
    * @member {Number} moneyIntrinsicValue
    */
    'moneyIntrinsicValue' = undefined;
    /**
    * @member {Number} multiplier
    */
    'multiplier' = undefined;
    /**
    * @member {Number} strikePrice
    */
    'strikePrice' = undefined;
    /**
    * @member {String} contractType
    */
    'contractType' = undefined;
    /**
    * @member {String} underlying
    */
    'underlying' = undefined;
    /**
    * @member {Number} timeValue
    */
    'timeValue' = undefined;
    /**
    * @member {String} deliverables
    */
    'deliverables' = undefined;
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
    * @member {String} securityStatus
    */
    'securityStatus' = undefined;
    /**
    * @member {Number} theoreticalOptionValue
    */
    'theoreticalOptionValue' = undefined;
    /**
    * @member {Number} underlyingPrice
    */
    'underlyingPrice' = undefined;
    /**
    * @member {String} uvExpirationType
    */
    'uvExpirationType' = undefined;
    /**
    * @member {String} exchange
    */
    'exchange' = undefined;
    /**
    * @member {String} exchangeName
    */
    'exchangeName' = undefined;
    /**
    * @member {String} settlementType
    */
    'settlementType' = undefined;




}
