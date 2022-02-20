import {gql} from 'apollo-server-express'

export const typeDefs = gql`
  type Address {
    id: String,
    street: String,
    number: String,
    postCode: String,
    city: String,
    geocode: String
  }

  type Customer {
    id: String,
    name: String,
    firstName: String,
    address: Address,
    projects: [Project]
  }

  type Employee {
    id: String,
    email: String,
    name: String,
    salary: Float,
    address: Address,
    profession: String
  }

  type File {
    id: String,
    link: String
  }

  type Invoice {
    id: String,
    link: String,
    amount: Float,
    vat: Float,
    isPaid: Boolean,
    project: Project
  }

  type Material {
    id: String,
    price: Float,
    usage: Float
  }

  type Offer {
    id: String,
    link: String,
    amount: Float,
    accepted: Boolean,
    declined: Boolean,
    project: Project
  }

  enum ProjectStatus {
    inquiry
    offer
    accepted
    scheduled
    wip
    aproved
    declined
    finished
    stale
    warranty
  }

  type Project {
    id: String,
    customer: Customer,
    address: Address,
    tasks: [Task],
    dueDate: Float,
    status: ProjectStatus,
    offer: Offer,
    invoice: Invoice
  }

  type Task {
    id: String,
    name: String,
    description: String,
    materials: [Material],
    progressPerMinute: Float,
    unit: Unit
  }

  type Unit {
    id: String,
    unit: String
  }

  type User {
    id: String,
    email: String
  }

  type Query {
    address: Address,
    addresses: [Address],

    customer: Customer,
    customers: [Customer],

    employee: Employee,
    employees: [Employee],

    file: File,
    files: [File],

    invoice: Invoice,
    invoices: [Invoice],

    material: Material,
    materials: [Material],

    offer: Offer,
    offers: [Offer],

    project: Project,
    projects: [Project],

    task: Task,
    tasks: [Task],

    unit: Unit,
    units: [Unit],

    user: User,
    users: [User]
  }

  type Mutation {
    createAddress: Address,
    editAddress: Address,
    deleteAddress: Boolean,

    createCustomer: Customer,
    editCustomer: Customer,
    deleteCustomer: Boolean,

    createFile: File,
    editFile: File,
    deleteFile: Boolean,

    createInvoice: Invoice,
    editInvoice: Invoice,
    deleteInvoice: Boolean,

    createMaterial: Material,
    editMaterial: Material,
    deleteMaterial: Boolean,

    createOffer: Offer,
    editOffer: Offer,
    deleteOffer: Boolean,

    createProject: Project,
    editProject: Project,
    deleteProject: Boolean,

    createTask: Task,
    editTask: Task,
    deleteTask: Boolean,

    createUnit: Unit,
    editUnit: Unit,
    deleteUnit: Boolean,

    createUser: User,
    editUser: User,
    deleteUser: Boolean
  }
`;
