import { Controller, Get } from '@nestjs/common';
import { MqttService } from './mqtt.service';

@Controller('sensor')
export class SensorController {
  constructor(private readonly mqttService: MqttService) {}

  @Get('send')
  sendTemperature() {
    const temp = Math.random() * (30 - 20) + 20;
    this.mqttService.sendTemperature(temp);
    return { message: 'Temperature sent', temperature: temp };
  }
}
