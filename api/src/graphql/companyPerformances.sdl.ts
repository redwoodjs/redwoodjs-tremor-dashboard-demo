export const schema = gql`
  type CompanyPerformance {
    id: Int!
    date: String!
    sales: Float!
    profit: Float!
    customers: Int!
  }

  type Query {
    companyPerformances: [CompanyPerformance!]! @requireAuth
    companyPerformance(id: Int!): CompanyPerformance @requireAuth
  }

  input CreateCompanyPerformanceInput {
    date: String!
    sales: Float!
    profit: Float!
    customers: Int!
  }

  input UpdateCompanyPerformanceInput {
    date: String
    sales: Float
    profit: Float
    customers: Int
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
