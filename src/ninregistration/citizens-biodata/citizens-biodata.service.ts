import { Injectable } from '@nestjs/common';
import { CreateCitizensBiodatumDto } from './dto/create-citizens-biodatum.dto';
import { UpdateCitizensBiodatumDto } from './dto/update-citizens-biodatum.dto';

@Injectable()
export class CitizensBiodataService {
  create(createCitizensBiodatumDto: CreateCitizensBiodatumDto) {
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
