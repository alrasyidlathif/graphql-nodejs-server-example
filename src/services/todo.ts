import { getAllTodos } from "../db/db.mock"

export const getAllTodosService = async () => {
    console.log(`getAllTodosService`)
    return await getAllTodos()
}
