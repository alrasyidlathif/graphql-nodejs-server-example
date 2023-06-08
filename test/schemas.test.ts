import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import employeeType from '../src/schemas/types/employee.type'
import { graphql } from 'graphql'

// Mock object
const mocks = {
    Int: () => 1,
    Float: () => 1.0,
    String: () => 'Test',
    ID: () => 'ID',
    Boolean: () => true,
}
const preserveResolvers = false
 
// Create a new schema with mocks
const schemaEmployeeWithMocks = addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs: employeeType }),
    mocks,
    preserveResolvers
})

describe("testing the schemas", () => {
    test("test Employee", () => {
        const query = /* GraphQL */ `
            query Query {
                employees {
                    id
                    firstName
                    lastName
                    age
                    birthDate
                    todos {
                        id
                        todo
                        completed
                    }
                }
            }
        `

        // graphql({
        //     schema: schemaEmployeeWithMocks,
        //     source: query
        // }).then(r => console.log(JSON.stringify(r)))

        // a mock of list return list with length 2 (always?)
        const received = {"data":{"employees":[{"id":"ID","firstName":"Test","lastName":"Test","age":1,"birthDate":"Test","todos":[{"id":"ID","todo":"Test","completed":true},{"id":"ID","todo":"Test","completed":true}]},{"id":"ID","firstName":"Test","lastName":"Test","age":1,"birthDate":"Test","todos":[{"id":"ID","todo":"Test","completed":true},{"id":"ID","todo":"Test","completed":true}]}]}}
        
        return expect(
            graphql({
                schema: schemaEmployeeWithMocks,
                source: query
            })
        ).resolves.toEqual(received)
    })
})