import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: 'Access-Control-Allow-Origin',
    credentials: true,
    origin: 'http://localhost:3000',
  });
  await app.listen(3001);
}
bootstrap();
