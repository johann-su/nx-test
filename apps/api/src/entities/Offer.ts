import { Column, Entity, OneToOne } from 'typeorm';
import {File} from './File'
import { Project } from './Project';

@Entity()
export class Offer extends File {
  @Column("money")
  amount: number;

  @Column("bool")
  accepted: boolean;

  @Column("bool")
  declined: boolean;

  @OneToOne(() => Project, project => project.invoice)
  project: Project;
}
