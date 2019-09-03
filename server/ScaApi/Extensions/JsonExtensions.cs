using System;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace ScaApi.Extensions
{
    public static class JsonExtensions
    {
        public static string ToJsonString<T>(this T obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException(nameof(obj));
            }

            var contractResolver = new DefaultContractResolver
            {
                NamingStrategy = new CamelCaseNamingStrategy()
            };

            return JsonConvert.SerializeObject(
                obj,
                new JsonSerializerSettings
                {
                    ContractResolver = contractResolver,
                    Formatting = Formatting.Indented
                });
        }
    }
}