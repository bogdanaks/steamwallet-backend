import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"

import { AppModule } from "./modules/app/app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: [
      "http://127.0.0.1:5175",
      "http://localhost:5175",
      "http://127.0.0.1:5174",
      "http://localhost:5174",
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "http://localhost:8888",
      "http://localhost:4321",
    ],
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
  app.setGlobalPrefix("api/v1")
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(5000)
}
bootstrap()
