import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { BrandsModule } from './brands/brands.module';
import { TechnicalSpecsModule } from './technical-specs/technical-specs.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CommonModule,
    SeedModule,
    BrandsModule,
    TechnicalSpecsModule,
    AuthModule,
  ],
})
export class AppModule {}
