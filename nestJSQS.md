# Nest问题记录
## nest -h指令介绍
```
class (简写: cl) 类
controller (简写: co) 控制器
decorator (简写: d) 装饰器
exception (简写: e) 异常捕获
filter (简写: f) 过滤器
gateway (简写: ga) 网关
guard (简写: gu) 守卫
interceptor (简写: i) 拦截器
middleware (简写: mi) 中间件
module (简写: mo) 模块
pipe (简写: pi) 管道
provider (简写: pr) 供应商
service (简写: s) 服务
```
## 要使用CLI快速创建user
只需执行
```
$ nest g controller user
$ nest g module  user
$ nest g service   user
```
## user.module.ts
*创建时会自动引入到module中管理，同时会把module导入到app.module中*
```
import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
@Module({
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}
```
## user.controller.ts
*将news.serbice中注入的属性，在这里注册就可以在this上使用*
```
import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller()
export class AppController {
  constructor(private readonly appService: NewsService) {} 

  @Get()
  getHello(): string {
    return this.NewsService.getHello();
  }
}
```
## user.service.ts
*注入到底层，在controller中就可以使用*
```
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    getHello(): string{
        return 'Hello World!';
    }
}
```
## 创建公用库（存放类似db之类）
```
//创建一个db公用库
nest g lib db
//默认是@app， 最好改成@libs方便记忆
? What prefix would you like to use for the library (default: @app)? @libs
```
### 安装完成后在需要使用的模块的app.module.ts中引入dbmodule
```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';

@Module({
  imports: [
    DbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
### 在lib文件下的src下的db.module.ts中连接数据库
```
import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from "nestjs-typegoose"

@Module({
  imports:[
    TypegooseModule.forRoot("mongodb://localhost:27017/nest-MDemo",{
      useNewUrlParser:true,
      useUnifiedTopology: true,
    	useCreateIndex: true,
    	useFindAndModify: false
    })
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
```
### 注册模块(可以在需要的模块中注册，也可以这样全局注册，就可以任意使用)
```
import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from "nestjs-typegoose"
import { User } from './models/user.model';
const models = TypegooseModule.forFeature([User])//注册模块
@Global()//定义为全局
@Module({
  imports:[
    TypegooseModule.forRoot("mongodb://localhost:27017/nest-MDemo",{
      useNewUrlParser:true,
      useUnifiedTopology: true,
    	useCreateIndex: true,
    	useFindAndModify: true
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
```
## controller中的2种注入
```
export class UserController {
    // 注入User模型
    constructor(@InjectModel(User) private readonly model){}
    //将news.serbice中注入的属性，在这里注册就可以在this上使用
    constructor(private readonly UserService : UserService){}
    @Get('search')
    async findAll(@Response() res){
        await this.UserService.findAll(res);
    }
}
```
## 使用class-validator数据验证
### 安装
```
npm i --save class-validator class-transformer
class-validator 用于入的数据验证
class-transformer 用于数据格式的转换
```
### 开启
使用 在main.js 开启一个全局管道 其他验证api查看
```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()) //开启一个全局验证管道
  await app.listen(3000);
}
bootstrap();
```
### 使用
```
import {IsNotEmpty} from 'class-validator'
// 这里不使用interface 原因是 interface编译成js后会被删除，同时用不了装饰器，无法在swagger显示
class CreatePostDto{ //用于对参数的限制
  @IsNotEmpty({message:'数据不为空'})//如果为空返回400
  title:string
   @IsNotEmpty({message:'数据不为空'})
  content:string
}
```
### 结果
```
Request body
{
  "name": "潘璞",
  "age": 23,
}
Response body
{
  "statusCode": 400,
  "message": [
    "缺少参数"
  ],
  "error": "Bad Request"
}
```
## 使用注解设置接口传参
新增一个接口
```
import { Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User} from '@libs/db/modules/user.module';
@ApiTags('新增用户')
@Post('/creatUser')
async creatUser(@Response() res,@Body() param:User){
    await this.UserService.creatUser(res,param);
}
```
### Request body*required
#### Example Value | Schema
```
{
  "password": "123456",
  "uuid": "12345678",
  "name": "潘璞",
  "age": 23,
  "nickname": "管理员",
  "sex": "男",
  "job": "前端工程师",
  "workyear": 3,
  "headsculpture": "./head-sculpture/uuid.jpg"
}
```
