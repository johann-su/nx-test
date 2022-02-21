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
    address: (parent, {id}) =>  Address.find({ id }),
    addresses: () => Address.find(),

    customer: (parent, { id }) => Customer.findOne({ id }),
    customers: () => Customer.find(),

    employee: (parent, { id }) => Employee.findOne({ id }),
    employees: () => Employee.find(),

    file: (parent, { id }) => File.findOne({ id }),
    files: () => File.find(),

    invoice: (parent, { id }) => Invoice.findOne({ id }),
    invoices: () => Invoice.find(),

    material: (parent, { id }) => Material.findOne({ id }),
    materials: () => Material.find(),

    offer: (parent, { id }) => Offer.findOne({id}),
    offers: () => Offer.find(),

    project: (parent, { id }) => Project.findOne({id}),
    projects: () => Project.findOne(),

    task: (parent, { id }) => Task.findOne({id}),
    tasks: () => Task.find(),

    unit: (parent, { id }) => Unit.findOne({id}),
    units: () => Unit.find(),

    user: (parent, { id }) => User.findOne(id),
    users: () => User.find()
  },
  Mutation: {
    // createAddress: () => ""
  }
}
