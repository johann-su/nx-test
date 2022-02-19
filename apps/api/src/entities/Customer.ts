import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("string")
  name: string;

  @Column("string")
  firstName: string;

  @OneToOne(() => Address)
  @JoinColumn()
  profile: Address;
}
