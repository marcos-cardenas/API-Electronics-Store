/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @Matches(/^[A-Z][A-Z0-9-]{4,29}$/)
  sku: string;
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  name: string;
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  price: number;
  @IsInt()
  @Min(0)
  @Type(() => Number)
  stock: number;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
