using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.Extensions.Options;

using ScaApi.Extensions;
using ScaApi.Models;

namespace ScaApi.Services
{
    public class Submission : ISubmission
    {
        private readonly AppOptions _appOptions;

        private readonly IRestClient _restClient;

        public Submission(IOptions<AppOptions> appOptions, IRestClient restClient)
        {
            _restClient = restClient;
            _appOptions = appOptions.Value;
        }

        public async Task SubmitAsync(SubmissionModel model)
        {
            var restRequest = new RestRequest
            {
                RootUrl = _appOptions.BaseUrl,
                Uri = "reacttestform/submission",
                Headers = new Dictionary<string, string>
                {
                    { "x-auth", "react-test" }
                },
                Payload = new
                {
                    data = model
                }.ToJsonString(),
                ContentType = RestRequest.JsonContentType
            };

            await _restClient.PostAsync(restRequest);
        }
    }
}