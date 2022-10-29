import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InputService } from './input.service';
import { InputSchema } from './schemas/input.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Input', schema: InputSchema }]),
  ],
  providers: [InputService],
  exports: [InputService],
})
export class InputModule {}
