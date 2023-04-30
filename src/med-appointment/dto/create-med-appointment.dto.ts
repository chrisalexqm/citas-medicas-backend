import { IsString, MinLength } from 'class-validator';

export class CreateMedAppointmentDto {
  @IsString()
  patientName: string;

  @IsString()
  patientPhone: string;

  @IsString()
  email: string;

  @IsString()
  date: string;

  @IsString()
  time: string;

  @IsString()
  site: string;
}
