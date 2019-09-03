FROM mcr.microsoft.com/dotnet/core/sdk:3.0-alpine AS build-env
WORKDIR /app
COPY *.csproj ./
RUN dotnet restore
COPY . ./
RUN dotnet publish -c Release -o output
# Runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-alpine
WORKDIR /app
COPY --from=build-env /app/output .
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000
ENTRYPOINT ["dotnet", "ScaApi.dll"]