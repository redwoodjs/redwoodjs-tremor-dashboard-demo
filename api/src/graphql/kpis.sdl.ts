export const schema = gql`
  type Kpi {
    id: Int!
    title: String!
    metric: String!
    progress: Float!
    metricTarget: String!
    delta: String!
    deltaType: String!
  }

  type Query {
    kpis: [Kpi!]! @requireAuth
    kpi(id: Int!): Kpi @requireAuth
  }

  input CreateKpiInput {
    title: String!
    metric: String!
    progress: Float
    metricTarget: String!
    delta: String!
    deltaType: String!
  }

  input UpdateKpiInput {
    title: String
    metric: String
    progress: Float
    metricTarget: String
    delta: String
    deltaType: String
  }

  type Mutation {
    createKpi(input: CreateKpiInput!): Kpi! @requireAuth
    updateKpi(id: Int!, input: UpdateKpiInput!): Kpi! @requireAuth
    deleteKpi(id: Int!): Kpi! @requireAuth
  }
`
