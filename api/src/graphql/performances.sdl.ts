export const schema = gql`
  type Performance {
    id: Int!
    date: String!
    sales: Float!
    profit: Float!
    customers: Int!
  }

  type Query {
    performances: [Performance!]! @requireAuth
    performance(id: Int!): Performance @requireAuth
  }

  input CreatePerformanceInput {
    date: String!
    sales: Float!
    profit: Float!
    customers: Int!
  }

  input UpdatePerformanceInput {
    date: String
    sales: Float
    profit: Float
    customers: Int
  }

  type Mutation {
    createPerformance(input: CreatePerformanceInput!): Performance! @requireAuth
    updatePerformance(id: Int!, input: UpdatePerformanceInput!): Performance!
      @requireAuth
    deletePerformance(id: Int!): Performance! @requireAuth
  }
`
