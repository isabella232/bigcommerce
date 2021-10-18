/* tslint:disable */
/* eslint-disable */
/**
 * Email Templates
 * Manage Handlebars-based email templates globally and create channel-specific overrides.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    EmailTemplate,
    EmailTemplateFromJSON,
    EmailTemplateToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
} from '../models';

export interface DeleteEmailTemplateOverrideRequest {
    templateName: string;
    channelId: number;
}

export interface GetEmailTemplateRequest {
    templateName: string;
    channelId?: number;
}

export interface GetEmailTemplatesRequest {
    channelId?: number;
}

export interface UpdateEmailTemplateRequest {
    templateName: string;
    channelId?: number;
    emailTemplate?: EmailTemplate;
}

/**
 * 
 */
export class EmailTemplatesApi extends runtime.BaseAPI {

    /**
     * Removes a channel-specific email template override.
     * Delete Email Template Override
     */
    async deleteEmailTemplateOverrideRaw(requestParameters: DeleteEmailTemplateOverrideRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.templateName === null || requestParameters.templateName === undefined) {
            throw new runtime.RequiredError('templateName','Required parameter requestParameters.templateName was null or undefined when calling deleteEmailTemplateOverride.');
        }

        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling deleteEmailTemplateOverride.');
        }

        const queryParameters: any = {};

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/marketing/email-templates/{template-name}`.replace(`{${"template-name"}}`, encodeURIComponent(String(requestParameters.templateName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes a channel-specific email template override.
     * Delete Email Template Override
     */
    async deleteEmailTemplateOverride(requestParameters: DeleteEmailTemplateOverrideRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteEmailTemplateOverrideRaw(requestParameters, initOverrides);
    }

    /**
     * Get a single global email template or a channel-specific email template override.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  >### Note >`/marketing/email-templates` endpoints only work after opting into the new email management experience from your store\'s control panel. You can opt-in by visiting [Email Templates](https://login.bigcommerce.com/deep-links/manage/marketing/email-templates). If you have already opted in, visiting the [Email Templates](https://login.bigcommerce.com/deep-links/manage/marketing/email-templates) page will return a `404` error, and you will be able to access the new [Transactional Emails](https://login.bigcommerce.com/deep-links/manage/transactional-emails) page.  </div> </div> </div>
     * Get an Email Template
     */
    async getEmailTemplateRaw(requestParameters: GetEmailTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.templateName === null || requestParameters.templateName === undefined) {
            throw new runtime.RequiredError('templateName','Required parameter requestParameters.templateName was null or undefined when calling getEmailTemplate.');
        }

        const queryParameters: any = {};

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/marketing/email-templates/{template-name}`.replace(`{${"template-name"}}`, encodeURIComponent(String(requestParameters.templateName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Get a single global email template or a channel-specific email template override.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  >### Note >`/marketing/email-templates` endpoints only work after opting into the new email management experience from your store\'s control panel. You can opt-in by visiting [Email Templates](https://login.bigcommerce.com/deep-links/manage/marketing/email-templates). If you have already opted in, visiting the [Email Templates](https://login.bigcommerce.com/deep-links/manage/marketing/email-templates) page will return a `404` error, and you will be able to access the new [Transactional Emails](https://login.bigcommerce.com/deep-links/manage/transactional-emails) page.  </div> </div> </div>
     * Get an Email Template
     */
    async getEmailTemplate(requestParameters: GetEmailTemplateRequest, initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.getEmailTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of email templates.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  >### Note >`/marketing/email-templates` endpoints only work after opting into the new email management experience from your store\'s control panel. You can opt-in by visiting Email Templates. If you have already opted in, visiting the Email Templates page will return a `404` error, and you will be able to access the new Transactional Emails page. </div> </div> </div>
     * Get Email Templates
     */
    async getEmailTemplatesRaw(requestParameters: GetEmailTemplatesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/marketing/email-templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Get a list of email templates.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  >### Note >`/marketing/email-templates` endpoints only work after opting into the new email management experience from your store\'s control panel. You can opt-in by visiting Email Templates. If you have already opted in, visiting the Email Templates page will return a `404` error, and you will be able to access the new Transactional Emails page. </div> </div> </div>
     * Get Email Templates
     */
    async getEmailTemplates(requestParameters: GetEmailTemplatesRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.getEmailTemplatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a global template or create a channel-specific email template override.
     * Update a Template
     */
    async updateEmailTemplateRaw(requestParameters: UpdateEmailTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.templateName === null || requestParameters.templateName === undefined) {
            throw new runtime.RequiredError('templateName','Required parameter requestParameters.templateName was null or undefined when calling updateEmailTemplate.');
        }

        const queryParameters: any = {};

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/marketing/email-templates/{template-name}`.replace(`{${"template-name"}}`, encodeURIComponent(String(requestParameters.templateName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EmailTemplateToJSON(requestParameters.emailTemplate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Update a global template or create a channel-specific email template override.
     * Update a Template
     */
    async updateEmailTemplate(requestParameters: UpdateEmailTemplateRequest, initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.updateEmailTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}