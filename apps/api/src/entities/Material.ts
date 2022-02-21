import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("material")
export class Material extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("money")
  price: number

  @Column("float")
  usage: number // material needed per m2/meter etc
}
