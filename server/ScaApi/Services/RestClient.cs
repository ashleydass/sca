using System;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.Extensions.Logging;

using ScaApi.Models;

namespace ScaApi.Services
{
    public class RestClient : IRestClient
    {
        private readonly HttpClient _httpClient;

        private readonly ILogger<RestClient> _logger;

        public RestClient(HttpClient httpClient, ILogger<RestClient> logger)
        {
            _httpClient = httpClient;
            _logger = logger;
        }

        public async Task PostAsync(RestRequest restRequest)
        {
            try
            {
                using var httpRequestMessage = CreateRequest(restRequest, HttpMethod.Post);

                httpRequestMessage.Content = new StringContent(
                    restRequest.Payload,
                    Encoding.UTF8,
                    restRequest.ContentType);

                using var response = await _httpClient.SendAsync(httpRequestMessage, CancellationToken.None);

                if (!response.IsSuccessStatusCode)
                {
                    throw new HttpRequestException(
                        $"An unsuccessful status code of {response.StatusCode} and reason {response.ReasonPhrase} was returned.");
                }

                _logger.LogInformation("Subscription request was posted successfully.");
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Error occured when trying to send POST request.");

                throw;
            }
        }

        private static string BuildUrl(RestRequest restRequest)
        {
            if (string.IsNullOrEmpty(restRequest.RootUrl))
            {
                throw new InvalidOperationException("Root Url is not defined.");
            }

            var result = new StringBuilder();

            result.Append(restRequest.RootUrl.TrimEnd('/'));

            if (!string.IsNullOrEmpty(restRequest.Uri))
            {
                result.Append($"/{restRequest.Uri.Trim('/')}");
            }

            return result.ToString();
        }

        private static HttpRequestMessage CreateRequest(RestRequest restRequest, HttpMethod method)
        {
            var url = BuildUrl(restRequest);
            var httpRequestMessage = new HttpRequestMessage(method, url);

            httpRequestMessage.Headers.Add("Accept", restRequest.ContentType);

            if (restRequest.Headers == null || !restRequest.Headers.Any())
            {
                return httpRequestMessage;
            }

            foreach (var (key, value) in restRequest.Headers)
            {
                httpRequestMessage.Headers.Add(key, value);
            }

            return httpRequestMessage;
        }
    }
}