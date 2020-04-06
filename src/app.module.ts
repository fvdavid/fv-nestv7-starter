import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
// import { LoggerMiddleware } from './middleware/logger-middleware';
import { logger } from './middleware/logger-middleware';

@Module({
  imports: [
    CatsModule,
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
