import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Address } from "./Address";
import { User } from "./User";

@Entity()
export class Employee extends User {
  @Column("string")
  name: string

  @Column("money")
  salary: number

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address

  @Column("string")
  profession: string
}
