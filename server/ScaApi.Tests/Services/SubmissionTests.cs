using System.Threading.Tasks;

using AutoFixture;

using FluentAssertions;

using Microsoft.Extensions.Options;

using Newtonsoft.Json;

using NSubstitute;

using ScaApi.Models;
using ScaApi.Services;

using Xunit;

namespace ScaApi.Tests.Services
{
    public class SubmissionTests
    {
        private readonly Submission _submission;

        private readonly IFixture _fixture;

        private readonly IRestClient _restClient;

        private readonly AppOptions _appOptions;

        public SubmissionTests()
        {
            _fixture = new Fixture();
            _appOptions = _fixture.Create<AppOptions>();
            var appOptionsWrapper = new OptionsWrapper<AppOptions>(_appOptions);

            _restClient = Substitute.For<IRestClient>();
            _submission = new Submission(appOptionsWrapper, _restClient);
        }

        [Fact]
        public async Task GivenValidModelWhenSubmitIsCalledThenCorrectRequestIsPassedToRestClient()
        {
            var submissionModel = _fixture.Create<SubmissionModel>();
            await _submission.SubmitAsync(submissionModel);

            await _restClient.Received()
                .PostAsync(
                    Arg.Is<RestRequest>(
                        request => request.Headers["x-auth"].Equals("react-test")
                                   && request.RootUrl.Equals(_appOptions.BaseUrl)
                                   && request.Uri.Equals("reacttestform/submission")));
        }
        [Fact]
        public async Task GivenValidModelWhenSubmitIsCalledThenRestRequestContainsCorrectPayLoad()
        {
            var submissionModel = _fixture.Create<SubmissionModel>();

            var requestPayload = string.Empty;

            await _restClient
                .PostAsync(
                    Arg.Do<RestRequest>(request => requestPayload = request.Payload));

            await _submission.SubmitAsync(submissionModel);

            var expectedPayload = new
            {
                data = submissionModel
            };

            var actualPayload = JsonConvert.DeserializeObject(requestPayload, expectedPayload.GetType());

            actualPayload
                .Should()
                .BeEquivalentTo(expectedPayload);
        }
    }
}
