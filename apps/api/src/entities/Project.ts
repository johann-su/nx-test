import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Customer } from "./Customer";
import { Invoice } from "./Invoice";
import { Offer } from "./Offer";
import { Task } from "./Task";

export enum ProjectStatus {
  inquiry,
  offer,
  accepted,
  scheduled,
  wip, // work in progress
  aproved,
  declined,
  finished,
  stale,
  warranty
}

@Entity("project")
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Customer, customer => customer.projects)
  @JoinColumn()
  customer: Customer;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToMany(() => Task)
  @JoinTable()
  tasks: Task[];

  @Column("date")
  dueDate: Date;

  @Column({
    type: 'enum',
    enum: ProjectStatus,
  })
  status: ProjectStatus;

  @OneToOne(() => Offer, offer => offer.project)
  @JoinColumn()
  offer: Offer;

  @OneToOne(() => Invoice, invoice => invoice.project)
  @JoinColumn()
  invoice: Invoice;
}
