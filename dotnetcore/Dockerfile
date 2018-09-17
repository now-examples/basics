FROM microsoft/dotnet:2.1-sdk-alpine AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.sln .
COPY nuget.config . 
COPY aspnetapp/*.csproj ./aspnetapp/
RUN dotnet restore

# copy everything else and build app
COPY aspnetapp/. ./aspnetapp/
WORKDIR /app/aspnetapp
RUN dotnet build

FROM build AS publish
WORKDIR /app/aspnetapp
RUN dotnet add package ILLink.Tasks -v 0.1.5-preview-1841731 -s https://dotnet.myget.org/F/dotnet-core/api/v3/index.json
RUN dotnet publish -c Release -o out -r linux-musl-x64 /p:ShowLinkerSizeComparison=true 

FROM microsoft/dotnet:2.1-runtime-deps-alpine AS runtime
ENV DOTNET_USE_POLLING_FILE_WATCHER=true
WORKDIR /app
COPY --from=publish /app/aspnetapp/out ./

EXPOSE 80
ENTRYPOINT ["./aspnetapp.dll"]