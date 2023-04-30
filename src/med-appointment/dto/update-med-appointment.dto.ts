import { PartialType } from '@nestjs/mapped-types';
import { CreateMedAppointmentDto } from './create-med-appointment.dto';

export class UpdateMedAppointmentDto extends PartialType(
  CreateMedAppointmentDto,
) {}
