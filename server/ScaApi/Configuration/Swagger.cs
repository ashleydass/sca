using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

using Swashbuckle.AspNetCore.Swagger;

namespace ScaApi.Configuration
{
    public static class Swagger
    {
        public static IServiceCollection AddSwagger(this IServiceCollection services)
        {
            return services.AddSwaggerGen(
                c =>
                {
                    c.SwaggerDoc("v1", new Info { Title = "SCA API", Version = "v1" });
                });
        }

        public static IApplicationBuilder UseSwaggerUi(this IApplicationBuilder app)
        {
            return app.UseSwaggerUI(
                c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "SCA API");
                });
        }
    }
}