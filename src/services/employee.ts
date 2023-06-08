import { getAllEmployees } from "../db/db.mock"

export const getAllEmployeesService = async () => {
    console.log(`getAllEmployeesService`)
    return await getAllEmployees()
}
