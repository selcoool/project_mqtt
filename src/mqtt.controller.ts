import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class MqttController {
  @MessagePattern('esp32/led')
  handleLedCommand(@Payload() data: any) {
    console.log('🔥 Nhận lệnh từ MQTT:', data);

    if (data.status === 'on') {
      console.log('👉 Bật đèn LED');
    } else if (data.status === 'off') {
      console.log('👉 Tắt đèn LED');
    }
  }
}
