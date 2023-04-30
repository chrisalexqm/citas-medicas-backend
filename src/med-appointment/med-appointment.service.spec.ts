import { Test, TestingModule } from '@nestjs/testing';
import { MedAppointmentService } from './med-appointment.service';

describe('MedAppointmentService', () => {
  let service: MedAppointmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedAppointmentService],
    }).compile();

    service = module.get<MedAppointmentService>(MedAppointmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
