import { getAllUsers } from "../db/db.mock"

export const getAllUsersService = async () => {
    console.log(`getAllUsersService`)
    return await getAllUsers()
}
