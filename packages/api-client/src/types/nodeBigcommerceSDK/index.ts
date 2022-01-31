import { MiddlewareSDKSettingsConfig } from '..';

/**
 * Type alias for REST API request types.
 */
type REQUEST_TYPE = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * The definition of types for BigCommerce SDK.
 */
export interface NodeBigcommerceSDK {
  /**
   * SDK Settings provided in the `middleware.config.js` file.
   */
  config: MiddlewareSDKSettingsConfig;

  /**
   * SDK client HTTP method for making GET requests.
   */
  get<RESPONSE_TYPE>(path: string): Promise<RESPONSE_TYPE>;

  /**
   * SDK client HTTP method for making POST requests.
   */
  post<RESPONSE_TYPE, PARAM_TYPE>(
    path: string,
    param: PARAM_TYPE
  ): Promise<RESPONSE_TYPE>;

  /**
   * SDK client HTTP method for making PUT requests.
   */
  put<RESPONSE_TYPE, PARAM_TYPE>(
    path: string,
    param: PARAM_TYPE
  ): Promise<RESPONSE_TYPE>;

  /**
   * SDK client HTTP method for making DELETE requests.
   */
  delete<RESPONSE_TYPE>(path: string): Promise<RESPONSE_TYPE>;

  /**
   * SDK client factory method for creating HTTP requests.
   */
  request<RESPONSE_TYPE>(
    type: REQUEST_TYPE,
    path: string,
    data
  ): Promise<RESPONSE_TYPE>;
}
