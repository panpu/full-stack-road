import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger';

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class User {

    @ApiModelProperty({description:'用户名',example:'username'})
    @prop()
    username:string

    @ApiModelProperty({description:'密码',example:'password'})
    @prop()
    password:string
}