export const schema = gql`
  type SalesPerson {
    id: Int!
    name: String!
    leads: Int!
    sales: String!
    quota: String!
    variance: String!
    region: String!
    status: String!
    deltaType: String!
  }

  type Query {
    salesPeople: [SalesPerson!]! @requireAuth
    salesPerson(id: Int!): SalesPerson @requireAuth
  }

  input CreateSalesPersonInput {
    name: String!
    leads: Int!
    sales: String!
    quota: String!
    variance: String!
    region: String!
    status: String!
    deltaType: String!
  }

  input UpdateSalesPersonInput {
    name: String
    leads: Int
    sales: String
    quota: String
    variance: String
    region: String
    status: String
    deltaType: String
  }

  type Mutation {
    createSalesPerson(input: CreateSalesPersonInput!): SalesPerson! @requireAuth
    updateSalesPerson(id: Int!, input: UpdateSalesPersonInput!): SalesPerson!
      @requireAuth
    deleteSalesPerson(id: Int!): SalesPerson! @requireAuth
  }
`
