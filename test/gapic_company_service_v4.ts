// Copyright 2021 Google LLC
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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as companyserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v4.CompanyServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      companyserviceModule.v4.CompanyServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      companyserviceModule.v4.CompanyServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = companyserviceModule.v4.CompanyServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new companyserviceModule.v4.CompanyServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new companyserviceModule.v4.CompanyServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new companyserviceModule.v4.CompanyServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.companyServiceStub, undefined);
    await client.initialize();
    assert(client.companyServiceStub);
  });

  it('has close method', () => {
    const client = new companyserviceModule.v4.CompanyServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new companyserviceModule.v4.CompanyServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new companyserviceModule.v4.CompanyServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('createCompany', () => {
    it('invokes createCompany without error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.CreateCompanyRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.talent.v4.Company()
      );
      client.innerApiCalls.createCompany = stubSimpleCall(expectedResponse);
      const [response] = await client.createCompany(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createCompany without error using callback', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.CreateCompanyRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.talent.v4.Company()
      );
      client.innerApiCalls.createCompany = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.createCompany(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.talent.v4.ICompany | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createCompany with error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.CreateCompanyRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createCompany = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createCompany(request), expectedError);
      assert(
        (client.innerApiCalls.createCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('getCompany', () => {
    it('invokes getCompany without error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.GetCompanyRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.talent.v4.Company()
      );
      client.innerApiCalls.getCompany = stubSimpleCall(expectedResponse);
      const [response] = await client.getCompany(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getCompany without error using callback', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.GetCompanyRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.talent.v4.Company()
      );
      client.innerApiCalls.getCompany = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.getCompany(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.talent.v4.ICompany | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getCompany with error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.GetCompanyRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getCompany = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getCompany(request), expectedError);
      assert(
        (client.innerApiCalls.getCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('updateCompany', () => {
    it('invokes updateCompany without error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.UpdateCompanyRequest()
      );
      request.company = {};
      request.company.name = '';
      const expectedHeaderRequestParams = 'company.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.talent.v4.Company()
      );
      client.innerApiCalls.updateCompany = stubSimpleCall(expectedResponse);
      const [response] = await client.updateCompany(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes updateCompany without error using callback', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.UpdateCompanyRequest()
      );
      request.company = {};
      request.company.name = '';
      const expectedHeaderRequestParams = 'company.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.talent.v4.Company()
      );
      client.innerApiCalls.updateCompany = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.updateCompany(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.talent.v4.ICompany | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes updateCompany with error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.UpdateCompanyRequest()
      );
      request.company = {};
      request.company.name = '';
      const expectedHeaderRequestParams = 'company.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.updateCompany = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.updateCompany(request), expectedError);
      assert(
        (client.innerApiCalls.updateCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('deleteCompany', () => {
    it('invokes deleteCompany without error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.DeleteCompanyRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteCompany = stubSimpleCall(expectedResponse);
      const [response] = await client.deleteCompany(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteCompany without error using callback', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.DeleteCompanyRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteCompany = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.deleteCompany(
          request,
          (
            err?: Error | null,
            result?: protos.google.protobuf.IEmpty | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes deleteCompany with error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.DeleteCompanyRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteCompany = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.deleteCompany(request), expectedError);
      assert(
        (client.innerApiCalls.deleteCompany as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('listCompanies', () => {
    it('invokes listCompanies without error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.ListCompaniesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
      ];
      client.innerApiCalls.listCompanies = stubSimpleCall(expectedResponse);
      const [response] = await client.listCompanies(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listCompanies as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listCompanies without error using callback', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.ListCompaniesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
      ];
      client.innerApiCalls.listCompanies = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.listCompanies(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.talent.v4.ICompany[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listCompanies as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listCompanies with error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.ListCompaniesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listCompanies = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listCompanies(request), expectedError);
      assert(
        (client.innerApiCalls.listCompanies as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listCompaniesStream without error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.ListCompaniesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
      ];
      client.descriptors.page.listCompanies.createStream = stubPageStreamingCall(
        expectedResponse
      );
      const stream = client.listCompaniesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.talent.v4.Company[] = [];
        stream.on('data', (response: protos.google.cloud.talent.v4.Company) => {
          responses.push(response);
        });
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listCompanies.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listCompanies, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listCompanies
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('invokes listCompaniesStream with error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.ListCompaniesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listCompanies.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listCompaniesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.talent.v4.Company[] = [];
        stream.on('data', (response: protos.google.cloud.talent.v4.Company) => {
          responses.push(response);
        });
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listCompanies.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listCompanies, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listCompanies
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listCompanies without error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.ListCompaniesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
        generateSampleMessage(new protos.google.cloud.talent.v4.Company()),
      ];
      client.descriptors.page.listCompanies.asyncIterate = stubAsyncIterationCall(
        expectedResponse
      );
      const responses: protos.google.cloud.talent.v4.ICompany[] = [];
      const iterable = client.listCompaniesAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.listCompanies
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listCompanies
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listCompanies with error', async () => {
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.talent.v4.ListCompaniesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listCompanies.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listCompaniesAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.talent.v4.ICompany[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.listCompanies
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listCompanies
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('company', () => {
      const fakePath = '/rendered/path/company';
      const expectedParameters = {
        project: 'projectValue',
        tenant: 'tenantValue',
        company: 'companyValue',
      };
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.companyPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.companyPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('companyPath', () => {
        const result = client.companyPath(
          'projectValue',
          'tenantValue',
          'companyValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.companyPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromCompanyName', () => {
        const result = client.matchProjectFromCompanyName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.companyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTenantFromCompanyName', () => {
        const result = client.matchTenantFromCompanyName(fakePath);
        assert.strictEqual(result, 'tenantValue');
        assert(
          (client.pathTemplates.companyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCompanyFromCompanyName', () => {
        const result = client.matchCompanyFromCompanyName(fakePath);
        assert.strictEqual(result, 'companyValue');
        assert(
          (client.pathTemplates.companyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('job', () => {
      const fakePath = '/rendered/path/job';
      const expectedParameters = {
        project: 'projectValue',
        tenant: 'tenantValue',
        job: 'jobValue',
      };
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.jobPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.jobPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('jobPath', () => {
        const result = client.jobPath(
          'projectValue',
          'tenantValue',
          'jobValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.jobPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromJobName', () => {
        const result = client.matchProjectFromJobName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.jobPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTenantFromJobName', () => {
        const result = client.matchTenantFromJobName(fakePath);
        assert.strictEqual(result, 'tenantValue');
        assert(
          (client.pathTemplates.jobPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchJobFromJobName', () => {
        const result = client.matchJobFromJobName(fakePath);
        assert.strictEqual(result, 'jobValue');
        assert(
          (client.pathTemplates.jobPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('tenant', () => {
      const fakePath = '/rendered/path/tenant';
      const expectedParameters = {
        project: 'projectValue',
        tenant: 'tenantValue',
      };
      const client = new companyserviceModule.v4.CompanyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.tenantPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.tenantPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('tenantPath', () => {
        const result = client.tenantPath('projectValue', 'tenantValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.tenantPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromTenantName', () => {
        const result = client.matchProjectFromTenantName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.tenantPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTenantFromTenantName', () => {
        const result = client.matchTenantFromTenantName(fakePath);
        assert.strictEqual(result, 'tenantValue');
        assert(
          (client.pathTemplates.tenantPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
