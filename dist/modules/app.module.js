"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("../controllers/app.controller");
const app_service_1 = require("../services/app.service");
const mynefesh_resolver_1 = require("../resolvers/mynefesh.resolver");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const apollo_1 = require("@nestjs/apollo");
const mynefesh_schema_1 = require("../schemas/mynefesh.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                driver: apollo_1.ApolloDriver,
            }),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://dbh770:TheRA!054254@mynefeshcluster1.isxwunn.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: mynefesh_schema_1.Mynefesh.name, schema: mynefesh_schema_1.MynefeshSchema }]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.MynefeshService, mynefesh_resolver_1.MynefeshResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map