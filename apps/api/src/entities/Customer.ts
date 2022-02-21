import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Project } from "./Project";

@Entity("customer")
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("string")
  name: string

  @Column("string")
  firstName: string

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address

  @OneToMany(() => Project, project => project.customer)
  projects: Project[]
}
