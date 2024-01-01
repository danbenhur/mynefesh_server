import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { MynefeshService } from '../services/app.service';
import { MynefeshResolver } from '../graphql/mynefesh.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver } from '@nestjs/apollo';
import { Mynefesh, MynefeshSchema } from '../schemas/mynefesh.schema';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    MongooseModule.forRoot('mongodb+srv://dbh770:TheRA!054254@mynefeshcluster1.isxwunn.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Mynefesh.name, schema: MynefeshSchema }]),
  ],
  controllers: [AppController],
  providers: [MynefeshService, MynefeshResolver],
})
export class AppModule {}
