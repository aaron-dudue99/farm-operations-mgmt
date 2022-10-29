import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './contact/contact.module';
import { ProductModule } from './product/product.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { CropController } from './crop/crop.controller';
import { CropModule } from './crop/crop.module';
import { ExpenseController } from './expense/expense.controller';
import { ExpenseModule } from './expense/expense.module';
import { InputController } from './input/input.controller';
import { InputModule } from './input/input.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/farm-operations'),
    ContactModule,
    ProductModule,
    CropModule,
    ExpenseModule,
    InputModule,
  ],
  controllers: [
    AppController,
    CropController,
    ExpenseController,
    InputController,
  ],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
