import { PartialType } from '@nestjs/mapped-types';

import { CreateTechnicalSpecDto } from './create-technical-spec.dto';

export class UpdateTechnicalSpecDto extends PartialType(
  CreateTechnicalSpecDto,
) {}
