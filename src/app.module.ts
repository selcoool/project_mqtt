import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttService } from './mqtt.service';
import { MqttController } from './mqtt.controller';
import { SensorController } from './sensor.controller';

@Module({
  imports: [],
  controllers: [AppController,SensorController, MqttController],
  providers: [AppService,MqttService],
})
export class AppModule {}
