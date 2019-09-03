using System.Threading.Tasks;

using ScaApi.Models;

namespace ScaApi.Services
{
    public interface IRestClient
    {
        Task PostAsync(RestRequest restRequest);
    }
}