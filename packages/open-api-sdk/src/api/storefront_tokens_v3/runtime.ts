/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Token
 * Get and manage tokens used to authenticate cross-origin requests to the [GraphQL Storefront API](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview).  - [Authentication](#authentication) - [API tokens](#api-tokens) - [Customer impersonation tokens](#customer-impersonation-tokens) - [Revoking tokens](#revoking-tokens) - [Additional information](#additional-information)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/channels Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### [OAuth scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#oauth-scopes)  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Storefront API Customer Impersonation Tokens | manage     | `store_storefront_api_customer_impersonation` | | Storefront API Tokens                        | manage     | `store_storefront_api`                        |  ## [API tokens](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/createtoken)  Generate tokens (JWT) for authenticating cross-origin requests to the [GraphQL Storefront API](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview). To [create a token](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/createtoken), send a `POST` request to `/stores/{{STORE_HASH}}/v3/storefront/api-token`.  ```http POST https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/storefront/api-token X-Auth-Token: {{ACCESS_TOKEN}} Content-Type: application/json Accept: application/json  {   \"channel_id\": 1,   \"expires_at\": 1602288000,   \"allowed_cors_origins\":      [\"https://store.example.com\"]    } ```  |Property|Type|Description| |-|-|-| |`channel_id`|int| Must be a valid channel ID on the store (required) | |`expires_at`|int| Unix timestamp (required) | |`allowed_cors_origins`|array[str]| Allowed origins for cross origin requests (required) |  [![Open in Request Runner](https://storage.googleapis.com/bigcommerce-production-dev-center/images/Open-Request-Runner.svg)](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/createtoken#requestrunner)    [**Response:**](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/createtoken#responses)  ```json {   \"token\":\"...eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9...\",   \"meta\": {     // ...   } } ```    ## [Customer impersonation tokens](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/customer-impersonation-token/createtokenwithcustomerimpersonation)  Generate tokens for use in server-to-server requests to the [GraphQL Storefront API](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview#customer-impersonation-tokens). To [create a customer impersonation token](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/customer-impersonation-token/createtokenwithcustomerimpersonation), send a `POST` request to `/v3/storefront/api-token-customer-impersonation`.  ```http POST https://api.bigcommerce.com/stores/{STORE_HASH}/v3/storefront/api-token-customer-impersonation x-Auth-Token: {{ACCESS_TOKEN}} X-Bc-Customer-Id: {{CUSTOMER_ID}} ```  [**Response:**](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/customer-impersonation-token/createtokenwithcustomerimpersonation#responses)  ```json {   \"data\":   {     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"   }   \"meta\": {} } ```  Customer impersonation token authenticated requests made to the GraphQL API receive store information from the perspective of the customer with the ID specified in the `X-Bc-Customer-Id` header sent with the GraphQL `POST` request. Pricing, product availability, customer account, and customer details will be reflected. Consider this sample request using a [customer impersonation token](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/customer-impersonation-token/createtokenwithcustomerimpersonation) to run a request in the context of customer ID `123`.  ```http POST https://store.example.com/graphql Authorization: Bearer {{CUSTOMER_IMPERSONATION_TOKEN}} X-Bc-Customer-Id: 123  {     \"query\": \"query CustomerInformation {\\n  customer {\\n    firstName\\n    lastName\\n    email\\n  }\\n}\" } ```  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--warning\"> <div class=\"HubBlock-content\">  > ### Note > * Customer impersonation tokens should **never** be exposed publicly, for example, to JavaScript or HTML. These tokens should not be used for frontend requests. > * Unlike normal GraphQL API tokens, they are sensitive and should be treated like secrets, just as you might treat an OAuth token. > * Attempts to run requests using these tokens from a web browser will be rejected.  </div> </div> </div>  ## [Revoking tokens](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/revoketoken) To [revoke a token](https://developer.bigcommerce.com/api-reference/cart-checkout/storefront-api-token/api-token/revoketoken), send a `DELETE` request to `/v3/storefront/api-token`.  ```http DELETE /stores/{{STORE_HASH}}/v3/storefront/api-token-customer-impersonation host: api.bigcommerce.com x-Auth-Token: {{ACCESS_TOKEN}} Sf-Api-Token: {{CUSTOMER_ID}} ```  ## Additional information  * [GraphQL API Overview](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export const BASE_PATH = "https://api.bigcommerce.com/stores//v3".replace(/\/+$/, "");

const isBlob = (value: any) => typeof Blob !== 'undefined' && value instanceof Blob;

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {

    private middleware: Middleware[];

    constructor(protected configuration = new Configuration()) {
        this.middleware = configuration.middleware;
    }

    withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
        const next = this.clone<T>();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }

    withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware<T>(...middlewares);
    }

    withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware<T>(...middlewares);
    }

    protected async request(context: RequestOpts, initOverrides?: RequestInit): Promise<Response> {
        const { url, init } = this.createFetchParams(context, initOverrides);
        const response = await this.fetchApi(url, init);
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        throw response;
    }

    private createFetchParams(context: RequestOpts, initOverrides?: RequestInit) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }
        const body = ((typeof FormData !== "undefined" && context.body instanceof FormData) || context.body instanceof URLSearchParams || isBlob(context.body))
        ? context.body
        : JSON.stringify(context.body);

        const headers = Object.assign({}, this.configuration.headers, context.headers);
        const init = {
            method: context.method,
            headers: headers,
            body,
            credentials: this.configuration.credentials,
            ...initOverrides
        };
        return { url, init };
    }

    private fetchApi = async (url: string, init: RequestInit) => {
        let fetchParams = { url, init };
        for (const middleware of this.middleware) {
            if (middleware.pre) {
                fetchParams = await middleware.pre({
                    fetch: this.fetchApi,
                    ...fetchParams,
                }) || fetchParams;
            }
        }
        let response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
        for (const middleware of this.middleware) {
            if (middleware.post) {
                response = await middleware.post({
                    fetch: this.fetchApi,
                    url: fetchParams.url,
                    init: fetchParams.init,
                    response: response.clone(),
                }) || response;
            }
        }
        return response;
    }

    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    private clone<T extends BaseAPI>(this: T): T {
        const constructor = this.constructor as any;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
};

export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

export type FetchAPI = GlobalFetch['fetch'];

export interface ConfigurationParameters {
    basePath?: string; // override base path
    fetchApi?: FetchAPI; // override for fetch implementation
    middleware?: Middleware[]; // middleware to apply before/after fetch requests
    queryParamsStringify?: (params: HTTPQuery) => string; // stringify function for query strings
    username?: string; // parameter for basic security
    password?: string; // parameter for basic security
    apiKey?: string | ((name: string) => string); // parameter for apiKey security
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>); // parameter for oauth2 security
    headers?: HTTPHeaders; //header params we want to use on every request
    credentials?: RequestCredentials; //value for the credentials param we want to use on each request
}

export class Configuration {
    constructor(private configuration: ConfigurationParameters = {}) {}

    get basePath(): string {
        return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
    }

    get fetchApi(): FetchAPI {
        return this.configuration.fetchApi;
    }

    get middleware(): Middleware[] {
        return this.configuration.middleware || [];
    }

    get queryParamsStringify(): (params: HTTPQuery) => string {
        return this.configuration.queryParamsStringify || querystring;
    }

    get username(): string | undefined {
        return this.configuration.username;
    }

    get password(): string | undefined {
        return this.configuration.password;
    }

    get apiKey(): ((name: string) => string) | undefined {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }

    get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : async () => accessToken;
        }
        return undefined;
    }

    get headers(): HTTPHeaders | undefined {
        return this.configuration.headers;
    }

    get credentials(): RequestCredentials | undefined {
        return this.configuration.credentials;
    }
}

export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = { [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | HTTPQuery };
export type HTTPBody = Json | FormData | URLSearchParams;
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';

export interface FetchParams {
    url: string;
    init: RequestInit;
}

export interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
}

export function exists(json: any, key: string) {
    const value = json[key];
    return value !== null && value !== undefined;
}

export function querystring(params: HTTPQuery, prefix: string = ''): string {
    return Object.keys(params)
        .map((key) => {
            const fullKey = prefix + (prefix.length ? `[${key}]` : key);
            const value = params[key];
            if (value instanceof Array) {
                const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
                    .join(`&${encodeURIComponent(fullKey)}=`);
                return `${encodeURIComponent(fullKey)}=${multiValue}`;
            }
            if (value instanceof Date) {
                return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
            }
            if (value instanceof Object) {
                return querystring(value as HTTPQuery, fullKey);
            }
            return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
        })
        .filter(part => part.length > 0)
        .join('&');
}

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}

export function canConsumeForm(consumes: Consume[]): boolean {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}

export interface Consume {
    contentType: string
}

export interface RequestContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
}

export interface ResponseContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    response: Response;
}

export interface Middleware {
    pre?(context: RequestContext): Promise<FetchParams | void>;
    post?(context: ResponseContext): Promise<Response | void>;
}

export interface ApiResponse<T> {
    raw: Response;
    value(): Promise<T>;
}

export interface ResponseTransformer<T> {
    (json: any): T;
}

export class JSONApiResponse<T> {
    constructor(public raw: Response, private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue) {}

    async value(): Promise<T> {
        return this.transformer(await this.raw.json());
    }
}

export class VoidApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<void> {
        return undefined;
    }
}

export class BlobApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<Blob> {
        return await this.raw.blob();
    };
}

export class TextApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<string> {
        return await this.raw.text();
    };
}
