import { getAllTodosByIdsService, getAllTodosByIdsServiceWithCache, getAllTodosService } from "../../services/todo"
import { getAllEmployeesService, getAllEmployeesServiceWithCache } from "../../services/employee"
import DataLoader from "dataloader"
import { lrucache } from "../../caching/cache"

// data loader (ada auto cache time to live forever dari data-loadernya jika default)
// const getAllTodosByIdsServiceLoader = new DataLoader((ids: number[]) => getAllTodosByIdsService(ids)) // {cache: false}

// data loader with lru cache (fail idk)
// const getAllTodosByIdsServiceLoader = new DataLoader((ids: number[]) => getAllTodosByIdsService(ids), {
//     cacheMap: lrucache.getMyCache(),
// })

// data loader with custom caching
const getAllTodosByIdsServiceLoader = new DataLoader((ids: number[]) => getAllTodosByIdsServiceWithCache({
    'id': ids,
    'type': 'array'
}, 'todos'), {cache: false})

export default {
    Query: {
        async employees(parent, args, context, info) {
            // return await getAllEmployeesService()

            // with caching
            return await getAllEmployeesServiceWithCache({
                'type': 'null',
                'id': null
            }, 'employees')
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