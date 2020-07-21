import { Controller,Get, Response } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags} from '@nestjs/swagger';

// import { InjectModel } from 'nestjs-typegoose';
// import { Crud } from "nestjs-mongoose-crud";
import { User} from '@libs/db/modules/user.module';
// @Crud({
//     // User采用增删改查接口模式
//     model:User
//   })
@ApiTags('用户注册')
@Controller('user')
export class UserController {
    // // 注入User模型
    // constructor(@InjectModel(User) private readonly model){}
    //将news.serbice中注入的属性，在这里注册就可以在this上使用
    constructor(private readonly UserService : UserService){}
    @Get('search')
    async findAll(@Response() res){
        await this.UserService.findAll(res);
    }
}
