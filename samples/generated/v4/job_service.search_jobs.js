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
  // [START jobs_v4_generated_JobService_SearchJobs_async]
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
   *  Mode of a search.
   *  Defaults to [SearchMode.JOB_SEARCH][google.cloud.talent.v4.SearchJobsRequest.SearchMode.JOB_SEARCH].
   */
  // const searchMode = ''
  /**
   *  Required. The meta information collected about the job searcher, used to improve the
   *  search quality of the service. The identifiers (such as `user_id`) are
   *  provided by users, and must be unique and consistent.
   */
  // const requestMetadata = ''
  /**
   *  Query used to search against jobs, such as keyword, location filters, etc.
   */
  // const jobQuery = ''
  /**
   *  Controls whether to broaden the search when it produces sparse results.
   *  Broadened queries append results to the end of the matching results
   *  list.
   *  Defaults to false.
   */
  // const enableBroadening = true
  /**
   *  An expression specifies a histogram request against matching jobs.
   *  Expression syntax is an aggregation function call with histogram facets and
   *  other options.
   *  Available aggregation function calls are:
   *  * `count(string_histogram_facet)`: Count the number of matching entities,
   *  for each distinct attribute value.
   *  * `count(numeric_histogram_facet, list of buckets)`: Count the number of
   *  matching entities within each bucket.
   *  Data types:
   *  * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
   *  * String: string like "any string with backslash escape for quote(\")."
   *  * Number: whole number and floating point number like 10, -1 and -0.01.
   *  * List: list of elements with comma(,) separator surrounded by square
   *  brackets, for example, [1, 2, 3] and ["one", "two", "three"].
   *  Built-in constants:
   *  * MIN (minimum number similar to java Double.MIN_VALUE)
   *  * MAX (maximum number similar to java Double.MAX_VALUE)
   *  Built-in functions:
   *  * bucket(start, end[, label]): bucket built-in function creates a bucket
   *  with range of [start, end). Note that the end is exclusive, for example,
   *  bucket(1, MAX, "positive number") or bucket(1, 10).
   *  Job histogram facets:
   *  * company_display_name: histogram by [Job.company_display_name][google.cloud.talent.v4.Job.company_display_name].
   *  * employment_type: histogram by [Job.employment_types][google.cloud.talent.v4.Job.employment_types], for example,
   *    "FULL_TIME", "PART_TIME".
   *  * company_size: histogram by [CompanySize][google.cloud.talent.v4.CompanySize], for example, "SMALL",
   *  "MEDIUM", "BIG".
   *  * publish_time_in_day: histogram by the [Job.posting_publish_time][google.cloud.talent.v4.Job.posting_publish_time]
   *    in days.
   *    Must specify list of numeric buckets in spec.
   *  * publish_time_in_month: histogram by the [Job.posting_publish_time][google.cloud.talent.v4.Job.posting_publish_time]
   *    in months.
   *    Must specify list of numeric buckets in spec.
   *  * publish_time_in_year: histogram by the [Job.posting_publish_time][google.cloud.talent.v4.Job.posting_publish_time]
   *    in years.
   *    Must specify list of numeric buckets in spec.
   *  * degree_types: histogram by the [Job.degree_types][google.cloud.talent.v4.Job.degree_types], for example,
   *    "Bachelors", "Masters".
   *  * job_level: histogram by the [Job.job_level][google.cloud.talent.v4.Job.job_level], for example, "Entry
   *    Level".
   *  * country: histogram by the country code of jobs, for example, "US", "FR".
   *  * admin1: histogram by the admin1 code of jobs, which is a global
   *    placeholder referring to the state, province, or the particular term a
   *    country uses to define the geographic structure below the country level,
   *    for example, "CA", "IL".
   *  * city: histogram by a combination of the "city name, admin1 code". For
   *    example,  "Mountain View, CA", "New York, NY".
   *  * admin1_country: histogram by a combination of the "admin1 code, country",
   *    for example, "CA, US", "IL, US".
   *  * city_coordinate: histogram by the city center's GPS coordinates (latitude
   *    and longitude), for example, 37.4038522,-122.0987765. Since the
   *    coordinates of a city center can change, customers may need to refresh
   *    them periodically.
   *  * locale: histogram by the [Job.language_code][google.cloud.talent.v4.Job.language_code], for example, "en-US",
   *    "fr-FR".
   *  * language: histogram by the language subtag of the [Job.language_code][google.cloud.talent.v4.Job.language_code],
   *    for example, "en", "fr".
   *  * category: histogram by the [JobCategory][google.cloud.talent.v4.JobCategory], for example,
   *    "COMPUTER_AND_IT", "HEALTHCARE".
   *  * base_compensation_unit: histogram by the
   *    [CompensationInfo.CompensationUnit][google.cloud.talent.v4.CompensationInfo.CompensationUnit] of base
   *    salary, for example, "WEEKLY", "MONTHLY".
   *  * base_compensation: histogram by the base salary. Must specify list of
   *    numeric buckets to group results by.
   *  * annualized_base_compensation: histogram by the base annualized salary.
   *    Must specify list of numeric buckets to group results by.
   *  * annualized_total_compensation: histogram by the total annualized salary.
   *    Must specify list of numeric buckets to group results by.
   *  * string_custom_attribute: histogram by string [Job.custom_attributes][google.cloud.talent.v4.Job.custom_attributes].
   *    Values can be accessed via square bracket notations like
   *    string_custom_attribute["key1"].
   *  * numeric_custom_attribute: histogram by numeric [Job.custom_attributes][google.cloud.talent.v4.Job.custom_attributes].
   *    Values can be accessed via square bracket notations like
   *    numeric_custom_attribute["key1"]. Must specify list of numeric buckets to
   *    group results by.
   *  Example expressions:
   *  * `count(admin1)`
   *  * `count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000),
   *  bucket(100000, MAX)])`
   *  * `count(string_custom_attribute["some-string-custom-attribute"])`
   *  * `count(numeric_custom_attribute["some-numeric-custom-attribute"],
   *    [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative")])`
   */
  // const histogramQueries = 1234
  /**
   *  The desired job attributes returned for jobs in the search response.
   *  Defaults to [JobView.JOB_VIEW_SMALL][google.cloud.talent.v4.JobView.JOB_VIEW_SMALL] if no value is specified.
   */
  // const jobView = ''
  /**
   *  An integer that specifies the current offset (that is, starting result
   *  location, amongst the jobs deemed by the API as relevant) in search
   *  results. This field is only considered if [page_token][google.cloud.talent.v4.SearchJobsRequest.page_token] is unset.
   *  The maximum allowed value is 5000. Otherwise an error is thrown.
   *  For example, 0 means to  return results starting from the first matching
   *  job, and 10 means to return from the 11th job. This can be used for
   *  pagination, (for example, pageSize = 10 and offset = 10 means to return
   *  from the second page).
   */
  // const offset = 1234
  /**
   *  A limit on the number of jobs returned in the search results.
   *  Increasing this value above the default value of 10 can increase search
   *  response time. The value can be between 1 and 100.
   */
  // const maxPageSize = 1234
  /**
   *  The token specifying the current offset within
   *  search results. See [SearchJobsResponse.next_page_token][google.cloud.talent.v4.SearchJobsResponse.next_page_token] for
   *  an explanation of how to obtain the next set of query results.
   */
  // const pageToken = 'abc123'
  /**
   *  The criteria determining how search results are sorted. Default is
   *  `"relevance desc"`.
   *  Supported options are:
   *  * `"relevance desc"`: By relevance descending, as determined by the API
   *    algorithms. Relevance thresholding of query results is only available
   *    with this ordering.
   *  * `"posting_publish_time desc"`: By [Job.posting_publish_time][google.cloud.talent.v4.Job.posting_publish_time]
   *    descending.
   *  * `"posting_update_time desc"`: By [Job.posting_update_time][google.cloud.talent.v4.Job.posting_update_time]
   *    descending.
   *  * `"title"`: By [Job.title][google.cloud.talent.v4.Job.title] ascending.
   *  * `"title desc"`: By [Job.title][google.cloud.talent.v4.Job.title] descending.
   *  * `"annualized_base_compensation"`: By job's
   *    [CompensationInfo.annualized_base_compensation_range][google.cloud.talent.v4.CompensationInfo.annualized_base_compensation_range] ascending. Jobs
   *    whose annualized base compensation is unspecified are put at the end of
   *    search results.
   *  * `"annualized_base_compensation desc"`: By job's
   *    [CompensationInfo.annualized_base_compensation_range][google.cloud.talent.v4.CompensationInfo.annualized_base_compensation_range] descending. Jobs
   *    whose annualized base compensation is unspecified are put at the end of
   *    search results.
   *  * `"annualized_total_compensation"`: By job's
   *    [CompensationInfo.annualized_total_compensation_range][google.cloud.talent.v4.CompensationInfo.annualized_total_compensation_range] ascending. Jobs
   *    whose annualized base compensation is unspecified are put at the end of
   *    search results.
   *  * `"annualized_total_compensation desc"`: By job's
   *    [CompensationInfo.annualized_total_compensation_range][google.cloud.talent.v4.CompensationInfo.annualized_total_compensation_range] descending. Jobs
   *    whose annualized base compensation is unspecified are put at the end of
   *    search results.
   *  * `"custom_ranking desc"`: By the relevance score adjusted to the
   *    [SearchJobsRequest.CustomRankingInfo.ranking_expression][google.cloud.talent.v4.SearchJobsRequest.CustomRankingInfo.ranking_expression] with weight
   *    factor assigned by
   *    [SearchJobsRequest.CustomRankingInfo.importance_level][google.cloud.talent.v4.SearchJobsRequest.CustomRankingInfo.importance_level] in descending
   *    order.
   *  * Location sorting: Use the special syntax to order jobs by distance:<br>
   *    `"distance_from('Hawaii')"`: Order by distance from Hawaii.<br>
   *    `"distance_from(19.89, 155.5)"`: Order by distance from a coordinate.<br>
   *    `"distance_from('Hawaii'), distance_from('Puerto Rico')"`: Order by
   *    multiple locations. See details below.<br>
   *    `"distance_from('Hawaii'), distance_from(19.89, 155.5)"`: Order by
   *    multiple locations. See details below.<br>
   *    The string can have a maximum of 256 characters. When multiple distance
   *    centers are provided, a job that is close to any of the distance centers
   *    would have a high rank. When a job has multiple locations, the job
   *    location closest to one of the distance centers will be used. Jobs that
   *    don't have locations will be ranked at the bottom. Distance is calculated
   *    with a precision of 11.3 meters (37.4 feet). Diversification strategy is
   *    still applied unless explicitly disabled in
   *    [diversification_level][google.cloud.talent.v4.SearchJobsRequest.diversification_level].
   */
  // const orderBy = 'abc123'
  /**
   *  Controls whether highly similar jobs are returned next to each other in
   *  the search results. Jobs are identified as highly similar based on
   *  their titles, job categories, and locations. Highly similar results are
   *  clustered so that only one representative job of the cluster is
   *  displayed to the job seeker higher up in the results, with the other jobs
   *  being displayed lower down in the results.
   *  Defaults to [DiversificationLevel.SIMPLE][google.cloud.talent.v4.SearchJobsRequest.DiversificationLevel.SIMPLE] if no value
   *  is specified.
   */
  // const diversificationLevel = ''
  /**
   *  Controls over how job documents get ranked on top of existing relevance
   *  score (determined by API algorithm).
   */
  // const customRankingInfo = ''
  /**
   *  This field is deprecated. Please use
   *  [SearchJobsRequest.keyword_match_mode][google.cloud.talent.v4.SearchJobsRequest.keyword_match_mode] going forward.
   *  To migrate, disable_keyword_match set to false maps to
   *  [KeywordMatchMode.KEYWORD_MATCH_ALL][google.cloud.talent.v4.SearchJobsRequest.KeywordMatchMode.KEYWORD_MATCH_ALL], and disable_keyword_match set to
   *  true maps to [KeywordMatchMode.KEYWORD_MATCH_DISABLED][google.cloud.talent.v4.SearchJobsRequest.KeywordMatchMode.KEYWORD_MATCH_DISABLED]. If
   *  [SearchJobsRequest.keyword_match_mode][google.cloud.talent.v4.SearchJobsRequest.keyword_match_mode] is set, this field is ignored.
   *  Controls whether to disable exact keyword match on [Job.title][google.cloud.talent.v4.Job.title],
   *  [Job.description][google.cloud.talent.v4.Job.description], [Job.company_display_name][google.cloud.talent.v4.Job.company_display_name], [Job.addresses][google.cloud.talent.v4.Job.addresses],
   *  [Job.qualifications][google.cloud.talent.v4.Job.qualifications]. When disable keyword match is turned off, a
   *  keyword match returns jobs that do not match given category filters when
   *  there are matching keywords. For example, for the query "program manager,"
   *  a result is returned even if the job posting has the title "software
   *  developer," which doesn't fall into "program manager" ontology, but does
   *  have "program manager" appearing in its description.
   *  For queries like "cloud" that don't contain title or
   *  location specific ontology, jobs with "cloud" keyword matches are returned
   *  regardless of this flag's value.
   *  Use [Company.keyword_searchable_job_custom_attributes][google.cloud.talent.v4.Company.keyword_searchable_job_custom_attributes] if
   *  company-specific globally matched custom field/attribute string values are
   *  needed. Enabling keyword match improves recall of subsequent search
   *  requests.
   *  Defaults to false.
   */
  // const disableKeywordMatch = true
  /**
   *  Controls what keyword match options to use. If both keyword_match_mode and
   *  disable_keyword_match are set, keyword_match_mode will take precedence.
   *  Defaults to [KeywordMatchMode.KEYWORD_MATCH_ALL][google.cloud.talent.v4.SearchJobsRequest.KeywordMatchMode.KEYWORD_MATCH_ALL] if no value
   *  is specified.
   */
  // const keywordMatchMode = ''

  // Imports the Talent library
  const {JobServiceClient} = require('@google-cloud/talent').v4;

  // Instantiates a client
  const talentClient = new JobServiceClient();

  async function searchJobs() {
    // Construct request
    const request = {
      parent,
      requestMetadata,
    };

    // Run request
    const response = await talentClient.searchJobs(request);
    console.log(response);
  }

  searchJobs();
  // [END jobs_v4_generated_JobService_SearchJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
