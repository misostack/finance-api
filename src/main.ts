import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import { ValidationPipe, HttpExceptionFilter } from './base';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  // config service
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  app.set(
    'logger',
    configService.get('NODE_ENV') === 'production'
      ? ['error', 'warn']
      : ['log', 'error', 'warn', 'debug', 'verbose'],
  );

  // MVC
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));

  // global validation
  app.useGlobalPipes(new ValidationPipe());
  // global filters
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
