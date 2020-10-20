import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity'

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("all")
  async findAll() {
    return this.appService.getAllUsers();
  }

  @Put()
  async addUser(@Body() user: User) {
    return this.appService.addUser(user);
  }

  @Put(":id")
  async updateUser(@Param('id') id: number, @Body() newUser: User) {
    return this.appService.updateUser(id, newUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return `This action removes a #${id} cat`;
  }
}
