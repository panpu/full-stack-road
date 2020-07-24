# swagger问题记录
## swagger的配置装饰器
swagger的配置装饰器都是以@api开头
3.1 ApiTags装饰器，让对应的模块分类到对应的标签当中
在user.controller.ts中添加该装饰器在控制器类上
```
import { ApiTags, ApiQuery,ApiBody,ApiParam,ApiHeader,ApiHeaders } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
@ApiTags('用户,安全')
@Controller('/user')
export class UserController {
	//...
}
```
3.2 ApiQuery、ApiBody、ApiParam、ApiHeader、ApiHeaders

除了ApiImplicitHeaders之外，其它的接收一个对象，对象类型如下:
```
name: string; // 该数据的名称，比如:id可以写用户id或者id
description?: string; // 简介
required?: boolean; // 是否是必须的
type?: any; // 类型
isArray?: boolean; // 是否是数组
enum?: SwaggerEnumType; // 枚举类型
collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi";
```
### ApiHeaders需要的对象只有三个参数
```
name: string;
description?: string;
equired?: boolean;
```
### 修改user.controller.ts文件成如下代码
```
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiParam, ApiQuery, ApiHeader } from '@nestjs/swagger';
import { UserService } from './user.service';
 
@ApiTags('用户,安全')
@Controller('/user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get('/get/:id')
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
    public getUser(@Param('id') id: string, @Query('role') role: string): string {
        return this.userService.getUser(id);
    }
}
```
### 3.5 ApiImplicitFile 可以用于文件上传的文档测试
例如在addUser方法加上该装饰器
```
@ApiResponse({ status: 401, description: '权限不足'})
    @ApiImplicitFile({
        name: '头像',
        description: '上传头像',
        required: false,
    })
    @Post('/add')
    public addUser(@Body() user: User) {
        return user;
```
