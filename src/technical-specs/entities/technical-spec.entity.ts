import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Product } from 'src/products/entities/product.entity';

@Entity('technical_specs')
export class TechnicalSpec {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  weight: string;
  @Column('varchar')
  dimensions: string;
  @Column('int')
  warrantyPeriod: number;
  @OneToOne(() => Product, (product) => product.technicalSpec, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  product: Product;
}
