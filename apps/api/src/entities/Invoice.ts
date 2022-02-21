import { Column, Entity, OneToOne } from 'typeorm'
import {File} from './File'
import { Project } from './Project';

@Entity("invoice")
export class Invoice extends File {
  @Column("money")
  amount: number;

  @Column("float")
  vat: number;

  @Column("bool")
  isPaid: boolean;

  @OneToOne(() => Project, project => project.invoice)
  project: Project;
}
