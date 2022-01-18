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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as eventserviceModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v4beta1.EventServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = eventserviceModule.v4beta1.EventServiceClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = eventserviceModule.v4beta1.EventServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = eventserviceModule.v4beta1.EventServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new eventserviceModule.v4beta1.EventServiceClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new eventserviceModule.v4beta1.EventServiceClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new eventserviceModule.v4beta1.EventServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.eventServiceStub, undefined);
        await client.initialize();
        assert(client.eventServiceStub);
    });

    it('has close method', () => {
        const client = new eventserviceModule.v4beta1.EventServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new eventserviceModule.v4beta1.EventServiceClient({
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
        const client = new eventserviceModule.v4beta1.EventServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
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

    describe('createClientEvent', () => {
        it('invokes createClientEvent without error', async () => {
            const client = new eventserviceModule.v4beta1.EventServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.talent.v4beta1.CreateClientEventRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.talent.v4beta1.ClientEvent());
            client.innerApiCalls.createClientEvent = stubSimpleCall(expectedResponse);
            const [response] = await client.createClientEvent(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createClientEvent as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes createClientEvent without error using callback', async () => {
            const client = new eventserviceModule.v4beta1.EventServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.talent.v4beta1.CreateClientEventRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.talent.v4beta1.ClientEvent());
            client.innerApiCalls.createClientEvent = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createClientEvent(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.talent.v4beta1.IClientEvent|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createClientEvent as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes createClientEvent with error', async () => {
            const client = new eventserviceModule.v4beta1.EventServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.talent.v4beta1.CreateClientEventRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.createClientEvent = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.createClientEvent(request), expectedError);
            assert((client.innerApiCalls.createClientEvent as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('Path templates', () => {

        describe('application', () => {
            const fakePath = "/rendered/path/application";
            const expectedParameters = {
                project: "projectValue",
                tenant: "tenantValue",
                profile: "profileValue",
                application: "applicationValue",
            };
            const client = new eventserviceModule.v4beta1.EventServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.applicationPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.applicationPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('applicationPath', () => {
                const result = client.applicationPath("projectValue", "tenantValue", "profileValue", "applicationValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.applicationPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromApplicationName', () => {
                const result = client.matchProjectFromApplicationName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.applicationPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchTenantFromApplicationName', () => {
                const result = client.matchTenantFromApplicationName(fakePath);
                assert.strictEqual(result, "tenantValue");
                assert((client.pathTemplates.applicationPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchProfileFromApplicationName', () => {
                const result = client.matchProfileFromApplicationName(fakePath);
                assert.strictEqual(result, "profileValue");
                assert((client.pathTemplates.applicationPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchApplicationFromApplicationName', () => {
                const result = client.matchApplicationFromApplicationName(fakePath);
                assert.strictEqual(result, "applicationValue");
                assert((client.pathTemplates.applicationPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('profile', () => {
            const fakePath = "/rendered/path/profile";
            const expectedParameters = {
                project: "projectValue",
                tenant: "tenantValue",
                profile: "profileValue",
            };
            const client = new eventserviceModule.v4beta1.EventServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.profilePathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.profilePathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('profilePath', () => {
                const result = client.profilePath("projectValue", "tenantValue", "profileValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.profilePathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromProfileName', () => {
                const result = client.matchProjectFromProfileName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.profilePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchTenantFromProfileName', () => {
                const result = client.matchTenantFromProfileName(fakePath);
                assert.strictEqual(result, "tenantValue");
                assert((client.pathTemplates.profilePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchProfileFromProfileName', () => {
                const result = client.matchProfileFromProfileName(fakePath);
                assert.strictEqual(result, "profileValue");
                assert((client.pathTemplates.profilePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('project', () => {
            const fakePath = "/rendered/path/project";
            const expectedParameters = {
                project: "projectValue",
            };
            const client = new eventserviceModule.v4beta1.EventServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.projectPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.projectPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('projectPath', () => {
                const result = client.projectPath("projectValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.projectPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromProjectName', () => {
                const result = client.matchProjectFromProjectName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.projectPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('projectCompany', () => {
            const fakePath = "/rendered/path/projectCompany";
            const expectedParameters = {
                project: "projectValue",
                company: "companyValue",
            };
            const client = new eventserviceModule.v4beta1.EventServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.projectCompanyPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.projectCompanyPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('projectCompanyPath', () => {
                const result = client.projectCompanyPath("projectValue", "companyValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.projectCompanyPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromProjectCompanyName', () => {
                const result = client.matchProjectFromProjectCompanyName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.projectCompanyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchCompanyFromProjectCompanyName', () => {
                const result = client.matchCompanyFromProjectCompanyName(fakePath);
                assert.strictEqual(result, "companyValue");
                assert((client.pathTemplates.projectCompanyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('projectJob', () => {
            const fakePath = "/rendered/path/projectJob";
            const expectedParameters = {
                project: "projectValue",
                job: "jobValue",
            };
            const client = new eventserviceModule.v4beta1.EventServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.projectJobPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.projectJobPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('projectJobPath', () => {
                const result = client.projectJobPath("projectValue", "jobValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.projectJobPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromProjectJobName', () => {
                const result = client.matchProjectFromProjectJobName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.projectJobPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchJobFromProjectJobName', () => {
                const result = client.matchJobFromProjectJobName(fakePath);
                assert.strictEqual(result, "jobValue");
                assert((client.pathTemplates.projectJobPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('projectTenantCompany', () => {
            const fakePath = "/rendered/path/projectTenantCompany";
            const expectedParameters = {
                project: "projectValue",
                tenant: "tenantValue",
                company: "companyValue",
            };
            const client = new eventserviceModule.v4beta1.EventServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.projectTenantCompanyPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.projectTenantCompanyPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('projectTenantCompanyPath', () => {
                const result = client.projectTenantCompanyPath("projectValue", "tenantValue", "companyValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.projectTenantCompanyPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromProjectTenantCompanyName', () => {
                const result = client.matchProjectFromProjectTenantCompanyName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.projectTenantCompanyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchTenantFromProjectTenantCompanyName', () => {
                const result = client.matchTenantFromProjectTenantCompanyName(fakePath);
                assert.strictEqual(result, "tenantValue");
                assert((client.pathTemplates.projectTenantCompanyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchCompanyFromProjectTenantCompanyName', () => {
                const result = client.matchCompanyFromProjectTenantCompanyName(fakePath);
                assert.strictEqual(result, "companyValue");
                assert((client.pathTemplates.projectTenantCompanyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('projectTenantJob', () => {
            const fakePath = "/rendered/path/projectTenantJob";
            const expectedParameters = {
                project: "projectValue",
                tenant: "tenantValue",
                job: "jobValue",
            };
            const client = new eventserviceModule.v4beta1.EventServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.projectTenantJobPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.projectTenantJobPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('projectTenantJobPath', () => {
                const result = client.projectTenantJobPath("projectValue", "tenantValue", "jobValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.projectTenantJobPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromProjectTenantJobName', () => {
                const result = client.matchProjectFromProjectTenantJobName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.projectTenantJobPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchTenantFromProjectTenantJobName', () => {
                const result = client.matchTenantFromProjectTenantJobName(fakePath);
                assert.strictEqual(result, "tenantValue");
                assert((client.pathTemplates.projectTenantJobPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchJobFromProjectTenantJobName', () => {
                const result = client.matchJobFromProjectTenantJobName(fakePath);
                assert.strictEqual(result, "jobValue");
                assert((client.pathTemplates.projectTenantJobPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('tenant', () => {
            const fakePath = "/rendered/path/tenant";
            const expectedParameters = {
                project: "projectValue",
                tenant: "tenantValue",
            };
            const client = new eventserviceModule.v4beta1.EventServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.tenantPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.tenantPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('tenantPath', () => {
                const result = client.tenantPath("projectValue", "tenantValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.tenantPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromTenantName', () => {
                const result = client.matchProjectFromTenantName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.tenantPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchTenantFromTenantName', () => {
                const result = client.matchTenantFromTenantName(fakePath);
                assert.strictEqual(result, "tenantValue");
                assert((client.pathTemplates.tenantPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
