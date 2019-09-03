using System.Collections.Generic;

namespace ScaApi.Models
{
    public class RestRequest
    {
        public const string JsonContentType = "application/json";

        public string RootUrl { get; set; }

        public string Uri { get; set; }

        public Dictionary<string, string> Headers { get; set; }

        public string ContentType { get; set; }

        public string Payload { get; set; }
    }
}