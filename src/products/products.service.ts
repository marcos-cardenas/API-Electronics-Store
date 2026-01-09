/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';

import { CreateProductDto, UpdateProductDto } from './dto';
import { Product } from './entities/product.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import { BrandsService } from '../brands/brands.service';
import { Brand } from '../brands/entities/brand.entity';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly brandsService: BrandsService,
  ) {}
  async create(createProductDto: CreateProductDto, user: User) {
    const { brandId, technicalSpec } = createProductDto;
    // Llamada al metodo para verificar si existe el id de la marca
    // para despues pasar a la creacion del producto
    const brand = await this.brandsService.findOne(brandId);
    try {
      const product = this.productRepository.create({
        ...createProductDto,
        brand,
        technicalSpec,
        user,
      });
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, page = 1, min = 0 } = paginationDto;
    const products = await this.productRepository.find({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        stock: MoreThanOrEqual(min),
      },
    });
    const total = await this.productRepository.count({});
    return {
      data: products,
      meta: {
        page: page,
        limit,
        total,
      },
    };
  }

  async findOne(id: number) {
    // producto que viene con la data de los detalles tecnicos del producto
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['technicalSpec'],
    });
    if (!product)
      throw new NotFoundException(`The product with id ${id} was not found`);
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    // Eliminacion de los detalles tecnicos del DTO
    delete updateProductDto.technicalSpec;
    const { brandId } = updateProductDto;
    let brand: Brand;
    let product;

    // Comprobar si viene en el DTO el id de la llave foranea
    // Si viene en el DTO para realizar el cambio por otra marca
    if (brandId) {
      brand = await this.brandsService.findOne(brandId);
      product = await this.productRepository.preload({
        id,
        ...updateProductDto,
        brand: {
          id: brand.id,
        },
      });
    } else {
      product = await this.productRepository.preload({
        id,
        ...updateProductDto,
      });
    }

    if (!product)
      throw new NotFoundException(`The product with id ${id} was not found`);
    try {
      await this.productRepository.save(product);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return product;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }

  private handleDBExceptions(error: any) {
    if (error.sqlState === '23000')
      throw new ConflictException(error.sqlMessage);

    this.logger.error(error.sqlMessage);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  async deleteAllProducts() {
    const query = this.productRepository.createQueryBuilder('product');

    try {
      await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
