import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateTechnicalSpecDto } from 'src/technical-specs/dto/create-technical-spec.dto';

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
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  brandId: number;
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateTechnicalSpecDto)
  technicalSpec: CreateTechnicalSpecDto;
}
