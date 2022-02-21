import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("file")
export class File extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("string")
  link: string
}
