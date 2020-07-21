import { prop, modelOptions } from '@typegoose/typegoose';
  import {ApiProperty} from '@nestjs/swagger';
 
  // 给添加的数据加入时间戳
  @modelOptions({
    schemaOptions:{
    timestamps:true
    }
})
  
  export class User{
  
  @ApiProperty({description:'用户名',example:'user1'})
  
    @prop()
  
    username: string
  
    @ApiProperty({description:'密码',example:'password1'})
    @prop()
  
    password: string
    
  }