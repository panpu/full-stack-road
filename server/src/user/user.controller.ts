import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModule } from './user.module'
import { ApiTags} from '@nestjs/swagger';
import { Crud } from "nestjs-mongoose-crud";
@ApiTags('用户注册')
@Crud({
    // User采用增删改查接口模式
    model:UserModule
  })

@Controller('user')
export class UserController {
    constructor(private readonly appService : UserService){}//将news.serbice中注入的属性，在这里注册就可以在this上使用
}
