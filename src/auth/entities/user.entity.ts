import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from 'src/products/entities/product.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('varchar')
  public fullName: string;

  @Column('varchar', {
    unique: true,
  })
  public email: string;

  @Column('varchar')
  public password: string;

  @Column('simple-array')
  public roles: string[];

  @OneToMany(() => Product, (product) => product.user)
  public products: Product[];
}
