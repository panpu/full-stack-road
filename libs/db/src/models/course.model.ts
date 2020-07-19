import { prop, Ref, arrayProp } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger';
import { Episode } from './episode.model';


export class Course {
    @ApiModelProperty({
        description:'课程名称',
        example:'nestjs入门级教程'
    })
    @prop()
    name:string

    @ApiModelProperty({
        description:'简介',
        example:'使用nestjs/cli创建服务端应用，并输出swagger文档'
    })
    @ApiModelProperty()
    @prop()
    description:string

    @ApiModelProperty({
        description:'封面图片',
        example:'https://example.cpm/sjag23432gkk.png'
    })
    @ApiModelProperty()
    @prop()
    cover:string

    @arrayProp({itemsRef:'Episode'})
    episodes:Ref<Episode>[]
}