import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from "nestjs-typegoose";
import { User } from './modules/user.module';
const models = TypegooseModule.forFeature([User]);
@Module({
  imports:[
    TypegooseModule.forRoot("mongodb://localhost:27017/fullstack",{
      useNewUrlParser:true,
      useUnifiedTopology: true,
    	useCreateIndex: true,
    	useFindAndModify: false
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
