using System.Threading.Tasks;

using ScaApi.Models;

namespace ScaApi.Services
{
    public interface ISubmission
    {
        Task SubmitAsync(SubmissionModel model);
    }
}