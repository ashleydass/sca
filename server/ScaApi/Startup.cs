using System;
using System.Net.Http;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using ScaApi.Configuration;
using ScaApi.Models;
using ScaApi.Services;

namespace ScaApi
{
    public class Startup
    {
        private readonly IConfiguration _config;

        private const string CorsPolicyInDev = "CorsPolicyInDev";

        public Startup(IConfiguration config)
        {
            _config = config;
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                // In Development, use the Developer Exception Page
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // In Staging/Production, route exceptions to /error
                app.UseExceptionHandler("/error");
            }

            var contentRootPath = env.ContentRootPath;

            app
                .UseCors(CorsPolicyInDev)
                .UseMvc()
                .UseSwagger()
                .UseSwaggerUi();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .Configure<AppOptions>(_config.GetSection("app"))
                .AddServices()
                .AddSwagger()
                .AddSingleton<Func<DateTime>>(() => DateTime.Now)
                .AddSingleton(serviceProvider =>
                {
                    var httpClient = new HttpClient { Timeout = TimeSpan.FromSeconds(1600) };
                    return httpClient;
                })
                .AddCors(
                    options =>
                    {
                        options.AddPolicy(
                            CorsPolicyInDev,
                            builder =>
                            {
                                builder
                                    .AllowAnyOrigin()
                                    .AllowAnyHeader()
                                    .AllowAnyMethod();
                            });
                    })
                .AddMvc(options => options.RespectBrowserAcceptHeader = true)
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }
    }
}