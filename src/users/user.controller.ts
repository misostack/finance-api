import { Controller, Get, Patch, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from './dto';
import { I18n, I18nContext, I18nService } from 'nestjs-i18n';

@Controller('user')
export class UserController {
  constructor(private readonly i18n: I18nService) {}

  @Get()
  show() {
    return 'get the authenticated user';
  }

  @Patch()
  update() {
    return 'update the authenticated user';
  }

  @Post()
  // register(@Body() payload: RegisterUserDto) {
  async register(@I18n() i18n: I18nContext) {
    const APP_NAME = await i18n.translate('static.APP_NAME');
    console.log('APP_NAME', APP_NAME);
    const a = await this.i18n.translate('static.APP_NAME', {
      lang: 'vn',
    });
    return `register a new user account - ${APP_NAME}`;
  }
}
