export default /* GraphQL */ `
    type Quote {
        id: ID!
        quote: String
        author: String
    }

    type Query {
        quotes: [Quote]
    }
`