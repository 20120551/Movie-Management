using OrderServer.Application;
using OrderServer.Infrastructure;
using OrderServer.Read.API.Auths;
using OrderServer.Read.API.Middlewares;
using OrderServer.Shared;
using OrderServer.Write.API;
using OrderServer.Write.API.Consumers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddShared();
builder.Services.AddApplicationLayer();
builder.Services.AddWriteInfrastructure();
builder.Services.AddRequestMiddleware();
builder.Services.AddHostedService<AppInitializer>();
builder.Services.AddHostedService<UserConsumer>();


// add authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = "KONG_AUTHENTICATION_SCHEME";
    options.DefaultChallengeScheme = "KONG_AUTHENTICATION_SCHEME";
}).AddScheme<KongAuthenticationOptions, KongAuthenticationHandler>("KONG_AUTHENTICATION_SCHEME", options => { });

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();
app.UseShared();
app.UseAuthorization();

app.MapControllers();

app.Run();
