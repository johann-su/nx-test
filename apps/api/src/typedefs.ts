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
    address(id: String): Address,
    addresses: [Address],

    customer(id: String): Customer,
    customers: [Customer],

    employee(id: String): Employee,
    employees: [Employee],

    file(id: String): File,
    files: [File],

    invoice(id: String): Invoice,
    invoices: [Invoice],

    material(id: String): Material,
    materials: [Material],

    offer(id:String): Offer,
    offers: [Offer],

    project(id:String): Project,
    projects: [Project],

    task(id:String): Task,
    tasks: [Task],

    unit(id:String): Unit,
    units: [Unit],

    user(id:String): User,
    users: [User]
  }

  type Mutation {
    createAddress: Address,
    editAddress: Address,
    deleteAddress: Boolean,

    # createCustomer: Customer,
    # editCustomer(id:String): Customer,
    # deleteCustomer(id:String): Boolean,

    # createFile: File,
    # editFile(id:String): File,
    # deleteFile(id:String): Boolean,

    # createInvoice: Invoice,
    # editInvoice(id:String): Invoice,
    # deleteInvoice(id:String): Boolean,

    # createMaterial: Material,
    # editMaterial(id:String): Material,
    # deleteMaterial(id:String): Boolean,

    # createOffer: Offer,
    # editOffer(id:String): Offer,
    # deleteOffer(id:String): Boolean,

    # createProject: Project,
    # editProject(id:String): Project,
    # deleteProject(id:String): Boolean,

    # createTask: Task,
    # editTask(id:String): Task,
    # deleteTask(id:String): Boolean,

    # createUnit: Unit,
    # editUnit(id:String): Unit,
    # deleteUnit(id:String): Boolean,

    # createUser: User,
    # editUser(id:String): User,
    # deleteUser(id:String): Boolean
  }
`;
