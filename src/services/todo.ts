import { getAllTodos } from "../db/db.mock"

export const getAllTodosService = async (): Promise<any[]> => {
    console.log(`getAllTodosService`)
    return await getAllTodos()
}

export const getAllTodosByIdsService = async (ids: number[]): Promise<any[]> => {
    console.log(`getAllTodosByIdsService`)
    console.log(ids)
    const todos = await getAllTodos()
    const result = []
    for (const id of ids) {
        result.push(todos.filter((todo) => todo.userId === id))
    }
    return result;
}
