import { Test, TestingModule } from '@nestjs/testing';
import { CitizensBiodataController } from './citizens-biodata.controller';
import { CitizensBiodataService } from './citizens-biodata.service';

describe('CitizensBiodataController', () => {
  let controller: CitizensBiodataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitizensBiodataController],
      providers: [CitizensBiodataService],
    }).compile();

    controller = module.get<CitizensBiodataController>(CitizensBiodataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
