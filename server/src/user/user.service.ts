import { Injectable, Response,Param  } from '@nestjs/common';
import { User} from '@libs/db/modules/user.module';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly UserModule) {}
    // 查询某个用户
    async findUser(@Param() id,@Response() res) {
        return await this.UserModule.find({"_id":id}).then(val => {
          res.json({ res: val });
        });
    }
    // 查询全部用户
    async findAll(@Response() res) {
      return await this.UserModule.find().then(val => {
        res.json({ res: val });
      });
    }
    // 新增用户
    async creatUser(@Response() res,param) {
      return await this.UserModule.find({"useraccount":param.useraccount}).then(val => {
        if(val.length>0){
          res.json({ res: '用户名已存在，请重试' });
        }else{
          this.UserModule.create(param)
          res.json({ res: '注册成功，请登录' });
        }
      });
    }
}
