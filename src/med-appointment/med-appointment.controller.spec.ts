import { Test, TestingModule } from '@nestjs/testing';
import { MedAppointmentController } from './med-appointment.controller';

describe('MedAppointmentController', () => {
  let controller: MedAppointmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedAppointmentController],
    }).compile();

    controller = module.get<MedAppointmentController>(MedAppointmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
