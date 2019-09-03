using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

using AutoFixture;

using FluentAssertions;

using Microsoft.Extensions.Logging;

using NSubstitute;

using ScaApi.Models;
using ScaApi.Services;

using Xunit;

namespace ScaApi.Tests.Services
{
    public class RestClientTests
    {
        private readonly RestClient _restClient;

        private readonly IFixture _fixture;

        private readonly MockHttpMessageHandler _mockHttpMessageHandler;

        public RestClientTests()
        {
            _fixture = new Fixture();

            var logger = Substitute.For<ILogger<RestClient>>();
            _mockHttpMessageHandler = new MockHttpMessageHandler();
            var httpClient = new HttpClient(_mockHttpMessageHandler);
            
            _restClient = new RestClient(httpClient, logger);
        }

        [Fact]
        public async Task GivenValidRequestWhenPostIsCalledThenRequestIsSentToHttpClientCorrectly()
        {
            var postRequest = _fixture.Build<RestRequest>()
                .With(r => r.Headers, new Dictionary<string, string>())
                .With(request => request.RootUrl, "http://somewhere.cm")
                .With(request => request.Uri, "api")
                .With(request => request.ContentType, RestRequest.JsonContentType)
                .Create();
            await _restClient.PostAsync(postRequest);

            HttpRequestMessage httpRequestMessage = null;

            _mockHttpMessageHandler
                .ReceivedSendAsync(request => httpRequestMessage = request);

            httpRequestMessage
                .Method
                .Should()
                .Be(HttpMethod.Post);

            httpRequestMessage
                .RequestUri
                .Should()
                .Be($"{postRequest.RootUrl}/{postRequest.Uri}");
        }

        private class MockHttpMessageHandler : HttpMessageHandler
        {
            private HttpRequestMessage _receivedRequest;

            protected override async Task<HttpResponseMessage> SendAsync(
                HttpRequestMessage request,
                CancellationToken cancellationToken)
            {
                _receivedRequest = request;
                var responseMessage = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent("Content as string")
                };

                return await Task.FromResult(responseMessage);
            }

            public void ReceivedSendAsync(Action<HttpRequestMessage> action)
            {
                action(_receivedRequest);
            }
        }
    }
}