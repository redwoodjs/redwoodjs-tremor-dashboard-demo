export const schema = gql`
  type CompanyPerformance {
    id: Int!
    date: DateTime!
    Sales: Float!
    Profit: Float!
    Customers: Int!
  }

  type Query {
    companyPerformances: [CompanyPerformance!]! @requireAuth
    companyPerformance(id: Int!): CompanyPerformance @requireAuth
  }

  input CreateCompanyPerformanceInput {
    date: DateTime!
    Sales: Float!
    Profit: Float!
    Customers: Int!
  }

  input UpdateCompanyPerformanceInput {
    date: DateTime
    Sales: Float
    Profit: Float
    Customers: Int
  }

  type Mutation {
    createCompanyPerformance(
      input: CreateCompanyPerformanceInput!
    ): CompanyPerformance! @requireAuth
    updateCompanyPerformance(
      id: Int!
      input: UpdateCompanyPerformanceInput!
    ): CompanyPerformance! @requireAuth
    deleteCompanyPerformance(id: Int!): CompanyPerformance! @requireAuth
  }
`
