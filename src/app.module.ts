import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { LoggerModule } from 'nestjs-pino';
import { ControllerModule } from './controller/controller.module';
import { GqlModule } from './gql/gql.module';

@Module({
  imports: [
    StoreModule,
    LoggerModule.forRoot({
      pinoHttp: {
        name: 'TEST',
        level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
        // install 'pino-pretty' package in order to use the following option
        transport:
          process.env.NODE_ENV !== 'prod'
            ? { target: 'pino-pretty' }
            : undefined,

        // and all the other fields of:
        // - https://github.com/pinojs/pino-http#api
        // - https://github.com/pinojs/pino/blob/HEAD/docs/api.md#options-object
      },
    }),
    ControllerModule,
    GqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
