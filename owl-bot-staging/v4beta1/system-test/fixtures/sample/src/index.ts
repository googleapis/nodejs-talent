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

import {ApplicationServiceClient, CompanyServiceClient, CompletionClient, EventServiceClient, JobServiceClient, ProfileServiceClient, TenantServiceClient} from '@google-cloud/talent';

// check that the client class type name can be used
function doStuffWithApplicationServiceClient(client: ApplicationServiceClient) {
  client.close();
}
function doStuffWithCompanyServiceClient(client: CompanyServiceClient) {
  client.close();
}
function doStuffWithCompletionClient(client: CompletionClient) {
  client.close();
}
function doStuffWithEventServiceClient(client: EventServiceClient) {
  client.close();
}
function doStuffWithJobServiceClient(client: JobServiceClient) {
  client.close();
}
function doStuffWithProfileServiceClient(client: ProfileServiceClient) {
  client.close();
}
function doStuffWithTenantServiceClient(client: TenantServiceClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const applicationServiceClient = new ApplicationServiceClient();
  doStuffWithApplicationServiceClient(applicationServiceClient);
  // check that the client instance can be created
  const companyServiceClient = new CompanyServiceClient();
  doStuffWithCompanyServiceClient(companyServiceClient);
  // check that the client instance can be created
  const completionClient = new CompletionClient();
  doStuffWithCompletionClient(completionClient);
  // check that the client instance can be created
  const eventServiceClient = new EventServiceClient();
  doStuffWithEventServiceClient(eventServiceClient);
  // check that the client instance can be created
  const jobServiceClient = new JobServiceClient();
  doStuffWithJobServiceClient(jobServiceClient);
  // check that the client instance can be created
  const profileServiceClient = new ProfileServiceClient();
  doStuffWithProfileServiceClient(profileServiceClient);
  // check that the client instance can be created
  const tenantServiceClient = new TenantServiceClient();
  doStuffWithTenantServiceClient(tenantServiceClient);
}

main();
