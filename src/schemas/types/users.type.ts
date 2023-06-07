export default /* GraphQL */ `
    type Coordinates {
        lat: Float
        lng: Float
    }

    type Address {
        address: String
        city: String
        coordinates: Coordinates
    }

    type User {
        id: ID!,
        firstName: String,
        lastName: String,
        age: Int,
        birthDate: String,
        address: Address
    }

    type Query {
        users: [User]
    }
`