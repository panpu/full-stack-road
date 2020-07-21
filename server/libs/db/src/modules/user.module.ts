import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

//   给添加的数据加入时间戳
// @modelOptions({
//     schemaOptions: {
//         timestamps: true,
//     }
// })

export class User {

    @ApiProperty({ description: '用户名', example: 'user1' })
    @prop()
    name: string
    @ApiProperty({ description: '年龄', example: 23 })
    @prop()
    age: number
    @ApiProperty({ description: '用户名', example: 'admin' })
    @prop()
    username: string
    @ApiProperty({ description: '昵称', example: '管理员' })
    @prop()
    nickname: string
    @ApiProperty({ description: '性别', example: '男' })
    @prop()
    sex: string
    @ApiProperty({ description: '职业', example: '前端工程师' })
    @prop()
    job: string
    @ApiProperty({ description: '工龄', example: 3 })
    @prop()
    workyear: number
}