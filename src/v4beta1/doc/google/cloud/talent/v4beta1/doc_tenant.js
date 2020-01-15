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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * A Tenant resource represents a tenant in the service. A tenant is a group or
 * entity that shares common access with specific privileges for resources like
 * profiles. Customer may create multiple tenants to provide data isolation for
 * different groups.
 *
 * @property {string} name
 *   Required during tenant update.
 *
 *   The resource name for a tenant. This is generated by the service when a
 *   tenant is created.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/foo/tenants/bar".
 *
 * @property {string} externalId
 *   Required. Client side tenant identifier, used to uniquely identify the
 *   tenant.
 *
 *   The maximum number of allowed characters is 255.
 *
 * @property {number} usageType
 *   Indicates whether data owned by this tenant may be used to provide product
 *   improvements across other tenants.
 *
 *   Defaults behavior is
 *   DataUsageType.ISOLATED
 *   if it's unset.
 *
 *   The number should be among the values of [DataUsageType]{@link google.cloud.talent.v4beta1.DataUsageType}
 *
 * @property {string[]} keywordSearchableProfileCustomAttributes
 *   A list of keys of filterable
 *   Profile.custom_attributes,
 *   whose corresponding `string_values` are used in keyword searches. Profiles
 *   with `string_values` under these specified field keys are returned if any
 *   of the values match the search keyword. Custom field values with
 *   parenthesis, brackets and special symbols are not searchable as-is,
 *   and must be surrounded by quotes.
 *
 * @typedef Tenant
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.Tenant definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/tenant.proto}
 */
const Tenant = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Enum that represents how user data owned by the tenant is used.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  DataUsageType: {

    /**
     * Default value.
     */
    DATA_USAGE_TYPE_UNSPECIFIED: 0,

    /**
     * Data owned by this tenant is used to improve search/recommendation
     * quality across tenants.
     */
    AGGREGATED: 1,

    /**
     * Data owned by this tenant is used to improve search/recommendation
     * quality for this tenant only.
     */
    ISOLATED: 2
  }
};