import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBrandDto } from './dto/create-brand.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private readonly logger = new Logger('BrandsService');
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    try {
      const brand = this.brandRepository.create(createBrandDto);
      await this.brandRepository.save(brand);
      return brand;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, page = 1 } = paginationDto;
    const brands = await this.brandRepository.find({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await this.brandRepository.count();
    return {
      data: brands,
      meta: {
        limit,
        page,
        total,
      },
    };
  }

  async findOne(id: number) {
    const brand = await this.brandRepository.findOneBy({ id });
    if (!brand)
      throw new NotFoundException(`The brand with id ${id} was not found`);
    return brand;
  }

  private handleDBExceptions(error: any) {
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
