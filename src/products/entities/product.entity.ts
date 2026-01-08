import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Brand } from 'src/brands/entities/brand.entity';
import { TechnicalSpec } from 'src/technical-specs/entities/technical-spec.entity';
import { User } from 'src/auth/entities/user.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  public id: number;
  @Column('varchar', {
    unique: true,
  })
  public sku: string;

  @Column('varchar')
  public name: string;

  @Column('double')
  public price: number;

  @Column('int')
  public stock: number;

  @Column('simple-array', {
    nullable: true,
  })
  public tags: string[];

  @ManyToOne(() => Brand, (brand) => brand.products, {
    eager: true,
  })
  brand: Brand;

  @OneToOne(() => TechnicalSpec, (technicalSpec) => technicalSpec.product, {
    cascade: ['insert'],
  })
  technicalSpec: TechnicalSpec;

  @ManyToOne(() => User, (user) => user.products)
  user: User;
}
