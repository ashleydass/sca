using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Newtonsoft.Json;

using ScaApi.Models;
using ScaApi.Services;

namespace ScaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly ILogger<ProfileController> _logger;

        private readonly ISubmission _submission;

        public ProfileController(ILogger<ProfileController> logger, ISubmission submission)
        {
            _logger = logger;
            _submission = submission;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ProfileDto model)
        {
            _logger.LogInformation($"{JsonConvert.SerializeObject(model)} has been submitted!");

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.Values);
            }

            try
            {
                await _submission.SubmitAsync(
                        new SubmissionModel
                        {
                            FirstName = model.FirstName,
                            LastName = model.LastName,
                            Email = model.Email,
                            MobilePhone = model.MobilePhone
                        });
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, "An error occured while submitting subscription.");

                return StatusCode(
                    500,
                    new
                    {
                        error = "A server error has occured and the request could not be submitted."
                    });
            }

            return Ok();
        }
    }
}