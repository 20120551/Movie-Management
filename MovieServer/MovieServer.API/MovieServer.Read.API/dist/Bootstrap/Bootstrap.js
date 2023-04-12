"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bootstrap = void 0;
const inversify_express_utils_1 = require("@Shared/Lib/inversify-express-utils");
const Queries_1 = require("@Infrastructure/Read/Queries");
const Configs_1 = require("@Read/Api/Configs");
const Broker_1 = require("@Infrastructure/Broker");
const IoC_1 = require("@Shared/IoC");
const express_1 = __importDefault(require("express"));
const Middleware_1 = require("@Read/Api/Middleware");
async function Bootstrap(container, ...modules) {
    if (container.isBound(IoC_1.TYPES.App) === false) {
        // get database 
        const dbClient = await (0, Queries_1.GetDatabaseClient)(Configs_1.dbConfig);
        container.bind(IoC_1.TYPES.ReadDbClient).toConstantValue(dbClient);
        // get amqp client
        const amqpClient = await (0, Broker_1.GetAmqpClient)(Configs_1.env.AMQP_URL);
        container.bind(IoC_1.TYPES.AmqpClient).toConstantValue(amqpClient);
        // reload module
        container.load(...modules);
        //config express server
        const server = new inversify_express_utils_1.InversifyExpressServer(container);
        server.setConfig((app) => {
            // pipeline
            app.use(express_1.default.json());
            // middleware
            //resolve middleware
            app.use(container.resolve(Middleware_1.RequestLoggingMiddleware).InvokeAsync);
        });
        server.setErrorConfig((app) => {
            // do something
            app.use(container.resolve(Middleware_1.ErrorHandlingMiddleware).InvokeAsync);
        });
        const app = server.build();
        var PORT = Configs_1.env.PORT;
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
        container.bind(IoC_1.TYPES.App).toConstantValue(app);
        return app;
    }
    else {
        return container.get(IoC_1.TYPES.App);
    }
}
exports.Bootstrap = Bootstrap;