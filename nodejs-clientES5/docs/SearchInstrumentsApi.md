# GitChrisQueen_TDA_JS.SearchInstrumentsApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instrumentsGET**](SearchInstrumentsApi.md#instrumentsGET) | **GET** /instruments | Search or retrieve instrument data, including fundamental data


<a name="instrumentsGET"></a>
# **instrumentsGET**
> SearchInstrumentResponse instrumentsGET(symbol, projection, opts)

Search or retrieve instrument data, including fundamental data

### Example
```javascript
var GitChrisQueen_TDA_JS = require('@gitchrisqueen/tdameritrade-api-js-client');
var defaultClient = GitChrisQueen_TDA_JS.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new GitChrisQueen_TDA_JS.SearchInstrumentsApi();

var symbol = "symbol_example"; // String | Value to pass to the search. See projection description for more information.

var projection = "projection_example"; // String | The type of request: symbol-search: Retrieve instrument data of a specific symbol or cusip symbol-regex: Retrieve instrument data for all symbols matching regex. Example: symbol=XYZ.* will return all symbols beginning with XYZ desc-search: Retrieve instrument data for instruments whose description contains the word supplied. Example: symbol=FakeCompany will return all instruments with FakeCompany in the description. desc-regex: Search description with full regex support. Example: symbol=XYZ.[A-C] returns all instruments whose descriptions contain a word beginning with XYZ followed by a character A through C. fundamental: Returns fundamental data for a single instrument specified by exact symbol.

var opts = { 
  'apikey': "apikey_example" // String | Pass your OAuth User ID to make an unauthenticated request for delayed data.
};
apiInstance.instrumentsGET(symbol, projection, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Value to pass to the search. See projection description for more information. | 
 **projection** | **String**| The type of request: symbol-search: Retrieve instrument data of a specific symbol or cusip symbol-regex: Retrieve instrument data for all symbols matching regex. Example: symbol=XYZ.* will return all symbols beginning with XYZ desc-search: Retrieve instrument data for instruments whose description contains the word supplied. Example: symbol=FakeCompany will return all instruments with FakeCompany in the description. desc-regex: Search description with full regex support. Example: symbol=XYZ.[A-C] returns all instruments whose descriptions contain a word beginning with XYZ followed by a character A through C. fundamental: Returns fundamental data for a single instrument specified by exact symbol. | 
 **apikey** | **String**| Pass your OAuth User ID to make an unauthenticated request for delayed data. | [optional] 

### Return type

[**SearchInstrumentResponse**](SearchInstrumentResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

