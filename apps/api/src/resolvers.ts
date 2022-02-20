import { Customer } from "./entities/Customer"
import { Employee } from "./entities/Employee"
import { User } from "./entities/User"
import {File} from './entities/File'
import { Invoice } from "./entities/Invoice"
import { Material } from "./entities/Material"
import { Offer } from "./entities/Offer"
import { Project } from "./entities/Project"
import { Task } from "./entities/Task"
import { Unit } from "./entities/Unit"
import { Address } from "./entities/Address"

export const resolvers = {
  Query: {
    address: (id: string) =>  Address.find({ id }),
    addresses: () => Address.find(),

    customer: (id: string) => Customer.findOne({ id }),
    customers: () => Customer.find(),

    employee: (id: string) => Employee.findOne({ id }),
    employees: () => Employee.find(),

    file: (id: string) => File.findOne({ id }),
    files: () => File.find(),

    invoice: (id: string) => Invoice.findOne({ id }),
    invoices: () => Invoice.find(),

    material: (id: string) => Material.findOne({ id }),
    materials: () => Material.find(),

    offer: (id: string) => Offer.findOne({id}),
    offers: () => Offer.find(),

    project: (id: string) => Project.findOne({id}),
    projects: () => Project.findOne(),

    task: (id: string) => Task.findOne({id}),
    tasks: () => Task.find(),

    unit: (id: string) => Unit.findOne({id}),
    units: () => Unit.find(),

    user: (id: string) => User.findOne(id),
    users: () => User.find()
  },
  Mutation: {
    // createAddress: (id: string) => ""
  }
}
