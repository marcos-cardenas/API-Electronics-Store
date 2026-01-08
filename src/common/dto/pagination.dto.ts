import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';

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

  @IsOptional()
  @Min(0)
  @Type(() => Number)
  @IsInt()
  public min?: number;
}
