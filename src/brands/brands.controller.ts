import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import { CreateBrandDto } from './dto/create-brand.dto';
import { BrandsService } from './brands.service';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/interfaces';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @Auth(ValidRoles.ADMIN, ValidRoles.STORE_MANAGER)
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.brandsService.findAll(paginationDto);
  }
}
