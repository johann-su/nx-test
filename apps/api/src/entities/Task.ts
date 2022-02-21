import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Material } from "./Material";
import { Unit } from "./Unit";

@Entity("task")
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("string")
  name: string;

  @Column("string")
  description: string;

  @ManyToMany(() => Material)
  @JoinTable()
  materials: Material[]

  @Column("number")
  progressPerMinute: number

  @ManyToOne(() => Unit)
  @JoinColumn()
  unit: Unit
}
