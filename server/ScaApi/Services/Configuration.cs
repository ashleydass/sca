using Microsoft.Extensions.DependencyInjection;

namespace ScaApi.Services
{
    public static class Configuration
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            return services
                .AddTransient<IRestClient, RestClient>()
                .AddTransient<ISubmission, Submission>();
        }
    }
}