export default /* GraphQL */ `
    type Todo {
        id: ID!
        todo: String
        completed: Boolean
        userId: ID!
    }

    type Employee {
        id: ID!
        firstName: String
        lastName: String
        age: Int
        birthDate: String
        todos: [Todo]
    }

    type Query {
        employees: [Employee]
    }
`