import {prop} from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger';

export class Episode{

    @ApiModelProperty({
        description:'标题',
        example:'项目简介及安装nestjs'
    })
    @prop()
    title:string

    @ApiModelProperty({
        description:'',
        example:'viedo.mp4'
    })
    @prop()
    file:string

}