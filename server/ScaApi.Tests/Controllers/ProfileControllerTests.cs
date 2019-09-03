using System.Threading.Tasks;

using AutoFixture;

using FluentAssertions;

using Microsoft.Extensions.Logging;

using NSubstitute;

using ScaApi.Controllers;
using ScaApi.Models;
using ScaApi.Services;

using Xunit;

namespace ScaApi.Tests.Controllers
{
    public class ProfileControllerTests
    {
        private readonly ProfileController _profileController;

        private readonly IFixture _fixture;

        private readonly ISubmission _submission;

        public ProfileControllerTests()
        {
            _fixture = new Fixture();
            var logger = Substitute.For<ILogger<ProfileController>>();
            _submission = Substitute.For<ISubmission>();
            _profileController = new ProfileController(logger, _submission);
        }

        [Fact]
        public async Task WhenPostIsCalledThenSubmissionIsCalledWithCorrectModel()
        {
            var model = _fixture.Create<ProfileDto>();
            SubmissionModel submissionModel = null;

            await _submission
                .SubmitAsync(Arg.Do<SubmissionModel>(m => submissionModel = m));

            await _profileController.Post(model);

            submissionModel
                .Should()
                .BeEquivalentTo(model);
        }
    }
}