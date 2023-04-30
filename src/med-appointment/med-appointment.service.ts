import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedAppointment } from './entities/med-appointment.entity';
import { Repository } from 'typeorm';
import { CreateMedAppointmentDto } from './dto/create-med-appointment.dto';
import { UpdateMedAppointmentDto } from './dto/update-med-appointment.dto';

@Injectable()
export class MedAppointmentService {
  constructor(
    @InjectRepository(MedAppointment)
    private readonly productRepository: Repository<MedAppointment>,
  ) {}

  async create(createProductDto: CreateMedAppointmentDto) {
    const petsDetails = this.productRepository.create(createProductDto);
    await this.productRepository.save(petsDetails);
    return {
      msg: 'Data Added successfully',
      status: HttpStatus.OK,
      data: petsDetails,
    };
  }

  async findAll() {
    let findAll = await this.productRepository.findAndCount();
    console.log(findAll[1]);
    if (!findAll) throw new BadRequestException({ error: 'Data Not Found' });
    return {
      status: HttpStatus.OK,
      messsage: 'Data fetch successfully',
      totalData: findAll && findAll.length ? findAll[1] : 0,
      result: findAll && findAll[0],
    };
  }

  async findOne(id: any) {
    const findOne = await this.productRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!findOne) throw new BadRequestException({ error: 'Data Not Found' });
    return {
      status: HttpStatus.OK,
      messsage: 'Data fetch successfully',
      // totalData : findAll && findAll.length ? findAll.length :  0,
      result: findOne,
    };
  }

  async update(id: any, updateProductDto: UpdateMedAppointmentDto) {
    const result: any = await this.productRepository.update(
      { id },
      updateProductDto,
    );
    return {
      status: HttpStatus.OK,
      messsage: 'Data updated successfully',
      totalData: result && result.length ? result.length : 0,
      result: result,
    };
  }

  async remove(id: any) {
    const result: any = await this.productRepository.delete(id);
    return {
      status: HttpStatus.OK,
      messsage: 'Data deleted successfully',
      totalData: result && result.length ? result.length : 0,
      result: result,
    };
  }
}
