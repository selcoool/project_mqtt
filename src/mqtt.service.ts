import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class MqttService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://broker.hivemq.com:1883',
      },
    });
  }

  sendTemperature(temperature: number) {
    const payload = { temperature };
    this.client.emit('esp32/sensor', payload);
    console.log('📤 Gửi nhiệt độ:', payload);
  }
}
