import { Module } from '@nestjs/common';
import { CitizensBiodataService } from './citizens-biodata.service';
import { CitizensBiodataController } from './citizens-biodata.controller';

@Module({
  controllers: [CitizensBiodataController],
  providers: [CitizensBiodataService]
})
export class CitizensBiodataModule {}
