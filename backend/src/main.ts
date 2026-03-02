import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS FIX
  app.enableCors({
    origin: "http://localhost:3000",
    methods: "GET,POST",
  });

  // Serve audio files
  app.use('/audio', express.static(join(__dirname, '..', 'audio')));

  await app.listen(4000);
  console.log("Backend running on port 4000");
}
bootstrap();