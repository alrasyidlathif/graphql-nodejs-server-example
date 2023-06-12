import { getAllTodosByIdsService, getAllTodosService } from "../../services/todo"
import { getAllEmployeesService } from "../../services/employee"
import DataLoader from "dataloader"

const getAllTodosByIdsServiceLoader = new DataLoader((ids: number[]) => getAllTodosByIdsService(ids))

export default {
    Query: {
        async employees(parent, args, context, info) {
            return await getAllEmployeesService()
        }
    },
    Employee: { // nested query of Employee
        async todos(employee: {id: number}) { // employee as a parent parameter
            // const todos = await getAllTodosByIdsService([employee.id]) // one by one call (13 calls this case)
            // return todos[0]

            const todos = await getAllTodosByIdsServiceLoader.load(employee.id) // batching call
            return todos
        },
    },
}