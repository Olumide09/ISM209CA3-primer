import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitizensBiodatumDto } from './dto/create-citizens-biodatum.dto';
import { UpdateCitizensBiodatumDto } from './dto/update-citizens-biodatum.dto';
import { CitizensBiodatum } from './entities/citizens-biodatum.entity';
@Injectable()
export class CitizensBiodataService {
  async create(createCitizensBiodatumDto: CreateCitizensBiodatumDto)
   {
    return 'This action adds a new citizensBiodatum';
  }

  findAll() {
    return `This action returns all citizensBiodata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} citizensBiodatum`;
  }

  update(id: number, updateCitizensBiodatumDto: UpdateCitizensBiodatumDto) {
    return `This action updates a #${id} citizensBiodatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} citizensBiodatum`;
  }
}
