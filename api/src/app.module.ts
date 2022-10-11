import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/farm-operations'),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
