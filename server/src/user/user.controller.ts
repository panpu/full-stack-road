import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly appService : UserService){}//将news.serbice中注入的属性，在这里注册就可以在this上使用
}
