import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
