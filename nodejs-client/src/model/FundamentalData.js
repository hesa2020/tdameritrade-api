/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The FundamentalData model module.
* @module model/FundamentalData
* @version 0.1.3
*/
export default class FundamentalData {
    /**
    * Constructs a new <code>FundamentalData</code>.
    * @alias module:model/FundamentalData
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>FundamentalData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FundamentalData} obj Optional instance to populate.
    * @return {module:model/FundamentalData} The populated <code>FundamentalData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundamentalData();
                        
            
            if (data.hasOwnProperty('beta')) {
                obj['beta'] = ApiClient.convertToType(data['beta'], 'Number');
            }
            if (data.hasOwnProperty('bookValuePerShare')) {
                obj['bookValuePerShare'] = ApiClient.convertToType(data['bookValuePerShare'], 'Number');
            }
            if (data.hasOwnProperty('currentRatio')) {
                obj['currentRatio'] = ApiClient.convertToType(data['currentRatio'], 'Number');
            }
            if (data.hasOwnProperty('divGrowthRate3Year')) {
                obj['divGrowthRate3Year'] = ApiClient.convertToType(data['divGrowthRate3Year'], 'Number');
            }
            if (data.hasOwnProperty('dividendAmount')) {
                obj['dividendAmount'] = ApiClient.convertToType(data['dividendAmount'], 'Number');
            }
            if (data.hasOwnProperty('dividendDate')) {
                obj['dividendDate'] = ApiClient.convertToType(data['dividendDate'], 'String');
            }
            if (data.hasOwnProperty('dividendPayAmount')) {
                obj['dividendPayAmount'] = ApiClient.convertToType(data['dividendPayAmount'], 'Number');
            }
            if (data.hasOwnProperty('dividendPayDate')) {
                obj['dividendPayDate'] = ApiClient.convertToType(data['dividendPayDate'], 'String');
            }
            if (data.hasOwnProperty('dividendYield')) {
                obj['dividendYield'] = ApiClient.convertToType(data['dividendYield'], 'Number');
            }
            if (data.hasOwnProperty('epsChange')) {
                obj['epsChange'] = ApiClient.convertToType(data['epsChange'], 'Number');
            }
            if (data.hasOwnProperty('epsChangePercentTTM')) {
                obj['epsChangePercentTTM'] = ApiClient.convertToType(data['epsChangePercentTTM'], 'Number');
            }
            if (data.hasOwnProperty('epsChangeYear')) {
                obj['epsChangeYear'] = ApiClient.convertToType(data['epsChangeYear'], 'Number');
            }
            if (data.hasOwnProperty('epsTTM')) {
                obj['epsTTM'] = ApiClient.convertToType(data['epsTTM'], 'Number');
            }
            if (data.hasOwnProperty('grossMarginMRQ')) {
                obj['grossMarginMRQ'] = ApiClient.convertToType(data['grossMarginMRQ'], 'Number');
            }
            if (data.hasOwnProperty('grossMarginTTM')) {
                obj['grossMarginTTM'] = ApiClient.convertToType(data['grossMarginTTM'], 'Number');
            }
            if (data.hasOwnProperty('high52')) {
                obj['high52'] = ApiClient.convertToType(data['high52'], 'Number');
            }
            if (data.hasOwnProperty('interestCoverage')) {
                obj['interestCoverage'] = ApiClient.convertToType(data['interestCoverage'], 'Number');
            }
            if (data.hasOwnProperty('low52')) {
                obj['low52'] = ApiClient.convertToType(data['low52'], 'Number');
            }
            if (data.hasOwnProperty('ltDebtToEquity')) {
                obj['ltDebtToEquity'] = ApiClient.convertToType(data['ltDebtToEquity'], 'Number');
            }
            if (data.hasOwnProperty('marketCap')) {
                obj['marketCap'] = ApiClient.convertToType(data['marketCap'], 'Number');
            }
            if (data.hasOwnProperty('marketCapFloat')) {
                obj['marketCapFloat'] = ApiClient.convertToType(data['marketCapFloat'], 'Number');
            }
            if (data.hasOwnProperty('netProfitMarginMRQ')) {
                obj['netProfitMarginMRQ'] = ApiClient.convertToType(data['netProfitMarginMRQ'], 'Number');
            }
            if (data.hasOwnProperty('netProfitMarginTTM')) {
                obj['netProfitMarginTTM'] = ApiClient.convertToType(data['netProfitMarginTTM'], 'Number');
            }
            if (data.hasOwnProperty('operatingMarginMRQ')) {
                obj['operatingMarginMRQ'] = ApiClient.convertToType(data['operatingMarginMRQ'], 'Number');
            }
            if (data.hasOwnProperty('operatingMarginTTM')) {
                obj['operatingMarginTTM'] = ApiClient.convertToType(data['operatingMarginTTM'], 'Number');
            }
            if (data.hasOwnProperty('pbRatio')) {
                obj['pbRatio'] = ApiClient.convertToType(data['pbRatio'], 'Number');
            }
            if (data.hasOwnProperty('pcfRatio')) {
                obj['pcfRatio'] = ApiClient.convertToType(data['pcfRatio'], 'Number');
            }
            if (data.hasOwnProperty('peRatio')) {
                obj['peRatio'] = ApiClient.convertToType(data['peRatio'], 'Number');
            }
            if (data.hasOwnProperty('pegRatio')) {
                obj['pegRatio'] = ApiClient.convertToType(data['pegRatio'], 'Number');
            }
            if (data.hasOwnProperty('prRatio')) {
                obj['prRatio'] = ApiClient.convertToType(data['prRatio'], 'Number');
            }
            if (data.hasOwnProperty('quickRatio')) {
                obj['quickRatio'] = ApiClient.convertToType(data['quickRatio'], 'Number');
            }
            if (data.hasOwnProperty('returnOnAssets')) {
                obj['returnOnAssets'] = ApiClient.convertToType(data['returnOnAssets'], 'Number');
            }
            if (data.hasOwnProperty('returnOnEquity')) {
                obj['returnOnEquity'] = ApiClient.convertToType(data['returnOnEquity'], 'Number');
            }
            if (data.hasOwnProperty('returnOnInvestment')) {
                obj['returnOnInvestment'] = ApiClient.convertToType(data['returnOnInvestment'], 'Number');
            }
            if (data.hasOwnProperty('revChangeIn')) {
                obj['revChangeIn'] = ApiClient.convertToType(data['revChangeIn'], 'Number');
            }
            if (data.hasOwnProperty('revChangeTTM')) {
                obj['revChangeTTM'] = ApiClient.convertToType(data['revChangeTTM'], 'Number');
            }
            if (data.hasOwnProperty('revChangeYear')) {
                obj['revChangeYear'] = ApiClient.convertToType(data['revChangeYear'], 'Number');
            }
            if (data.hasOwnProperty('sharesOutstanding')) {
                obj['sharesOutstanding'] = ApiClient.convertToType(data['sharesOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('shortIntDayToCover')) {
                obj['shortIntDayToCover'] = ApiClient.convertToType(data['shortIntDayToCover'], 'Number');
            }
            if (data.hasOwnProperty('shortIntToFloat')) {
                obj['shortIntToFloat'] = ApiClient.convertToType(data['shortIntToFloat'], 'Number');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('totalDebtToCapital')) {
                obj['totalDebtToCapital'] = ApiClient.convertToType(data['totalDebtToCapital'], 'Number');
            }
            if (data.hasOwnProperty('totalDebtToEquity')) {
                obj['totalDebtToEquity'] = ApiClient.convertToType(data['totalDebtToEquity'], 'Number');
            }
            if (data.hasOwnProperty('vol10DayAvg')) {
                obj['vol10DayAvg'] = ApiClient.convertToType(data['vol10DayAvg'], 'Number');
            }
            if (data.hasOwnProperty('vol1DayAvg')) {
                obj['vol1DayAvg'] = ApiClient.convertToType(data['vol1DayAvg'], 'Number');
            }
            if (data.hasOwnProperty('vol3MonthAvg')) {
                obj['vol3MonthAvg'] = ApiClient.convertToType(data['vol3MonthAvg'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} beta
    */
    'beta' = undefined;
    /**
    * @member {Number} bookValuePerShare
    */
    'bookValuePerShare' = undefined;
    /**
    * @member {Number} currentRatio
    */
    'currentRatio' = undefined;
    /**
    * @member {Number} divGrowthRate3Year
    */
    'divGrowthRate3Year' = undefined;
    /**
    * @member {Number} dividendAmount
    */
    'dividendAmount' = undefined;
    /**
    * @member {String} dividendDate
    */
    'dividendDate' = undefined;
    /**
    * @member {Number} dividendPayAmount
    */
    'dividendPayAmount' = undefined;
    /**
    * @member {String} dividendPayDate
    */
    'dividendPayDate' = undefined;
    /**
    * @member {Number} dividendYield
    */
    'dividendYield' = undefined;
    /**
    * @member {Number} epsChange
    */
    'epsChange' = undefined;
    /**
    * @member {Number} epsChangePercentTTM
    */
    'epsChangePercentTTM' = undefined;
    /**
    * @member {Number} epsChangeYear
    */
    'epsChangeYear' = undefined;
    /**
    * @member {Number} epsTTM
    */
    'epsTTM' = undefined;
    /**
    * @member {Number} grossMarginMRQ
    */
    'grossMarginMRQ' = undefined;
    /**
    * @member {Number} grossMarginTTM
    */
    'grossMarginTTM' = undefined;
    /**
    * @member {Number} high52
    */
    'high52' = undefined;
    /**
    * @member {Number} interestCoverage
    */
    'interestCoverage' = undefined;
    /**
    * @member {Number} low52
    */
    'low52' = undefined;
    /**
    * @member {Number} ltDebtToEquity
    */
    'ltDebtToEquity' = undefined;
    /**
    * @member {Number} marketCap
    */
    'marketCap' = undefined;
    /**
    * @member {Number} marketCapFloat
    */
    'marketCapFloat' = undefined;
    /**
    * @member {Number} netProfitMarginMRQ
    */
    'netProfitMarginMRQ' = undefined;
    /**
    * @member {Number} netProfitMarginTTM
    */
    'netProfitMarginTTM' = undefined;
    /**
    * @member {Number} operatingMarginMRQ
    */
    'operatingMarginMRQ' = undefined;
    /**
    * @member {Number} operatingMarginTTM
    */
    'operatingMarginTTM' = undefined;
    /**
    * @member {Number} pbRatio
    */
    'pbRatio' = undefined;
    /**
    * @member {Number} pcfRatio
    */
    'pcfRatio' = undefined;
    /**
    * @member {Number} peRatio
    */
    'peRatio' = undefined;
    /**
    * @member {Number} pegRatio
    */
    'pegRatio' = undefined;
    /**
    * @member {Number} prRatio
    */
    'prRatio' = undefined;
    /**
    * @member {Number} quickRatio
    */
    'quickRatio' = undefined;
    /**
    * @member {Number} returnOnAssets
    */
    'returnOnAssets' = undefined;
    /**
    * @member {Number} returnOnEquity
    */
    'returnOnEquity' = undefined;
    /**
    * @member {Number} returnOnInvestment
    */
    'returnOnInvestment' = undefined;
    /**
    * @member {Number} revChangeIn
    */
    'revChangeIn' = undefined;
    /**
    * @member {Number} revChangeTTM
    */
    'revChangeTTM' = undefined;
    /**
    * @member {Number} revChangeYear
    */
    'revChangeYear' = undefined;
    /**
    * @member {Number} sharesOutstanding
    */
    'sharesOutstanding' = undefined;
    /**
    * @member {Number} shortIntDayToCover
    */
    'shortIntDayToCover' = undefined;
    /**
    * @member {Number} shortIntToFloat
    */
    'shortIntToFloat' = undefined;
    /**
    * @member {String} symbol
    */
    'symbol' = undefined;
    /**
    * @member {Number} totalDebtToCapital
    */
    'totalDebtToCapital' = undefined;
    /**
    * @member {Number} totalDebtToEquity
    */
    'totalDebtToEquity' = undefined;
    /**
    * @member {Number} vol10DayAvg
    */
    'vol10DayAvg' = undefined;
    /**
    * @member {Number} vol1DayAvg
    */
    'vol1DayAvg' = undefined;
    /**
    * @member {Number} vol3MonthAvg
    */
    'vol3MonthAvg' = undefined;




}
