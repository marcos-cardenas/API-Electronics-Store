import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateTechnicalSpecDto {
  @IsNotEmpty()
  @IsString()
  weight: string;
  @IsNotEmpty()
  @IsString()
  dimensions: string;
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  warrantyPeriod: number;
}
