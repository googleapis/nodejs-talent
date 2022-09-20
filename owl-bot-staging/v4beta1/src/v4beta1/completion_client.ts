// Copyright 2022 Google LLC
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

/* global window */
import type * as gax from 'google-gax';
import type {Callback, CallOptions, Descriptors, ClientOptions, GrpcClientOptions} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v4beta1/completion_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
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
  private _providedCustomServicePath: boolean;
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
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  operationsClient: gax.OperationsClient;
  completionStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of CompletionClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
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
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new CompletionClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof CompletionClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest' ) {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      projectPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}'
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

    const protoFilesRoot = this._gaxModule.protobuf.Root.fromJSON(jsonProtos);
    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    const lroOptions: GrpcClientOptions = {
      auth: this.auth,
      grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined
    };
    if (opts.fallback === 'rest') {
      lroOptions.protoJson = protoFilesRoot;
      lroOptions.httpRules = [{selector: 'google.longrunning.Operations.GetOperation',get: '/v4beta1/{name=projects/*/operations/*}',}];
    }
    this.operationsClient = this._gaxModule.lro(lroOptions).operationsClient(opts);

    this.descriptors.longrunning = {
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.talent.v4beta1.Completion', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
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
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.talent.v4beta1.Completion') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.talent.v4beta1.Completion,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const completionStubMethods =
        ['completeQuery'];
    for (const methodName of completionStubMethods) {
      const callPromise = this.completionStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.completionStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'jobs.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'jobs.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/jobs'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
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
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v4beta1/completion.complete_query.js</caption>
 * region_tag:jobs_v4beta1_generated_Completion_CompleteQuery_async
 */
  completeQuery(
      request?: protos.google.cloud.talent.v4beta1.ICompleteQueryRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
        protos.google.cloud.talent.v4beta1.ICompleteQueryRequest|undefined, {}|undefined
      ]>;
  completeQuery(
      request: protos.google.cloud.talent.v4beta1.ICompleteQueryRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
          protos.google.cloud.talent.v4beta1.ICompleteQueryRequest|null|undefined,
          {}|null|undefined>): void;
  completeQuery(
      request: protos.google.cloud.talent.v4beta1.ICompleteQueryRequest,
      callback: Callback<
          protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
          protos.google.cloud.talent.v4beta1.ICompleteQueryRequest|null|undefined,
          {}|null|undefined>): void;
  completeQuery(
      request?: protos.google.cloud.talent.v4beta1.ICompleteQueryRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
          protos.google.cloud.talent.v4beta1.ICompleteQueryRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
          protos.google.cloud.talent.v4beta1.ICompleteQueryRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.talent.v4beta1.ICompleteQueryResponse,
        protos.google.cloud.talent.v4beta1.ICompleteQueryRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    this.initialize();
    return this.innerApiCalls.completeQuery(request, options, callback);
  }

/**
   * Gets the latest state of a long-running operation.  Clients can use this
   * method to poll the operation result at intervals as recommended by the API
   * service.
   *
   * @param {Object} request - The request object that will be sent.
   * @param {string} request.name - The name of the operation resource.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call,
   *   e.g, timeout, retries, paginations, etc. See [gax.CallOptions]{@link
   *   https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the
   *   details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing
   * [google.longrunning.Operation]{@link
   * external:"google.longrunning.Operation"}.
   * @return {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing
   * [google.longrunning.Operation]{@link
   * external:"google.longrunning.Operation"}. The promise has a method named
   * "cancel" which cancels the ongoing API call.
   *
   * @example
   * ```
   * const client = longrunning.operationsClient();
   * const name = '';
   * const [response] = await client.getOperation({name});
   * // doThingsWith(response)
   * ```
   */
  getOperation(
    request: protos.google.longrunning.GetOperationRequest,
    options?:
      | gax.CallOptions
      | Callback<
          protos.google.longrunning.Operation,
          protos.google.longrunning.GetOperationRequest,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.longrunning.Operation,
      protos.google.longrunning.GetOperationRequest,
      {} | null | undefined
    >
  ): Promise<[protos.google.longrunning.Operation]> {
    return this.operationsClient.getOperation(request, options, callback);
  }
  /**
   * Lists operations that match the specified filter in the request. If the
   * server doesn't support this method, it returns `UNIMPLEMENTED`. Returns an iterable object.
   *
   * For-await-of syntax is used with the iterable to recursively get response element on-demand.
   *
   * @param {Object} request - The request object that will be sent.
   * @param {string} request.name - The name of the operation collection.
   * @param {string} request.filter - The standard list filter.
   * @param {number=} request.pageSize -
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call,
   *   e.g, timeout, retries, paginations, etc. See [gax.CallOptions]{@link
   *   https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the
   *   details.
   * @returns {Object}
   *   An iterable Object that conforms to @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols.
   *
   * @example
   * ```
   * const client = longrunning.operationsClient();
   * for await (const response of client.listOperationsAsync(request));
   * // doThingsWith(response)
   * ```
   */
  listOperationsAsync(
    request: protos.google.longrunning.ListOperationsRequest,
    options?: gax.CallOptions
  ): AsyncIterable<protos.google.longrunning.ListOperationsResponse> {
    return this.operationsClient.listOperationsAsync(request, options);
  }
  /**
   * Starts asynchronous cancellation on a long-running operation.  The server
   * makes a best effort to cancel the operation, but success is not
   * guaranteed.  If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
   * {@link Operations.GetOperation} or
   * other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation,
   * the operation is not deleted; instead, it becomes an operation with
   * an {@link Operation.error} value with a {@link google.rpc.Status.code} of
   * 1, corresponding to `Code.CANCELLED`.
   *
   * @param {Object} request - The request object that will be sent.
   * @param {string} request.name - The name of the operation resource to be cancelled.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call,
   * e.g, timeout, retries, paginations, etc. See [gax.CallOptions]{@link
   * https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the
   * details.
   * @param {function(?Error)=} callback
   *   The function which will be called with the result of the API call.
   * @return {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API
   * call.
   *
   * @example
   * ```
   * const client = longrunning.operationsClient();
   * await client.cancelOperation({name: ''});
   * ```
   */
   cancelOperation(
    request: protos.google.longrunning.CancelOperationRequest,
    options?:
      | gax.CallOptions
      | Callback<
          protos.google.protobuf.Empty,
          protos.google.longrunning.CancelOperationRequest,
          {} | undefined | null
        >,
    callback?: Callback<
      protos.google.longrunning.CancelOperationRequest,
      protos.google.protobuf.Empty,
      {} | undefined | null
    >
  ): Promise<protos.google.protobuf.Empty> {
    return this.operationsClient.cancelOperation(request, options, callback);
  }

  /**
   * Deletes a long-running operation. This method indicates that the client is
   * no longer interested in the operation result. It does not cancel the
   * operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   *
   * @param {Object} request - The request object that will be sent.
   * @param {string} request.name - The name of the operation resource to be deleted.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call,
   * e.g, timeout, retries, paginations, etc. See [gax.CallOptions]{@link
   * https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the
   * details.
   * @param {function(?Error)=} callback
   *   The function which will be called with the result of the API call.
   * @return {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API
   * call.
   *
   * @example
   * ```
   * const client = longrunning.operationsClient();
   * await client.deleteOperation({name: ''});
   * ```
   */
  deleteOperation(
    request: protos.google.longrunning.DeleteOperationRequest,
    options?:
      | gax.CallOptions
      | Callback<
          protos.google.protobuf.Empty,
          protos.google.longrunning.DeleteOperationRequest,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.protobuf.Empty,
      protos.google.longrunning.DeleteOperationRequest,
      {} | null | undefined
    >
  ): Promise<protos.google.protobuf.Empty> {
    return this.operationsClient.deleteOperation(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  projectPath(project:string) {
    return this.pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Parse the project from Project resource.
   *
   * @param {string} projectName
   *   A fully-qualified path representing Project resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectName(projectName: string) {
    return this.pathTemplates.projectPathTemplate.match(projectName).project;
  }

  /**
   * Return a fully-qualified projectCompany resource name string.
   *
   * @param {string} project
   * @param {string} company
   * @returns {string} Resource name string.
   */
  projectCompanyPath(project:string,company:string) {
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
    return this.pathTemplates.projectCompanyPathTemplate.match(projectCompanyName).project;
  }

  /**
   * Parse the company from ProjectCompany resource.
   *
   * @param {string} projectCompanyName
   *   A fully-qualified path representing project_company resource.
   * @returns {string} A string representing the company.
   */
  matchCompanyFromProjectCompanyName(projectCompanyName: string) {
    return this.pathTemplates.projectCompanyPathTemplate.match(projectCompanyName).company;
  }

  /**
   * Return a fully-qualified projectJob resource name string.
   *
   * @param {string} project
   * @param {string} job
   * @returns {string} Resource name string.
   */
  projectJobPath(project:string,job:string) {
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
    return this.pathTemplates.projectJobPathTemplate.match(projectJobName).project;
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
  projectTenantCompanyPath(project:string,tenant:string,company:string) {
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
    return this.pathTemplates.projectTenantCompanyPathTemplate.match(projectTenantCompanyName).project;
  }

  /**
   * Parse the tenant from ProjectTenantCompany resource.
   *
   * @param {string} projectTenantCompanyName
   *   A fully-qualified path representing project_tenant_company resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromProjectTenantCompanyName(projectTenantCompanyName: string) {
    return this.pathTemplates.projectTenantCompanyPathTemplate.match(projectTenantCompanyName).tenant;
  }

  /**
   * Parse the company from ProjectTenantCompany resource.
   *
   * @param {string} projectTenantCompanyName
   *   A fully-qualified path representing project_tenant_company resource.
   * @returns {string} A string representing the company.
   */
  matchCompanyFromProjectTenantCompanyName(projectTenantCompanyName: string) {
    return this.pathTemplates.projectTenantCompanyPathTemplate.match(projectTenantCompanyName).company;
  }

  /**
   * Return a fully-qualified projectTenantJob resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @param {string} job
   * @returns {string} Resource name string.
   */
  projectTenantJobPath(project:string,tenant:string,job:string) {
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
    return this.pathTemplates.projectTenantJobPathTemplate.match(projectTenantJobName).project;
  }

  /**
   * Parse the tenant from ProjectTenantJob resource.
   *
   * @param {string} projectTenantJobName
   *   A fully-qualified path representing project_tenant_job resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromProjectTenantJobName(projectTenantJobName: string) {
    return this.pathTemplates.projectTenantJobPathTemplate.match(projectTenantJobName).tenant;
  }

  /**
   * Parse the job from ProjectTenantJob resource.
   *
   * @param {string} projectTenantJobName
   *   A fully-qualified path representing project_tenant_job resource.
   * @returns {string} A string representing the job.
   */
  matchJobFromProjectTenantJobName(projectTenantJobName: string) {
    return this.pathTemplates.projectTenantJobPathTemplate.match(projectTenantJobName).job;
  }

  /**
   * Return a fully-qualified tenant resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @returns {string} Resource name string.
   */
  tenantPath(project:string,tenant:string) {
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
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.completionStub && !this._terminated) {
      return this.completionStub.then(stub => {
        this._terminated = true;
        stub.close();
        this.operationsClient.close();
      });
    }
    return Promise.resolve();
  }
}
