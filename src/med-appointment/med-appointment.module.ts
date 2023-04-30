import { Module } from '@nestjs/common';
import { MedAppointmentService } from './med-appointment.service';
import { MedAppointmentController } from './med-appointment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedAppointment } from './entities/med-appointment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedAppointment])],
  providers: [MedAppointmentService],
  controllers: [MedAppointmentController],
})
export class MedAppointmentModule {}
