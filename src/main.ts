import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: 'Access-Control-Allow-Origin',
    credentials: true,
    origin: `${process.env.FRONT_API_URL}`,
  });
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  await app.listen(3001);
}
bootstrap();
