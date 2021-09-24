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

function main(parent, jobs) {
  // [START talent_v4_generated_JobService_BatchUpdateJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the tenant under which the job is created.
   *  The format is "projects/{project_id}/tenants/{tenant_id}". For example,
   *  "projects/foo/tenants/bar".
   */
  // const parent = 'abc123'
  /**
   *  Required. The jobs to be updated.
   *  A maximum of 200 jobs can be updated in a batch.
   */
  // const jobs = 1234
  /**
   *  Strongly recommended for the best service experience. Be aware that it will
   *  also increase latency when checking the status of a batch operation.
   *  If [update_mask][google.cloud.talent.v4.BatchUpdateJobsRequest.update_mask] is provided, only the specified fields in
   *  [Job][google.cloud.talent.v4.Job] are updated. Otherwise all the fields are updated.
   *  A field mask to restrict the fields that are updated. Only
   *  top level fields of [Job][google.cloud.talent.v4.Job] are supported.
   *  If [update_mask][google.cloud.talent.v4.BatchUpdateJobsRequest.update_mask] is provided, The [Job][google.cloud.talent.v4.Job] inside
   *  [JobResult][JobOperationResult.JobResult]
   *  will only contains fields that is updated, plus the Id of the Job.
   *  Otherwise,  [Job][google.cloud.talent.v4.Job] will include all fields, which can yield a very
   *  large response.
   */
  // const updateMask = ''

  // Imports the Talent library
  const {JobServiceClient} = require('@google-cloud/talent').v4;

  // Instantiates a client
  const talentClient = new JobServiceClient();

  async function batchUpdateJobs() {
    // Construct request
    const request = {
      parent,
      jobs,
    };

    // Run request
    const [operation] = await talentClient.batchUpdateJobs(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  batchUpdateJobs();
  // [END talent_v4_generated_JobService_BatchUpdateJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
