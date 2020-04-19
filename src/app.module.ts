import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
// import { LoggerMiddleware } from './middleware/logger-middleware';
import { logger } from './middleware/logger-middleware';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './pipe/validation.pipe';

@Module({
  imports: [
    CatsModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(LoggerMiddleware)
      .apply(logger)
      .exclude(
        { path: 'dogs', method: RequestMethod.GET },
        { path: 'dogs', method: RequestMethod.POST },
      )
      .forRoutes(
        {
          path: 'cats', method: RequestMethod.GET,
        }
      );
  }
}
