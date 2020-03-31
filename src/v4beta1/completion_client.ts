// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';
import * as path from 'path';

import * as protos from '../../protos/protos';
import * as gapicConfig from './completion_client_config.json';

const version = require('../../../package.json').version;

/**
 *  A service handles auto completion.
 * @class
 * @memberof v4beta1
 */
export class CompletionClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  completionStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of CompletionClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this.constructor as typeof CompletionClient;
    const servicePath =
      opts && opts.servicePath
        ? opts.servicePath
        : opts && opts.apiEndpoint
        ? opts.apiEndpoint
        : staticMembers.servicePath;
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.clientConfig = opts.clientConfig || {};

    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      opts.fallback = true;
    }
    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    this._gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof CompletionClient).scopes;
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback
        ? // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        : nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      applicationPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/profiles/{profile}/applications/{application}'
      ),
      profilePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/profiles/{profile}'
      ),
      projectCompanyPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/companies/{company}'
      ),
      projectJobPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/jobs/{job}'
      ),
      projectTenantCompanyPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/companies/{company}'
      ),
      projectTenantJobPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/jobs/{job}'
      ),
      tenantPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.talent.v4beta1.Completion',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.completionStub) {
      return this.completionStub;
    }

    // Put together the "service stub" for
    // google.cloud.talent.v4beta1.Completion.
    this.completionStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.talent.v4beta1.Completion'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.talent.v4beta1.Completion,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const completionStubMethods = ['completeQuery'];
    for (const methodName of completionStubMethods) {
      const callPromise = this.completionStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        this.descriptors.page[methodName] ||
          this.descriptors.stream[methodName] ||
          this.descriptors.longrunning[methodName]
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.completionStub;
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'jobs.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'jobs.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/jobs',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  completeQuery(
    request: protos.google.cloud.talent.v4beta1.ICompleteQueryRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
      protos.google.cloud.talent.v4beta1.ICompleteQueryRequest | undefined,
      {} | undefined
    ]
  >;
  completeQuery(
    request: protos.google.cloud.talent.v4beta1.ICompleteQueryRequest,
    options: gax.CallOptions,
    callback: Callback<
      protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
      | protos.google.cloud.talent.v4beta1.ICompleteQueryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  completeQuery(
    request: protos.google.cloud.talent.v4beta1.ICompleteQueryRequest,
    callback: Callback<
      protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
      | protos.google.cloud.talent.v4beta1.ICompleteQueryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Completes the specified prefix with keyword suggestions.
   * Intended for use by a job search auto-complete search box.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of tenant the completion is performed within.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/foo/tenant/bar".
   *
   *   If tenant id is unspecified, the default tenant is used, for
   *   example, "projects/foo".
   * @param {string} request.query
   *   Required. The query used to generate suggestions.
   *
   *   The maximum number of allowed characters is 255.
   * @param {string[]} request.languageCodes
   *   The list of languages of the query. This is
   *   the BCP-47 language code, such as "en-US" or "sr-Latn".
   *   For more information, see
   *   [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).
   *
   *   The maximum number of allowed characters is 255.
   * @param {number} request.pageSize
   *   Required. Completion result count.
   *
   *   The maximum allowed page size is 10.
   * @param {string} request.company
   *   If provided, restricts completion to specified company.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
   *   example, "projects/foo/tenants/bar/companies/baz".
   *
   *   If tenant id is unspecified, the default tenant is used, for
   *   example, "projects/foo".
   * @param {google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope} request.scope
   *   The scope of the completion. The defaults is {@link google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope.PUBLIC|CompletionScope.PUBLIC}.
   * @param {google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType} request.type
   *   The completion topic. The default is {@link google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType.COMBINED|CompletionType.COMBINED}.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CompleteQueryResponse]{@link google.cloud.talent.v4beta1.CompleteQueryResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  completeQuery(
    request: protos.google.cloud.talent.v4beta1.ICompleteQueryRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
          | protos.google.cloud.talent.v4beta1.ICompleteQueryRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
      | protos.google.cloud.talent.v4beta1.ICompleteQueryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
      protos.google.cloud.talent.v4beta1.ICompleteQueryRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.completeQuery(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified application resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @param {string} profile
   * @param {string} application
   * @returns {string} Resource name string.
   */
  applicationPath(
    project: string,
    tenant: string,
    profile: string,
    application: string
  ) {
    return this.pathTemplates.applicationPathTemplate.render({
      project: project,
      tenant: tenant,
      profile: profile,
      application: application,
    });
  }

  /**
   * Parse the project from Application resource.
   *
   * @param {string} applicationName
   *   A fully-qualified path representing Application resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromApplicationName(applicationName: string) {
    return this.pathTemplates.applicationPathTemplate.match(applicationName)
      .project;
  }

  /**
   * Parse the tenant from Application resource.
   *
   * @param {string} applicationName
   *   A fully-qualified path representing Application resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromApplicationName(applicationName: string) {
    return this.pathTemplates.applicationPathTemplate.match(applicationName)
      .tenant;
  }

  /**
   * Parse the profile from Application resource.
   *
   * @param {string} applicationName
   *   A fully-qualified path representing Application resource.
   * @returns {string} A string representing the profile.
   */
  matchProfileFromApplicationName(applicationName: string) {
    return this.pathTemplates.applicationPathTemplate.match(applicationName)
      .profile;
  }

  /**
   * Parse the application from Application resource.
   *
   * @param {string} applicationName
   *   A fully-qualified path representing Application resource.
   * @returns {string} A string representing the application.
   */
  matchApplicationFromApplicationName(applicationName: string) {
    return this.pathTemplates.applicationPathTemplate.match(applicationName)
      .application;
  }

  /**
   * Return a fully-qualified profile resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @param {string} profile
   * @returns {string} Resource name string.
   */
  profilePath(project: string, tenant: string, profile: string) {
    return this.pathTemplates.profilePathTemplate.render({
      project: project,
      tenant: tenant,
      profile: profile,
    });
  }

  /**
   * Parse the project from Profile resource.
   *
   * @param {string} profileName
   *   A fully-qualified path representing Profile resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProfileName(profileName: string) {
    return this.pathTemplates.profilePathTemplate.match(profileName).project;
  }

  /**
   * Parse the tenant from Profile resource.
   *
   * @param {string} profileName
   *   A fully-qualified path representing Profile resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromProfileName(profileName: string) {
    return this.pathTemplates.profilePathTemplate.match(profileName).tenant;
  }

  /**
   * Parse the profile from Profile resource.
   *
   * @param {string} profileName
   *   A fully-qualified path representing Profile resource.
   * @returns {string} A string representing the profile.
   */
  matchProfileFromProfileName(profileName: string) {
    return this.pathTemplates.profilePathTemplate.match(profileName).profile;
  }

  /**
   * Return a fully-qualified projectCompany resource name string.
   *
   * @param {string} project
   * @param {string} company
   * @returns {string} Resource name string.
   */
  projectCompanyPath(project: string, company: string) {
    return this.pathTemplates.projectCompanyPathTemplate.render({
      project: project,
      company: company,
    });
  }

  /**
   * Parse the project from ProjectCompany resource.
   *
   * @param {string} projectCompanyName
   *   A fully-qualified path representing project_company resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectCompanyName(projectCompanyName: string) {
    return this.pathTemplates.projectCompanyPathTemplate.match(
      projectCompanyName
    ).project;
  }

  /**
   * Parse the company from ProjectCompany resource.
   *
   * @param {string} projectCompanyName
   *   A fully-qualified path representing project_company resource.
   * @returns {string} A string representing the company.
   */
  matchCompanyFromProjectCompanyName(projectCompanyName: string) {
    return this.pathTemplates.projectCompanyPathTemplate.match(
      projectCompanyName
    ).company;
  }

  /**
   * Return a fully-qualified projectJob resource name string.
   *
   * @param {string} project
   * @param {string} job
   * @returns {string} Resource name string.
   */
  projectJobPath(project: string, job: string) {
    return this.pathTemplates.projectJobPathTemplate.render({
      project: project,
      job: job,
    });
  }

  /**
   * Parse the project from ProjectJob resource.
   *
   * @param {string} projectJobName
   *   A fully-qualified path representing project_job resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectJobName(projectJobName: string) {
    return this.pathTemplates.projectJobPathTemplate.match(projectJobName)
      .project;
  }

  /**
   * Parse the job from ProjectJob resource.
   *
   * @param {string} projectJobName
   *   A fully-qualified path representing project_job resource.
   * @returns {string} A string representing the job.
   */
  matchJobFromProjectJobName(projectJobName: string) {
    return this.pathTemplates.projectJobPathTemplate.match(projectJobName).job;
  }

  /**
   * Return a fully-qualified projectTenantCompany resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @param {string} company
   * @returns {string} Resource name string.
   */
  projectTenantCompanyPath(project: string, tenant: string, company: string) {
    return this.pathTemplates.projectTenantCompanyPathTemplate.render({
      project: project,
      tenant: tenant,
      company: company,
    });
  }

  /**
   * Parse the project from ProjectTenantCompany resource.
   *
   * @param {string} projectTenantCompanyName
   *   A fully-qualified path representing project_tenant_company resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectTenantCompanyName(projectTenantCompanyName: string) {
    return this.pathTemplates.projectTenantCompanyPathTemplate.match(
      projectTenantCompanyName
    ).project;
  }

  /**
   * Parse the tenant from ProjectTenantCompany resource.
   *
   * @param {string} projectTenantCompanyName
   *   A fully-qualified path representing project_tenant_company resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromProjectTenantCompanyName(projectTenantCompanyName: string) {
    return this.pathTemplates.projectTenantCompanyPathTemplate.match(
      projectTenantCompanyName
    ).tenant;
  }

  /**
   * Parse the company from ProjectTenantCompany resource.
   *
   * @param {string} projectTenantCompanyName
   *   A fully-qualified path representing project_tenant_company resource.
   * @returns {string} A string representing the company.
   */
  matchCompanyFromProjectTenantCompanyName(projectTenantCompanyName: string) {
    return this.pathTemplates.projectTenantCompanyPathTemplate.match(
      projectTenantCompanyName
    ).company;
  }

  /**
   * Return a fully-qualified projectTenantJob resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @param {string} job
   * @returns {string} Resource name string.
   */
  projectTenantJobPath(project: string, tenant: string, job: string) {
    return this.pathTemplates.projectTenantJobPathTemplate.render({
      project: project,
      tenant: tenant,
      job: job,
    });
  }

  /**
   * Parse the project from ProjectTenantJob resource.
   *
   * @param {string} projectTenantJobName
   *   A fully-qualified path representing project_tenant_job resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectTenantJobName(projectTenantJobName: string) {
    return this.pathTemplates.projectTenantJobPathTemplate.match(
      projectTenantJobName
    ).project;
  }

  /**
   * Parse the tenant from ProjectTenantJob resource.
   *
   * @param {string} projectTenantJobName
   *   A fully-qualified path representing project_tenant_job resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromProjectTenantJobName(projectTenantJobName: string) {
    return this.pathTemplates.projectTenantJobPathTemplate.match(
      projectTenantJobName
    ).tenant;
  }

  /**
   * Parse the job from ProjectTenantJob resource.
   *
   * @param {string} projectTenantJobName
   *   A fully-qualified path representing project_tenant_job resource.
   * @returns {string} A string representing the job.
   */
  matchJobFromProjectTenantJobName(projectTenantJobName: string) {
    return this.pathTemplates.projectTenantJobPathTemplate.match(
      projectTenantJobName
    ).job;
  }

  /**
   * Return a fully-qualified tenant resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @returns {string} Resource name string.
   */
  tenantPath(project: string, tenant: string) {
    return this.pathTemplates.tenantPathTemplate.render({
      project: project,
      tenant: tenant,
    });
  }

  /**
   * Parse the project from Tenant resource.
   *
   * @param {string} tenantName
   *   A fully-qualified path representing Tenant resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromTenantName(tenantName: string) {
    return this.pathTemplates.tenantPathTemplate.match(tenantName).project;
  }

  /**
   * Parse the tenant from Tenant resource.
   *
   * @param {string} tenantName
   *   A fully-qualified path representing Tenant resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromTenantName(tenantName: string) {
    return this.pathTemplates.tenantPathTemplate.match(tenantName).tenant;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.completionStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
