import { Controller, Get, Render } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  @Render('pages/index')
  root() {
    return { title: 'Title', message: 'Hello world!' };
  }
}
