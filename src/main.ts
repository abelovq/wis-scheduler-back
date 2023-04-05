import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: 'Access-Control-Allow-Origin',
    credentials: true,
    origin: 'http://localhost:3000',
  });
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  console.log('test');
  await app.listen(3001);
}
bootstrap();
