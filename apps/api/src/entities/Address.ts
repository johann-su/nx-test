import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("string")
  street: string;

  @Column("string")
  number: string;

  @Column("number")
  postCode: number;

  @Column("string")
  city: string;
}
