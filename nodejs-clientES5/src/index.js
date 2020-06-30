/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/AccountSecuritiesAccount', 'model/AssetType', 'model/Bond', 'model/CandleList', 'model/CandleListCandles', 'model/CashAccount', 'model/CashAccountBalances', 'model/CashAccountCurrentBalances', 'model/CashAccountInitialBalances', 'model/CashEquivalent', 'model/Duration', 'model/EASObject', 'model/ETFQuote', 'model/Equity', 'model/EquityAssetType', 'model/EquityQuote', 'model/ErrorObject', 'model/Execution', 'model/ExecutionExecutionLegs', 'model/ExpirationDate', 'model/FixedIncome', 'model/ForexQuote', 'model/FrequencyType', 'model/Fundamental', 'model/FundamentalData', 'model/FundamentalFundamental', 'model/FutureOptionsQuote', 'model/FutureQuote', 'model/GetOptionChainResponse', 'model/GetQuoteResponse', 'model/Hours', 'model/HoursSessionHours', 'model/IndexQuote', 'model/Instrument', 'model/LotMethod', 'model/MarginAccount', 'model/MarginAccountBalances', 'model/MarginAccountCurrentBalances', 'model/MarginAccountInitialBalances', 'model/MarginAccountOrderStrategies', 'model/MarginAccountPositions', 'model/Mover', 'model/MutualFund', 'model/MutualFundQuote', 'model/Option', 'model/OptionChain', 'model/OptionChainOption', 'model/OptionChainOptionOptionDeliverablesList', 'model/OptionChainOptionPutCall', 'model/OptionChainStrategy', 'model/OptionChainUnderlying', 'model/OptionDeliverable', 'model/OptionDeliverableInner', 'model/OptionDeliverableInnerAssetType', 'model/OptionQuote', 'model/OrderActivity', 'model/OrderGet', 'model/OrderGetCancelTime', 'model/OrderGetDuration', 'model/OrderGetInstrument', 'model/OrderGetOrderActivityCollection', 'model/OrderGetOrderLegCollection', 'model/OrderGetOrderType', 'model/OrderGetSession', 'model/OrderType', 'model/PeriodType', 'model/Positions', 'model/PositionsInner', 'model/PositionsInnerInstrument', 'model/PostAccessBody', 'model/Preferences', 'model/PutCall', 'model/SearchInstrument', 'model/SearchInstrumentResponse', 'model/SecuritiesAccount', 'model/Session', 'model/Strategy', 'model/StrikePriceMap', 'model/SubscriptionKey', 'model/SubscriptionKeyKeys', 'model/Transaction', 'model/TransactionTransactionItem', 'model/TransactionTransactionItemInstrument', 'model/Underlying', 'model/UserPrincipal', 'model/UserPrincipalAccounts', 'model/UserPrincipalAuthorizations', 'model/UserPrincipalPreferences', 'model/UserPrincipalPreferencesMutualFundTaxLotMethod', 'model/UserPrincipalQuotes', 'model/UserPrincipalStreamerInfo', 'model/UserPrincipalStreamerSubscriptionKeys', 'model/WatchList', 'model/WatchListInstrument', 'model/WatchListRequest', 'model/WatchListRequestInstrument', 'model/WatchListRequestWatchlistItems', 'model/WatchListResponse', 'model/WatchListWatchlistItems', 'api/AccountsApi', 'api/AuthenticationApi', 'api/InstrumentsApi', 'api/MarketHoursApi', 'api/MoversApi', 'api/OptionChainsApi', 'api/OrdersApi', 'api/PriceHistoryApi', 'api/QuotesApi', 'api/SavedOrdersApi', 'api/TransactionsApi', 'api/UserInfoPreferencesApi', 'api/WatchlistApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/AccountSecuritiesAccount'), require('./model/AssetType'), require('./model/Bond'), require('./model/CandleList'), require('./model/CandleListCandles'), require('./model/CashAccount'), require('./model/CashAccountBalances'), require('./model/CashAccountCurrentBalances'), require('./model/CashAccountInitialBalances'), require('./model/CashEquivalent'), require('./model/Duration'), require('./model/EASObject'), require('./model/ETFQuote'), require('./model/Equity'), require('./model/EquityAssetType'), require('./model/EquityQuote'), require('./model/ErrorObject'), require('./model/Execution'), require('./model/ExecutionExecutionLegs'), require('./model/ExpirationDate'), require('./model/FixedIncome'), require('./model/ForexQuote'), require('./model/FrequencyType'), require('./model/Fundamental'), require('./model/FundamentalData'), require('./model/FundamentalFundamental'), require('./model/FutureOptionsQuote'), require('./model/FutureQuote'), require('./model/GetOptionChainResponse'), require('./model/GetQuoteResponse'), require('./model/Hours'), require('./model/HoursSessionHours'), require('./model/IndexQuote'), require('./model/Instrument'), require('./model/LotMethod'), require('./model/MarginAccount'), require('./model/MarginAccountBalances'), require('./model/MarginAccountCurrentBalances'), require('./model/MarginAccountInitialBalances'), require('./model/MarginAccountOrderStrategies'), require('./model/MarginAccountPositions'), require('./model/Mover'), require('./model/MutualFund'), require('./model/MutualFundQuote'), require('./model/Option'), require('./model/OptionChain'), require('./model/OptionChainOption'), require('./model/OptionChainOptionOptionDeliverablesList'), require('./model/OptionChainOptionPutCall'), require('./model/OptionChainStrategy'), require('./model/OptionChainUnderlying'), require('./model/OptionDeliverable'), require('./model/OptionDeliverableInner'), require('./model/OptionDeliverableInnerAssetType'), require('./model/OptionQuote'), require('./model/OrderActivity'), require('./model/OrderGet'), require('./model/OrderGetCancelTime'), require('./model/OrderGetDuration'), require('./model/OrderGetInstrument'), require('./model/OrderGetOrderActivityCollection'), require('./model/OrderGetOrderLegCollection'), require('./model/OrderGetOrderType'), require('./model/OrderGetSession'), require('./model/OrderType'), require('./model/PeriodType'), require('./model/Positions'), require('./model/PositionsInner'), require('./model/PositionsInnerInstrument'), require('./model/PostAccessBody'), require('./model/Preferences'), require('./model/PutCall'), require('./model/SearchInstrument'), require('./model/SearchInstrumentResponse'), require('./model/SecuritiesAccount'), require('./model/Session'), require('./model/Strategy'), require('./model/StrikePriceMap'), require('./model/SubscriptionKey'), require('./model/SubscriptionKeyKeys'), require('./model/Transaction'), require('./model/TransactionTransactionItem'), require('./model/TransactionTransactionItemInstrument'), require('./model/Underlying'), require('./model/UserPrincipal'), require('./model/UserPrincipalAccounts'), require('./model/UserPrincipalAuthorizations'), require('./model/UserPrincipalPreferences'), require('./model/UserPrincipalPreferencesMutualFundTaxLotMethod'), require('./model/UserPrincipalQuotes'), require('./model/UserPrincipalStreamerInfo'), require('./model/UserPrincipalStreamerSubscriptionKeys'), require('./model/WatchList'), require('./model/WatchListInstrument'), require('./model/WatchListRequest'), require('./model/WatchListRequestInstrument'), require('./model/WatchListRequestWatchlistItems'), require('./model/WatchListResponse'), require('./model/WatchListWatchlistItems'), require('./api/AccountsApi'), require('./api/AuthenticationApi'), require('./api/InstrumentsApi'), require('./api/MarketHoursApi'), require('./api/MoversApi'), require('./api/OptionChainsApi'), require('./api/OrdersApi'), require('./api/PriceHistoryApi'), require('./api/QuotesApi'), require('./api/SavedOrdersApi'), require('./api/TransactionsApi'), require('./api/UserInfoPreferencesApi'), require('./api/WatchlistApi'));
  }
}(function(ApiClient, Account, AccountSecuritiesAccount, AssetType, Bond, CandleList, CandleListCandles, CashAccount, CashAccountBalances, CashAccountCurrentBalances, CashAccountInitialBalances, CashEquivalent, Duration, EASObject, ETFQuote, Equity, EquityAssetType, EquityQuote, ErrorObject, Execution, ExecutionExecutionLegs, ExpirationDate, FixedIncome, ForexQuote, FrequencyType, Fundamental, FundamentalData, FundamentalFundamental, FutureOptionsQuote, FutureQuote, GetOptionChainResponse, GetQuoteResponse, Hours, HoursSessionHours, IndexQuote, Instrument, LotMethod, MarginAccount, MarginAccountBalances, MarginAccountCurrentBalances, MarginAccountInitialBalances, MarginAccountOrderStrategies, MarginAccountPositions, Mover, MutualFund, MutualFundQuote, Option, OptionChain, OptionChainOption, OptionChainOptionOptionDeliverablesList, OptionChainOptionPutCall, OptionChainStrategy, OptionChainUnderlying, OptionDeliverable, OptionDeliverableInner, OptionDeliverableInnerAssetType, OptionQuote, OrderActivity, OrderGet, OrderGetCancelTime, OrderGetDuration, OrderGetInstrument, OrderGetOrderActivityCollection, OrderGetOrderLegCollection, OrderGetOrderType, OrderGetSession, OrderType, PeriodType, Positions, PositionsInner, PositionsInnerInstrument, PostAccessBody, Preferences, PutCall, SearchInstrument, SearchInstrumentResponse, SecuritiesAccount, Session, Strategy, StrikePriceMap, SubscriptionKey, SubscriptionKeyKeys, Transaction, TransactionTransactionItem, TransactionTransactionItemInstrument, Underlying, UserPrincipal, UserPrincipalAccounts, UserPrincipalAuthorizations, UserPrincipalPreferences, UserPrincipalPreferencesMutualFundTaxLotMethod, UserPrincipalQuotes, UserPrincipalStreamerInfo, UserPrincipalStreamerSubscriptionKeys, WatchList, WatchListInstrument, WatchListRequest, WatchListRequestInstrument, WatchListRequestWatchlistItems, WatchListResponse, WatchListWatchlistItems, AccountsApi, AuthenticationApi, InstrumentsApi, MarketHoursApi, MoversApi, OptionChainsApi, OrdersApi, PriceHistoryApi, QuotesApi, SavedOrdersApi, TransactionsApi, UserInfoPreferencesApi, WatchlistApi) {
  'use strict';

  /**
   * TD Ameritrade API node javascript client code..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var GitChrisQueen_TDA_JS = require('index'); // See note below*.
   * var xxxSvc = new GitChrisQueen_TDA_JS.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new GitChrisQueen_TDA_JS.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new GitChrisQueen_TDA_JS.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new GitChrisQueen_TDA_JS.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.4
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountSecuritiesAccount model constructor.
     * @property {module:model/AccountSecuritiesAccount}
     */
    AccountSecuritiesAccount: AccountSecuritiesAccount,
    /**
     * The AssetType model constructor.
     * @property {module:model/AssetType}
     */
    AssetType: AssetType,
    /**
     * The Bond model constructor.
     * @property {module:model/Bond}
     */
    Bond: Bond,
    /**
     * The CandleList model constructor.
     * @property {module:model/CandleList}
     */
    CandleList: CandleList,
    /**
     * The CandleListCandles model constructor.
     * @property {module:model/CandleListCandles}
     */
    CandleListCandles: CandleListCandles,
    /**
     * The CashAccount model constructor.
     * @property {module:model/CashAccount}
     */
    CashAccount: CashAccount,
    /**
     * The CashAccountBalances model constructor.
     * @property {module:model/CashAccountBalances}
     */
    CashAccountBalances: CashAccountBalances,
    /**
     * The CashAccountCurrentBalances model constructor.
     * @property {module:model/CashAccountCurrentBalances}
     */
    CashAccountCurrentBalances: CashAccountCurrentBalances,
    /**
     * The CashAccountInitialBalances model constructor.
     * @property {module:model/CashAccountInitialBalances}
     */
    CashAccountInitialBalances: CashAccountInitialBalances,
    /**
     * The CashEquivalent model constructor.
     * @property {module:model/CashEquivalent}
     */
    CashEquivalent: CashEquivalent,
    /**
     * The Duration model constructor.
     * @property {module:model/Duration}
     */
    Duration: Duration,
    /**
     * The EASObject model constructor.
     * @property {module:model/EASObject}
     */
    EASObject: EASObject,
    /**
     * The ETFQuote model constructor.
     * @property {module:model/ETFQuote}
     */
    ETFQuote: ETFQuote,
    /**
     * The Equity model constructor.
     * @property {module:model/Equity}
     */
    Equity: Equity,
    /**
     * The EquityAssetType model constructor.
     * @property {module:model/EquityAssetType}
     */
    EquityAssetType: EquityAssetType,
    /**
     * The EquityQuote model constructor.
     * @property {module:model/EquityQuote}
     */
    EquityQuote: EquityQuote,
    /**
     * The ErrorObject model constructor.
     * @property {module:model/ErrorObject}
     */
    ErrorObject: ErrorObject,
    /**
     * The Execution model constructor.
     * @property {module:model/Execution}
     */
    Execution: Execution,
    /**
     * The ExecutionExecutionLegs model constructor.
     * @property {module:model/ExecutionExecutionLegs}
     */
    ExecutionExecutionLegs: ExecutionExecutionLegs,
    /**
     * The ExpirationDate model constructor.
     * @property {module:model/ExpirationDate}
     */
    ExpirationDate: ExpirationDate,
    /**
     * The FixedIncome model constructor.
     * @property {module:model/FixedIncome}
     */
    FixedIncome: FixedIncome,
    /**
     * The ForexQuote model constructor.
     * @property {module:model/ForexQuote}
     */
    ForexQuote: ForexQuote,
    /**
     * The FrequencyType model constructor.
     * @property {module:model/FrequencyType}
     */
    FrequencyType: FrequencyType,
    /**
     * The Fundamental model constructor.
     * @property {module:model/Fundamental}
     */
    Fundamental: Fundamental,
    /**
     * The FundamentalData model constructor.
     * @property {module:model/FundamentalData}
     */
    FundamentalData: FundamentalData,
    /**
     * The FundamentalFundamental model constructor.
     * @property {module:model/FundamentalFundamental}
     */
    FundamentalFundamental: FundamentalFundamental,
    /**
     * The FutureOptionsQuote model constructor.
     * @property {module:model/FutureOptionsQuote}
     */
    FutureOptionsQuote: FutureOptionsQuote,
    /**
     * The FutureQuote model constructor.
     * @property {module:model/FutureQuote}
     */
    FutureQuote: FutureQuote,
    /**
     * The GetOptionChainResponse model constructor.
     * @property {module:model/GetOptionChainResponse}
     */
    GetOptionChainResponse: GetOptionChainResponse,
    /**
     * The GetQuoteResponse model constructor.
     * @property {module:model/GetQuoteResponse}
     */
    GetQuoteResponse: GetQuoteResponse,
    /**
     * The Hours model constructor.
     * @property {module:model/Hours}
     */
    Hours: Hours,
    /**
     * The HoursSessionHours model constructor.
     * @property {module:model/HoursSessionHours}
     */
    HoursSessionHours: HoursSessionHours,
    /**
     * The IndexQuote model constructor.
     * @property {module:model/IndexQuote}
     */
    IndexQuote: IndexQuote,
    /**
     * The Instrument model constructor.
     * @property {module:model/Instrument}
     */
    Instrument: Instrument,
    /**
     * The LotMethod model constructor.
     * @property {module:model/LotMethod}
     */
    LotMethod: LotMethod,
    /**
     * The MarginAccount model constructor.
     * @property {module:model/MarginAccount}
     */
    MarginAccount: MarginAccount,
    /**
     * The MarginAccountBalances model constructor.
     * @property {module:model/MarginAccountBalances}
     */
    MarginAccountBalances: MarginAccountBalances,
    /**
     * The MarginAccountCurrentBalances model constructor.
     * @property {module:model/MarginAccountCurrentBalances}
     */
    MarginAccountCurrentBalances: MarginAccountCurrentBalances,
    /**
     * The MarginAccountInitialBalances model constructor.
     * @property {module:model/MarginAccountInitialBalances}
     */
    MarginAccountInitialBalances: MarginAccountInitialBalances,
    /**
     * The MarginAccountOrderStrategies model constructor.
     * @property {module:model/MarginAccountOrderStrategies}
     */
    MarginAccountOrderStrategies: MarginAccountOrderStrategies,
    /**
     * The MarginAccountPositions model constructor.
     * @property {module:model/MarginAccountPositions}
     */
    MarginAccountPositions: MarginAccountPositions,
    /**
     * The Mover model constructor.
     * @property {module:model/Mover}
     */
    Mover: Mover,
    /**
     * The MutualFund model constructor.
     * @property {module:model/MutualFund}
     */
    MutualFund: MutualFund,
    /**
     * The MutualFundQuote model constructor.
     * @property {module:model/MutualFundQuote}
     */
    MutualFundQuote: MutualFundQuote,
    /**
     * The Option model constructor.
     * @property {module:model/Option}
     */
    Option: Option,
    /**
     * The OptionChain model constructor.
     * @property {module:model/OptionChain}
     */
    OptionChain: OptionChain,
    /**
     * The OptionChainOption model constructor.
     * @property {module:model/OptionChainOption}
     */
    OptionChainOption: OptionChainOption,
    /**
     * The OptionChainOptionOptionDeliverablesList model constructor.
     * @property {module:model/OptionChainOptionOptionDeliverablesList}
     */
    OptionChainOptionOptionDeliverablesList: OptionChainOptionOptionDeliverablesList,
    /**
     * The OptionChainOptionPutCall model constructor.
     * @property {module:model/OptionChainOptionPutCall}
     */
    OptionChainOptionPutCall: OptionChainOptionPutCall,
    /**
     * The OptionChainStrategy model constructor.
     * @property {module:model/OptionChainStrategy}
     */
    OptionChainStrategy: OptionChainStrategy,
    /**
     * The OptionChainUnderlying model constructor.
     * @property {module:model/OptionChainUnderlying}
     */
    OptionChainUnderlying: OptionChainUnderlying,
    /**
     * The OptionDeliverable model constructor.
     * @property {module:model/OptionDeliverable}
     */
    OptionDeliverable: OptionDeliverable,
    /**
     * The OptionDeliverableInner model constructor.
     * @property {module:model/OptionDeliverableInner}
     */
    OptionDeliverableInner: OptionDeliverableInner,
    /**
     * The OptionDeliverableInnerAssetType model constructor.
     * @property {module:model/OptionDeliverableInnerAssetType}
     */
    OptionDeliverableInnerAssetType: OptionDeliverableInnerAssetType,
    /**
     * The OptionQuote model constructor.
     * @property {module:model/OptionQuote}
     */
    OptionQuote: OptionQuote,
    /**
     * The OrderActivity model constructor.
     * @property {module:model/OrderActivity}
     */
    OrderActivity: OrderActivity,
    /**
     * The OrderGet model constructor.
     * @property {module:model/OrderGet}
     */
    OrderGet: OrderGet,
    /**
     * The OrderGetCancelTime model constructor.
     * @property {module:model/OrderGetCancelTime}
     */
    OrderGetCancelTime: OrderGetCancelTime,
    /**
     * The OrderGetDuration model constructor.
     * @property {module:model/OrderGetDuration}
     */
    OrderGetDuration: OrderGetDuration,
    /**
     * The OrderGetInstrument model constructor.
     * @property {module:model/OrderGetInstrument}
     */
    OrderGetInstrument: OrderGetInstrument,
    /**
     * The OrderGetOrderActivityCollection model constructor.
     * @property {module:model/OrderGetOrderActivityCollection}
     */
    OrderGetOrderActivityCollection: OrderGetOrderActivityCollection,
    /**
     * The OrderGetOrderLegCollection model constructor.
     * @property {module:model/OrderGetOrderLegCollection}
     */
    OrderGetOrderLegCollection: OrderGetOrderLegCollection,
    /**
     * The OrderGetOrderType model constructor.
     * @property {module:model/OrderGetOrderType}
     */
    OrderGetOrderType: OrderGetOrderType,
    /**
     * The OrderGetSession model constructor.
     * @property {module:model/OrderGetSession}
     */
    OrderGetSession: OrderGetSession,
    /**
     * The OrderType model constructor.
     * @property {module:model/OrderType}
     */
    OrderType: OrderType,
    /**
     * The PeriodType model constructor.
     * @property {module:model/PeriodType}
     */
    PeriodType: PeriodType,
    /**
     * The Positions model constructor.
     * @property {module:model/Positions}
     */
    Positions: Positions,
    /**
     * The PositionsInner model constructor.
     * @property {module:model/PositionsInner}
     */
    PositionsInner: PositionsInner,
    /**
     * The PositionsInnerInstrument model constructor.
     * @property {module:model/PositionsInnerInstrument}
     */
    PositionsInnerInstrument: PositionsInnerInstrument,
    /**
     * The PostAccessBody model constructor.
     * @property {module:model/PostAccessBody}
     */
    PostAccessBody: PostAccessBody,
    /**
     * The Preferences model constructor.
     * @property {module:model/Preferences}
     */
    Preferences: Preferences,
    /**
     * The PutCall model constructor.
     * @property {module:model/PutCall}
     */
    PutCall: PutCall,
    /**
     * The SearchInstrument model constructor.
     * @property {module:model/SearchInstrument}
     */
    SearchInstrument: SearchInstrument,
    /**
     * The SearchInstrumentResponse model constructor.
     * @property {module:model/SearchInstrumentResponse}
     */
    SearchInstrumentResponse: SearchInstrumentResponse,
    /**
     * The SecuritiesAccount model constructor.
     * @property {module:model/SecuritiesAccount}
     */
    SecuritiesAccount: SecuritiesAccount,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The Strategy model constructor.
     * @property {module:model/Strategy}
     */
    Strategy: Strategy,
    /**
     * The StrikePriceMap model constructor.
     * @property {module:model/StrikePriceMap}
     */
    StrikePriceMap: StrikePriceMap,
    /**
     * The SubscriptionKey model constructor.
     * @property {module:model/SubscriptionKey}
     */
    SubscriptionKey: SubscriptionKey,
    /**
     * The SubscriptionKeyKeys model constructor.
     * @property {module:model/SubscriptionKeyKeys}
     */
    SubscriptionKeyKeys: SubscriptionKeyKeys,
    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction: Transaction,
    /**
     * The TransactionTransactionItem model constructor.
     * @property {module:model/TransactionTransactionItem}
     */
    TransactionTransactionItem: TransactionTransactionItem,
    /**
     * The TransactionTransactionItemInstrument model constructor.
     * @property {module:model/TransactionTransactionItemInstrument}
     */
    TransactionTransactionItemInstrument: TransactionTransactionItemInstrument,
    /**
     * The Underlying model constructor.
     * @property {module:model/Underlying}
     */
    Underlying: Underlying,
    /**
     * The UserPrincipal model constructor.
     * @property {module:model/UserPrincipal}
     */
    UserPrincipal: UserPrincipal,
    /**
     * The UserPrincipalAccounts model constructor.
     * @property {module:model/UserPrincipalAccounts}
     */
    UserPrincipalAccounts: UserPrincipalAccounts,
    /**
     * The UserPrincipalAuthorizations model constructor.
     * @property {module:model/UserPrincipalAuthorizations}
     */
    UserPrincipalAuthorizations: UserPrincipalAuthorizations,
    /**
     * The UserPrincipalPreferences model constructor.
     * @property {module:model/UserPrincipalPreferences}
     */
    UserPrincipalPreferences: UserPrincipalPreferences,
    /**
     * The UserPrincipalPreferencesMutualFundTaxLotMethod model constructor.
     * @property {module:model/UserPrincipalPreferencesMutualFundTaxLotMethod}
     */
    UserPrincipalPreferencesMutualFundTaxLotMethod: UserPrincipalPreferencesMutualFundTaxLotMethod,
    /**
     * The UserPrincipalQuotes model constructor.
     * @property {module:model/UserPrincipalQuotes}
     */
    UserPrincipalQuotes: UserPrincipalQuotes,
    /**
     * The UserPrincipalStreamerInfo model constructor.
     * @property {module:model/UserPrincipalStreamerInfo}
     */
    UserPrincipalStreamerInfo: UserPrincipalStreamerInfo,
    /**
     * The UserPrincipalStreamerSubscriptionKeys model constructor.
     * @property {module:model/UserPrincipalStreamerSubscriptionKeys}
     */
    UserPrincipalStreamerSubscriptionKeys: UserPrincipalStreamerSubscriptionKeys,
    /**
     * The WatchList model constructor.
     * @property {module:model/WatchList}
     */
    WatchList: WatchList,
    /**
     * The WatchListInstrument model constructor.
     * @property {module:model/WatchListInstrument}
     */
    WatchListInstrument: WatchListInstrument,
    /**
     * The WatchListRequest model constructor.
     * @property {module:model/WatchListRequest}
     */
    WatchListRequest: WatchListRequest,
    /**
     * The WatchListRequestInstrument model constructor.
     * @property {module:model/WatchListRequestInstrument}
     */
    WatchListRequestInstrument: WatchListRequestInstrument,
    /**
     * The WatchListRequestWatchlistItems model constructor.
     * @property {module:model/WatchListRequestWatchlistItems}
     */
    WatchListRequestWatchlistItems: WatchListRequestWatchlistItems,
    /**
     * The WatchListResponse model constructor.
     * @property {module:model/WatchListResponse}
     */
    WatchListResponse: WatchListResponse,
    /**
     * The WatchListWatchlistItems model constructor.
     * @property {module:model/WatchListWatchlistItems}
     */
    WatchListWatchlistItems: WatchListWatchlistItems,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The InstrumentsApi service constructor.
     * @property {module:api/InstrumentsApi}
     */
    InstrumentsApi: InstrumentsApi,
    /**
     * The MarketHoursApi service constructor.
     * @property {module:api/MarketHoursApi}
     */
    MarketHoursApi: MarketHoursApi,
    /**
     * The MoversApi service constructor.
     * @property {module:api/MoversApi}
     */
    MoversApi: MoversApi,
    /**
     * The OptionChainsApi service constructor.
     * @property {module:api/OptionChainsApi}
     */
    OptionChainsApi: OptionChainsApi,
    /**
     * The OrdersApi service constructor.
     * @property {module:api/OrdersApi}
     */
    OrdersApi: OrdersApi,
    /**
     * The PriceHistoryApi service constructor.
     * @property {module:api/PriceHistoryApi}
     */
    PriceHistoryApi: PriceHistoryApi,
    /**
     * The QuotesApi service constructor.
     * @property {module:api/QuotesApi}
     */
    QuotesApi: QuotesApi,
    /**
     * The SavedOrdersApi service constructor.
     * @property {module:api/SavedOrdersApi}
     */
    SavedOrdersApi: SavedOrdersApi,
    /**
     * The TransactionsApi service constructor.
     * @property {module:api/TransactionsApi}
     */
    TransactionsApi: TransactionsApi,
    /**
     * The UserInfoPreferencesApi service constructor.
     * @property {module:api/UserInfoPreferencesApi}
     */
    UserInfoPreferencesApi: UserInfoPreferencesApi,
    /**
     * The WatchlistApi service constructor.
     * @property {module:api/WatchlistApi}
     */
    WatchlistApi: WatchlistApi
  };

  return exports;
}));
