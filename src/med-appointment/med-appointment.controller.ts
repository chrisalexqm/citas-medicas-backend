import { Body, Controller, Delete, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { CreateMedAppointmentDto } from './dto/create-med-appointment.dto';
import { MedAppointmentService } from './med-appointment.service';
import { Request, Response } from 'express';
import { UpdateMedAppointmentDto } from './dto/update-med-appointment.dto';

@Controller('med-appointment')
export class MedAppointmentController {
  constructor(private readonly productsService: MedAppointmentService) {}

  @Post()
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createProductDto: CreateMedAppointmentDto,
  ) {
    // return this.productsService.create(createProductDto);
    let createData = await this.productsService.create(createProductDto);
    return res.send(createData);
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    let findAll: any = await this.productsService.findAll();
    return res.send(findAll);
  }

  @Get('/:id')
  async findOne(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: any,
  ) {
    let getOne = await this.productsService.findOne(id);
    return res.send(getOne);
  }

  @Post('/:id')
  async update(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
    @Body() updateProductDto: UpdateMedAppointmentDto,
  ) {
    let updateData = await this.productsService.update(id, updateProductDto);
    return res.send(updateData);
  }

  @Delete('/:id')
  async remove(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    let deleteData = await this.productsService.remove(+id);
    return res.send(deleteData);
  }
}
