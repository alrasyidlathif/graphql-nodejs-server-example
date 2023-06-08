import { getAllTodosService } from "../../services/todo"
import { getAllEmployeesService } from "../../services/employee"

export default {
    Query: {
        async employees(parent, args, context, info) {
            return await getAllEmployeesService()
        }
    },
    Employee: {
        async todos(employee: {id: number}) { // employee as a parent parameter
            const todos = await getAllTodosService() as {userId: number}[]
            return todos.filter((todo) => todo.userId === employee.id);
        },
    },
}