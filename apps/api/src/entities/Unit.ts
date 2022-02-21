import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("unit")
export class Unit extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("string")
  unit: string
}
