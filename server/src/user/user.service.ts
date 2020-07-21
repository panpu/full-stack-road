import { Injectable, Response  } from '@nestjs/common';
import { User} from '@libs/db/modules/user.module';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly UserModule) {}
    async findAll(@Response() res) {
        return await this.UserModule.find().then(val => {
          res.json({ res: val });
        });
      }
}
