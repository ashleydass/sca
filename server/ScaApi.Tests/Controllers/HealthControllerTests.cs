using System;

using FluentAssertions;

using ScaApi.Controllers;

using Xunit;

namespace ScaApi.Tests.Controllers
{
    public class HealthControllerTests
    {
        [Fact]
        public void WhenGetIsCalledThenPongIsReceived()
        {
            var now = DateTime.Now;
            var healthController = new HealthController(() => now);

            var actual = healthController.Ping();

            actual
                .Should()
                .Be($"Pong at {now:F}");
        }
    }
}