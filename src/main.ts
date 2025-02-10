import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Khởi tạo HTTP API
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('🚀 HTTP API đang chạy trên http://localhost:3000');

  // Khởi tạo MQTT microservice
  const mqttApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://broker.hivemq.com:1883',
        clientId: 'nestjs-mqtt-client',
      },
    },
  );

  await mqttApp.listen();
  console.log('📡 MQTT service đã kết nối!');
}

bootstrap();
