// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, application) {
  // [START jobs_v4beta1_generated_ApplicationService_CreateApplication_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the profile under which the application is created.
   *  The format is
   *  "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}".
   *  For example, "projects/foo/tenants/bar/profiles/baz".
   */
  // const parent = 'abc123'
  /**
   *  Required. The application to be created.
   */
  // const application = ''

  // Imports the Talent library
  const {ApplicationServiceClient} = require('@google-cloud/talent').v4beta1;

  // Instantiates a client
  const talentClient = new ApplicationServiceClient();

  async function createApplication() {
    // Construct request
    const request = {
      parent,
      application,
    };

    // Run request
    const response = await talentClient.createApplication(request);
    console.log(response);
  }

  createApplication();
  // [END jobs_v4beta1_generated_ApplicationService_CreateApplication_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));