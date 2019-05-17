import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  getHello() {
    return { message: 'Hello world nestjs-mvc' };
  }

  @Get('about')
  @Render('about')
  getAbout() {
    return { message: 'About page' };
  }

}
