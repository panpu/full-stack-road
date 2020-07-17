import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiParam, ApiQuery, ApiHeader } from '@nestjs/swagger';
@Controller()
@ApiTags('用户,安全')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/version')
  @ApiParam({
    name: 'id',
    description: '这是用户id',
  })
  @ApiQuery({
    name: 'role',
    description: '这是需要传递的参数',
  })
  @ApiHeader({
    name: 'authoriation',
    required: true,
    description: '本次请求请带上token',
  })
  getVersion(): Object {
    return this.appService.getVersion();
  }
}
