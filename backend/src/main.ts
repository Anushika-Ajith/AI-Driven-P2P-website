import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS FIX
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
    ],
    methods: 'GET,POST',
  });

  // Serve audio files
  app.use('/audio', express.static(join(__dirname, '..', 'audio')));

  const port = Number.parseInt(process.env.PORT ?? "4000", 10);
  await app.listen(port);
  console.log(`Backend running on port ${port}`);
}
bootstrap();