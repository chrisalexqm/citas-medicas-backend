import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedAppointmentModule } from './med-appointment/med-appointment.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-16.railway.app',
      port: 7817,
      username: 'postgres',
      password: 'Z1pXql1IeuZChCfdgbgF',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MedAppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
