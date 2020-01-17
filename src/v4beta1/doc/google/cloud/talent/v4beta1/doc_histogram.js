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
 * The histogram request.
 *
 * @property {string} histogramQuery
 *   An expression specifies a histogram request against matching resources
 *   (for example, jobs, profiles) for searches.
 *
 *   See SearchJobsRequest.histogram_queries and
 *   SearchProfilesRequest.histogram_queries for details about syntax.
 *
 * @typedef HistogramQuery
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.HistogramQuery definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/histogram.proto}
 */
const HistogramQuery = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Histogram result that matches HistogramQuery specified in searches.
 *
 * @property {string} histogramQuery
 *   Requested histogram expression.
 *
 * @property {Object.<string, number>} histogram
 *   A map from the values of the facet associated with distinct values to the
 *   number of matching entries with corresponding value.
 *
 *   The key format is:
 *
 *   * (for string histogram) string values stored in the field.
 *   * (for named numeric bucket) name specified in `bucket()` function, like
 *     for `bucket(0, MAX, "non-negative")`, the key will be `non-negative`.
 *   * (for anonymous numeric bucket) range formatted as `<low>-<high>`, for
 *     example, `0-1000`, `MIN-0`, and `0-MAX`.
 *
 * @typedef HistogramQueryResult
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.HistogramQueryResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/histogram.proto}
 */
const HistogramQueryResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};