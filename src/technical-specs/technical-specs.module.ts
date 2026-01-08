import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TechnicalSpec } from './entities/technical-spec.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalSpec])],
})
export class TechnicalSpecsModule {}
