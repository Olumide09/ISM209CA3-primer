import { Module } from '@nestjs/common';
import { CitizensBiodataService } from './citizens-biodata.service';
import { CitizensBiodataController } from './citizens-biodata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizensBiodatum } from './entities/citizens-biodatum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [CitizensBiodataController],
  providers: [CitizensBiodataService]
})
export class CitizensBiodataModule {}
