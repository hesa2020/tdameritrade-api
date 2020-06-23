# @GitchrisqueenTdameritradeApiJsClient.InstrumentsApi

All URIs are relative to *https://api.tdameritrade.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instrumentsGET**](InstrumentsApi.md#instrumentsGET) | **GET** /instruments | Searh or retrieve instument data, including fundamental data

<a name="instrumentsGET"></a>
# **instrumentsGET**
> InlineResponse200 instrumentsGET(Symbol, Projection, opts)

Searh or retrieve instument data, including fundamental data

### Example
```javascript
import @GitchrisqueenTdameritradeApiJsClient from '@gitchrisqueen/tdameritrade-api-js-client';
let defaultClient = @GitchrisqueenTdameritradeApiJsClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @GitchrisqueenTdameritradeApiJsClient.InstrumentsApi();
let Symbol = "Symbol_example"; // String | Value to pass to the search. See projection description for more information.
let Projection = "Projection_example"; // String | The type of request: symbol-search: Retrieve instrument data of a specific symbol or cusip symbol-regex: Retrieve instrument data for all symbols matching regex. Example: symbol=XYZ.* will return all symbols beginning with XYZ desc-search: Retrieve instrument data for instruments whose description contains the word supplied. Example: symbol=FakeCompany will return all instruments with FakeCompany in the description. desc-regex: Search description with full regex support. Example: symbol=XYZ.[A-C] returns all instruments whose descriptions contain a word beginning with XYZ followed by a character A through C. fundamental: Returns fundamental data for a single instrument specified by exact symbol.
let opts = { 
  'Apikey': "Apikey_example" // String | Pass your OAuth User ID to make an unauthenticated request for delayed data.
};
apiInstance.instrumentsGET(Symbol, Projection, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Symbol** | **String**| Value to pass to the search. See projection description for more information. | 
 **Projection** | **String**| The type of request: symbol-search: Retrieve instrument data of a specific symbol or cusip symbol-regex: Retrieve instrument data for all symbols matching regex. Example: symbol&#x3D;XYZ.* will return all symbols beginning with XYZ desc-search: Retrieve instrument data for instruments whose description contains the word supplied. Example: symbol&#x3D;FakeCompany will return all instruments with FakeCompany in the description. desc-regex: Search description with full regex support. Example: symbol&#x3D;XYZ.[A-C] returns all instruments whose descriptions contain a word beginning with XYZ followed by a character A through C. fundamental: Returns fundamental data for a single instrument specified by exact symbol. | 
 **Apikey** | **String**| Pass your OAuth User ID to make an unauthenticated request for delayed data. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json
