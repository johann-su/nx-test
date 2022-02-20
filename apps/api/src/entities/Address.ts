import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("string")
  street: string

  @Column("string")
  number: string

  @Column("string")
  postCode: string

  @Column("string")
  city: string

  @Column("string")
  geocode: string
}
