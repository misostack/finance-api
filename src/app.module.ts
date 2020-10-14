// utils
import * as path from 'path';
import { Module } from '@nestjs/common';
// common module
import { ConfigModule, ConfigService } from '@nestjs/config';
// 3rd party
import * as Joi from '@hapi/joi';
import { I18nModule, I18nParser, I18nJsonParser } from 'nestjs-i18n';

import { UsersModule } from './users/users.module';
import { PagesModule } from './pages/pages.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';

console.log(path.join(__dirname, '..', '/i18n/'));
@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'local')
          .default('local'),
        PORT: Joi.number().default(3000),
        APP_URL: Joi.string().default('http://localhost:4200'),
        ROOT_ENDPOINT: Joi.string().default('http://localhost:3000'),
        DEFAULT_LANGUAGE: Joi.string()
          .valid('en', 'vn')
          .default('vn'),
        // https://github.com/motdotla/dotenv-expand/blob/master/test/.env
        expandVariables: true,
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    // Language
    I18nModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage: 'vn',
        parserOptions: {
          path: path.join(__dirname, '..', '/i18n/'),
        },
        watch: configService.get('NODE_ENV') === 'local',
      }),
      parser: I18nJsonParser,
      inject: [ConfigService],
    }),
    // app modules
    UsersModule,
    PagesModule,
    PostsModule,
    CategoriesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
