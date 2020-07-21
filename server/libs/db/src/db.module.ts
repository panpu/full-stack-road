import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from "nestjs-typegoose";
@Module({
  imports:[
    TypegooseModule.forRoot("mongodb://localhost:27017",{
      useNewUrlParser:true,
      useUnifiedTopology: true,
    	useCreateIndex: true,
    	useFindAndModify: false
    })
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
