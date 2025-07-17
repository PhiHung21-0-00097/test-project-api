import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init(); // ✅ cần có "await" ở đây!
}
bootstrap();

export default expressApp; // ✅ rất quan trọng để Vercel có thể dùng
