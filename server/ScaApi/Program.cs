using System.Threading.Tasks;

using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace ScaApi
{
    internal static class Program
    {
        public static async Task Main(string[] args)
        {
            var webHost = CreateWebHostBuilder(args)
                .Build();

            await webHost.RunAsync();
        }

        private static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
