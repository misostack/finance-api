import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create() {
    return 'create a user';
  }

  @Get()
  list() {
    return 'list users';
  }

  @Get(':id')
  show() {
    return 'get a user';
  }

  @Patch(':id')
  update() {
    return 'update a user';
  }
}
