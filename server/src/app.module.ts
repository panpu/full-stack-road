import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserController } from './user/user.controller';
// import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DbModule } from '@libs/db';

@Module({
  imports: [UserModule,DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
