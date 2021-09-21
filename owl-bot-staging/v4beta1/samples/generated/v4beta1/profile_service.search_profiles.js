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

function main(parent, requestMetadata) {
  // [START talent_search_profiles_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the tenant to search within.
   *  The format is "projects/{project_id}/tenants/{tenant_id}". For example,
   *  "projects/foo/tenants/bar".
   */
  // const parent = 'abc123'
  /**
   *  Required. The meta information collected about the profile search user. This is used
   *  to improve the search quality of the service. These values are provided by
   *  users, and must be precise and consistent.
   */
  // const requestMetadata = ''
  /**
   *  Search query to execute. See [ProfileQuery][google.cloud.talent.v4beta1.ProfileQuery] for more details.
   */
  // const profileQuery = ''
  /**
   *  A limit on the number of profiles returned in the search results.
   *  A value above the default value 10 can increase search response time.
   *  The maximum value allowed is 100. Otherwise an error is thrown.
   */
  // const pageSize = 1234
  /**
   *  The pageToken, similar to offset enables users of the API to paginate
   *  through the search results. To retrieve the first page of results, set the
   *  pageToken to empty. The search response includes a
   *  [nextPageToken][google.cloud.talent.v4beta1.SearchProfilesResponse.next_page_token] field that can be
   *  used to populate the pageToken field for the next page of results. Using
   *  pageToken instead of offset increases the performance of the API,
   *  especially compared to larger offset values.
   */
  // const pageToken = 'abc123'
  /**
   *  An integer that specifies the current offset (that is, starting result) in
   *  search results. This field is only considered if [page_token][google.cloud.talent.v4beta1.SearchProfilesRequest.page_token] is unset.
   *  The maximum allowed value is 5000. Otherwise an error is thrown.
   *  For example, 0 means to search from the first profile, and 10 means to
   *  search from the 11th profile. This can be used for pagination, for example
   *  pageSize = 10 and offset = 10 means to search from the second page.
   */
  // const offset = 1234
  /**
   *  This flag controls the spell-check feature. If `false`, the
   *  service attempts to correct a misspelled query.
   *  For example, "enginee" is corrected to "engineer".
   */
  // const disableSpellCheck = true
  /**
   *  The criteria that determines how search results are sorted.
   *  Defaults is "relevance desc" if no value is specified.
   *  Supported options are:
   *  * "relevance desc": By descending relevance, as determined by the API
   *     algorithms.
   *  * "update_date desc": Sort by [Profile.update_time][google.cloud.talent.v4beta1.Profile.update_time] in descending order
   *    (recently updated profiles first).
   *  * "create_date desc": Sort by [Profile.create_time][google.cloud.talent.v4beta1.Profile.create_time] in descending order
   *    (recently created profiles first).
   *  * "first_name": Sort by [PersonName.PersonStructuredName.given_name][google.cloud.talent.v4beta1.PersonName.PersonStructuredName.given_name] in
   *    ascending order.
   *  * "first_name desc": Sort by [PersonName.PersonStructuredName.given_name][google.cloud.talent.v4beta1.PersonName.PersonStructuredName.given_name]
   *    in descending order.
   *  * "last_name": Sort by [PersonName.PersonStructuredName.family_name][google.cloud.talent.v4beta1.PersonName.PersonStructuredName.family_name] in
   *    ascending order.
   *  * "last_name desc": Sort by [PersonName.PersonStructuredName.family_name][google.cloud.talent.v4beta1.PersonName.PersonStructuredName.family_name]
   *    in ascending order.
   */
  // const orderBy = 'abc123'
  /**
   *  When sort by field is based on alphabetical order, sort values case
   *  sensitively (based on ASCII) when the value is set to true. Default value
   *  is case in-sensitive sort (false).
   */
  // const caseSensitiveSort = true
  /**
   *  A list of expressions specifies histogram requests against matching
   *  profiles for [SearchProfilesRequest][google.cloud.talent.v4beta1.SearchProfilesRequest].
   *  The expression syntax looks like a function definition with parameters.
   *  Function syntax: function_name(histogram_facet[, list of buckets])
   *  Data types:
   *  * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
   *  * String: string like "any string with backslash escape for quote(\")."
   *  * Number: whole number and floating point number like 10, -1 and -0.01.
   *  * List: list of elements with comma(,) separator surrounded by square
   *  brackets. For example, [1, 2, 3] and ["one", "two", "three"].
   *  Built-in constants:
   *  * MIN (minimum number similar to java Double.MIN_VALUE)
   *  * MAX (maximum number similar to java Double.MAX_VALUE)
   *  Built-in functions:
   *  * bucket(start, end[, label])
   *  Bucket build-in function creates a bucket with range of [start, end). Note
   *  that the end is exclusive.
   *  For example, bucket(1, MAX, "positive number") or bucket(1, 10).
   *  Histogram Facets:
   *  * admin1: Admin1 is a global placeholder for referring to state, province,
   *  or the particular term a country uses to define the geographic structure
   *  below the country level. Examples include states codes such as "CA", "IL",
   *  "NY", and provinces, such as "BC".
   *  * locality: Locality is a global placeholder for referring to city, town,
   *  or the particular term a country uses to define the geographic structure
   *  below the admin1 level. Examples include city names such as
   *  "Mountain View" and "New York".
   *  * extended_locality: Extended locality is concatenated version of admin1
   *  and locality with comma separator. For example, "Mountain View, CA" and
   *  "New York, NY".
   *  * postal_code: Postal code of profile which follows locale code.
   *  * country: Country code (ISO-3166-1 alpha-2 code) of profile, such as US,
   *   JP, GB.
   *  * job_title: Normalized job titles specified in EmploymentHistory.
   *  * company_name: Normalized company name of profiles to match on.
   *  * institution: The school name. For example, "MIT",
   *  "University of California, Berkeley"
   *  * degree: Highest education degree in ISCED code. Each value in degree
   *  covers a specific level of education, without any expansion to upper nor
   *  lower levels of education degree.
   *  * experience_in_months: experience in months. 0 means 0 month to 1 month
   *  (exclusive).
   *  * application_date: The application date specifies application start dates.
   *  See [ApplicationDateFilter][google.cloud.talent.v4beta1.ApplicationDateFilter] for more details.
   *  * application_outcome_notes: The application outcome reason specifies the
   *  reasons behind the outcome of the job application.
   *  See [ApplicationOutcomeNotesFilter][google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter] for more details.
   *  * application_job_title: The application job title specifies the job
   *  applied for in the application.
   *  See [ApplicationJobFilter][google.cloud.talent.v4beta1.ApplicationJobFilter] for more details.
   *  * hirable_status: Hirable status specifies the profile's hirable status.
   *  * string_custom_attribute: String custom attributes. Values can be accessed
   *  via square bracket notation like string_custom_attribute["key1"].
   *  * numeric_custom_attribute: Numeric custom attributes. Values can be
   *  accessed via square bracket notation like numeric_custom_attribute["key1"].
   *  Example expressions:
   *  * count(admin1)
   *  * count(experience_in_months, [bucket(0, 12, "1 year"),
   *  bucket(12, 36, "1-3 years"), bucket(36, MAX, "3+ years")])
   *  * count(string_custom_attribute["assigned_recruiter"])
   *  * count(numeric_custom_attribute["favorite_number"],
   *  [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative")])
   */
  // const histogramQueries = 1234
  /**
   *  An id that uniquely identifies the result set of a
   *  [SearchProfiles][google.cloud.talent.v4beta1.ProfileService.SearchProfiles] call. The id should be
   *  retrieved from the
   *  [SearchProfilesResponse][google.cloud.talent.v4beta1.SearchProfilesResponse] message returned from a previous
   *  invocation of [SearchProfiles][google.cloud.talent.v4beta1.ProfileService.SearchProfiles].
   *  A result set is an ordered list of search results.
   *  If this field is not set, a new result set is computed based on the
   *  [profile_query][google.cloud.talent.v4beta1.SearchProfilesRequest.profile_query].  A new [result_set_id][google.cloud.talent.v4beta1.SearchProfilesRequest.result_set_id] is returned as a handle to
   *  access this result set.
   *  If this field is set, the service will ignore the resource and
   *  [profile_query][google.cloud.talent.v4beta1.SearchProfilesRequest.profile_query] values, and simply retrieve a page of results from the
   *  corresponding result set.  In this case, one and only one of [page_token][google.cloud.talent.v4beta1.SearchProfilesRequest.page_token]
   *  or [offset][google.cloud.talent.v4beta1.SearchProfilesRequest.offset] must be set.
   *  A typical use case is to invoke [SearchProfilesRequest][google.cloud.talent.v4beta1.SearchProfilesRequest] without this
   *  field, then use the resulting [result_set_id][google.cloud.talent.v4beta1.SearchProfilesRequest.result_set_id] in
   *  [SearchProfilesResponse][google.cloud.talent.v4beta1.SearchProfilesResponse] to page through the results.
   */
  // const resultSetId = 'abc123'
  /**
   *  This flag is used to indicate whether the service will attempt to
   *  understand synonyms and terms related to the search query or treat the
   *  query "as is" when it generates a set of results. By default this flag is
   *  set to false, thus allowing expanded results to also be returned. For
   *  example a search for "software engineer" might also return candidates who
   *  have experience in jobs similar to software engineer positions. By setting
   *  this flag to true, the service will only attempt to deliver candidates has
   *  software engineer in his/her global fields by treating "software engineer"
   *  as a keyword.
   *  It is recommended to provide a feature in the UI (such as a checkbox) to
   *  allow recruiters to set this flag to true if they intend to search for
   *  longer boolean strings.
   */
  // const strictKeywordsSearch = true

  // Imports the Talent library
  const {ProfileServiceClient} = require('@google-cloud/talent').v4beta1;

  // Instantiates a client
  const talentClient = new ProfileServiceClient();

  async function searchProfiles() {
    // Construct request
    const request = {
      parent,
      requestMetadata,
    };

    // Run request
    const response = await talentClient.searchProfiles(request);
    console.log(response);
  }

  searchProfiles();
  // [END talent_search_profiles_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
