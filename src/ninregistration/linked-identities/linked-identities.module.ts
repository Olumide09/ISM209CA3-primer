import { Module } from '@nestjs/common';
import { LinkedIdentitiesService } from './linked-identities.service';
import { LinkedIdentitiesController } from './linked-identities.controller';

@Module({
  controllers: [LinkedIdentitiesController],
  providers: [LinkedIdentitiesService]
})
export class LinkedIdentitiesModule {}
