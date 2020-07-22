import { Controller,Get,Post,Param,Response, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags,ApiParam,ApiQuery,ApiExtension} from '@nestjs/swagger';
// ApiResponse,ApiQuery,ApiHeader,ApiParam.ApiTags
// import { InjectModel } from 'nestjs-typegoose';
// import { Crud } from "nestjs-mongoose-crud";
import { User} from '@libs/db/modules/user.module';
// @Crud({
//     // User采用增删改查接口模式
//     model:User
//   })
@Controller('/user')
export class UserController {
    // // 注入User模型
    // constructor(@InjectModel(User) private readonly model){}
    //将news.serbice中注入的属性，在这里注册就可以在this上使用
    constructor(private readonly UserService : UserService){}
    @ApiTags('单个用户注册')
    // @ApiResponse({ status: 401, description: '权限不足'})
    @Get('/search/:id')
    @ApiParam({
        name: 'id',
        required: false,
        description: '这是用户id',
    })
    async findUser(@Param('id') id: string,@Response() res){
        await this.UserService.findUser(id,res);
    }

    @ApiTags('全部用户查询')
    @Get('/search')
    // :param动态url
    // @ApiParam({
    //     name: 'id',
    //     description: '这是用户id',
    // })
    // ？param=xxx请求url
    // @ApiQuery({
    //     name: 'id',
    //     required: false,
    //     description: '这是需要传递的参数',
    // })
    // @ApiHeader({
    //     name: 'authoriation',
    //     required: true,
    //     description: '本次请求请带上token',
    // })
    async findAll(@Response() res){
        await this.UserService.findAll(res);
    }

    @ApiTags('新增用户')
    @Post('/creatUser')
    // :param动态url
    // @ApiParam({
    //     name: 'id',
    //     description: '这是用户id',
    // })
    // ？param=xxx请求url
    // @ApiQuery({
    //     name: 'user1',
    //     required: false,
    //     description: '这是需要传递的参数',
    // })
    // @ApiHeader({
    //     name: 'authoriation',
    //     required: true,
    //     description: '本次请求请带上token',
    // })
    async creatUser(@Response() res,@Body() param:User){
        await this.UserService.creatUser(res,param);
    }
}
