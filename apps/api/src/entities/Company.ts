import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("string")
  name: string;
}
