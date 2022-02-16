import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  
  const microservice = app.connectMicroservice({
    transport: Transport.TCP,
    options: { 
      host: '0.0.0.0', port: 3010 
    }
  });
  
  await app.startAllMicroservices();
}
bootstrap();
