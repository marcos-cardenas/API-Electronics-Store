/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  @IsInt()
  public limit?: number;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  @IsInt()
  public page?: number;
}
