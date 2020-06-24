# @gitchrisqueen/tdameritrade-api-js-client

GitChrisQueen_TDA_JS - JavaScript client for @gitchrisqueen/tdameritrade-api-js-client
This is replication of the TD Ameritrade API.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1.3
- Package version: 0.1.3
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @gitchrisqueen/tdameritrade-api-js-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your @gitchrisqueen/tdameritrade-api-js-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('@gitchrisqueen/tdameritrade-api-js-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/gitchrisqueen/https://github.com/gitchrisqueen/tdameritrade-api
then install it via:

```shell
    npm install gitchrisqueen/https://github.com/gitchrisqueen/tdameritrade-api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');

var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new GitChrisQueen_TDA_JS.AccountsAndTradingApi()

var accountId = 56; // {Number} 

var orderId = 56; // {Number} 

api.accountsAccountIdOrdersOrderIdDELETE(accountId, orderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.tdameritrade.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GitChrisQueen_TDA_JS.AccountsAndTradingApi* | [**accountsAccountIdOrdersOrderIdDELETE**](docs/AccountsAndTradingApi.md#accountsAccountIdOrdersOrderIdDELETE) | **DELETE** /accounts/{accountId}/orders/{orderId} | Cancel Order
*GitChrisQueen_TDA_JS.AuthenticationApi* | [**oauth2TokenPOST**](docs/AuthenticationApi.md#oauth2TokenPOST) | **POST** /oauth2/token | Post Access Token
*GitChrisQueen_TDA_JS.OrdersApi* | [**accountsAccountIdOrdersOrderIdDELETE**](docs/OrdersApi.md#accountsAccountIdOrdersOrderIdDELETE) | **DELETE** /accounts/{accountId}/orders/{orderId} | Cancel Order
*GitChrisQueen_TDA_JS.PriceHistoryApi* | [**marketdataSymbolPricehistoryGET**](docs/PriceHistoryApi.md#marketdataSymbolPricehistoryGET) | **GET** /marketdata/{symbol}/pricehistory | Get price history for a symbol
*GitChrisQueen_TDA_JS.SearchInstrumentsApi* | [**instrumentsGET**](docs/SearchInstrumentsApi.md#instrumentsGET) | **GET** /instruments | Search or retrieve instrument data, including fundamental data


## Documentation for Models

 - [GitChrisQueen_TDA_JS.Bond](docs/Bond.md)
 - [GitChrisQueen_TDA_JS.CandleList](docs/CandleList.md)
 - [GitChrisQueen_TDA_JS.CandleListCandles](docs/CandleListCandles.md)
 - [GitChrisQueen_TDA_JS.EASObject](docs/EASObject.md)
 - [GitChrisQueen_TDA_JS.FrequencyType](docs/FrequencyType.md)
 - [GitChrisQueen_TDA_JS.Fundamental](docs/Fundamental.md)
 - [GitChrisQueen_TDA_JS.FundamentalData](docs/FundamentalData.md)
 - [GitChrisQueen_TDA_JS.FundamentalFundamental](docs/FundamentalFundamental.md)
 - [GitChrisQueen_TDA_JS.InlineResponse200](docs/InlineResponse200.md)
 - [GitChrisQueen_TDA_JS.Instrument](docs/Instrument.md)
 - [GitChrisQueen_TDA_JS.PeriodType](docs/PeriodType.md)
 - [GitChrisQueen_TDA_JS.PostAccessBody](docs/PostAccessBody.md)


## Documentation for Authorization


### application

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost&client_id=YHJUQFCHRMJ7XODGVGGPINB05SCG2H45%40AMER.OAUTHAP
- **Scopes**: N/A

### bearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
