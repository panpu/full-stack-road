import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty } from 'class-validator'
//   给添加的数据加入时间戳
// @modelOptions({
//     schemaOptions: {
//         timestamps: true,
//     }
// })

export class User {
    @ApiProperty({ description: '用户名', example: 'admin',required: true })
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    useraccount: string
    @ApiProperty({ description: '密码', example: '123456',required: true })
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    password: string
    @ApiProperty({ description: 'uuid', example: '12345678',required: true })
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    uuid: string
    @ApiProperty({ description: '姓名', example: '潘璞',required: true })
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    name: string
    @ApiProperty({ description: '年龄', example: 23 ,required: true})
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    age: number
    @ApiProperty({ description: '昵称', example: '管理员' ,required: true})
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    nickname: string
    @ApiProperty({ description: '性别', example: '男',required: true })
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    sex: string
    @ApiProperty({ description: '职业', example: '前端工程师',required: true })
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    job: string
    @ApiProperty({ description: '工龄', example: 3,required: true })
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    workyear: number
    @ApiProperty({ description: '头像', example: './head-sculpture/uuid.jpg',required: true })
    @prop()
    @IsNotEmpty({message:"缺少参数"})
    headsculpture: string
}