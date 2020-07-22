import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SwaggerModule , DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));//配置静态资源
  //  或者
  //  app.useStaticAssets('public',{
  //    prefix:'/static/'   //配置虚拟目录 上面一样
  //  })
  const options = new DocumentBuilder()
  .setTitle('nest入门接口标题')
  .setDescription('使用nest书写的常用性接口') // 文档介绍
  .setVersion('1.0.0') // 文档版本
  .addTag('用户,安全') // 每个tag标签都可以对应着几个@ApiTags('用户,安全') 然后被ApiTags注释，字符串一致的都会变成同一个标签下的
  // .setBasePath('http://localhost:5000')
  .build();
  const document = SwaggerModule.createDocument(app,options);
  app.useGlobalPipes(new ValidationPipe()) //开启一个全局验证管道
  SwaggerModule.setup('swagger',app,document)
  await app.listen(3000);
  console.log(`项目已启动，请访问：http://localhost:3000`)
}
bootstrap();
