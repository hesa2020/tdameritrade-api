# GitChrisQueen_TDA_JS.UserPrincipalPreferences

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expressTrading** | **Boolean** |  | [optional] [default to false]
**directOptionsRouting** | **Boolean** |  | [optional] [default to false]
**directEquityRouting** | **Boolean** |  | [optional] [default to false]
**defaultEquityOrderLegInstruction** | **String** |  | [optional] 
**defaultEquityOrderType** | **String** |  | [optional] 
**defaultEquityOrderPriceLinkType** | **String** |  | [optional] 
**defaultEquityOrderDuration** | **String** |  | [optional] 
**defaultEquityOrderMarketSession** | **String** |  | [optional] 
**defaultEquityQuantity** | **Number** |  | [optional] 
**mutualFundTaxLotMethod** | [**UserPrincipalPreferencesMutualFundTaxLotMethod**](UserPrincipalPreferencesMutualFundTaxLotMethod.md) |  | [optional] 
**optionTaxLotMethod** | [**UserPrincipalPreferencesMutualFundTaxLotMethod**](UserPrincipalPreferencesMutualFundTaxLotMethod.md) |  | [optional] 
**equityTaxLotMethod** | [**UserPrincipalPreferencesMutualFundTaxLotMethod**](UserPrincipalPreferencesMutualFundTaxLotMethod.md) |  | [optional] 
**defaultAdvancedToolLaunch** | **String** |  | [optional] 
**authTokenTimeout** | **String** |  | [optional] 

<a name="DefaultEquityOrderLegInstructionEnum"></a>
## Enum: DefaultEquityOrderLegInstructionEnum

* `BUY` (value: `"BUY"`)
* `SELL` (value: `"SELL"`)
* `BUY_TO_COVER` (value: `"BUY_TO_COVER"`)
* `SELL_SHORT` (value: `"SELL_SHORT"`)
* `NONE` (value: `"NONE"`)


<a name="DefaultEquityOrderTypeEnum"></a>
## Enum: DefaultEquityOrderTypeEnum

* `MARKET` (value: `"MARKET"`)
* `LIMIT` (value: `"LIMIT"`)
* `STOP` (value: `"STOP"`)
* `STOP_LIMIT` (value: `"STOP_LIMIT"`)
* `TRAILING_STOP` (value: `"TRAILING_STOP"`)
* `MARKET_ON_CLOSE` (value: `"MARKET_ON_CLOSE"`)
* `NONE` (value: `"NONE"`)


<a name="DefaultEquityOrderPriceLinkTypeEnum"></a>
## Enum: DefaultEquityOrderPriceLinkTypeEnum

* `VALUE` (value: `"VALUE"`)
* `PERCENT` (value: `"PERCENT"`)
* `NONE` (value: `"NONE"`)


<a name="DefaultEquityOrderDurationEnum"></a>
## Enum: DefaultEquityOrderDurationEnum

* `DAY` (value: `"DAY"`)
* `GOOD_TILL_CANCEL` (value: `"GOOD_TILL_CANCEL"`)
* `NONE` (value: `"NONE"`)


<a name="DefaultEquityOrderMarketSessionEnum"></a>
## Enum: DefaultEquityOrderMarketSessionEnum

* `AM` (value: `"AM"`)
* `PM` (value: `"PM"`)
* `NORMAL` (value: `"NORMAL"`)
* `SEAMLESS` (value: `"SEAMLESS"`)
* `NONE` (value: `"NONE"`)


<a name="DefaultAdvancedToolLaunchEnum"></a>
## Enum: DefaultAdvancedToolLaunchEnum

* `TA` (value: `"TA"`)
* `N` (value: `"N"`)
* `Y` (value: `"Y"`)
* `TOS` (value: `"TOS"`)
* `NONE` (value: `"NONE"`)
* `CC2` (value: `"CC2"`)


<a name="AuthTokenTimeoutEnum"></a>
## Enum: AuthTokenTimeoutEnum

* `FIFTY_FIVE_MINUTES` (value: `"FIFTY_FIVE_MINUTES"`)
* `TWO_HOURS` (value: `"TWO_HOURS"`)
* `FOUR_HOURS` (value: `"FOUR_HOURS"`)
* `EIGHT_HOURS` (value: `"EIGHT_HOURS"`)

