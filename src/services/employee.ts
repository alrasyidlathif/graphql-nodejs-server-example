import { getKeyFn, mycache } from "../caching/cache"
import { memoization } from "../caching/memoization"
import { getAllEmployees } from "../db/db.mock"

export const getAllEmployeesService = async () => {
    console.log(`getAllEmployeesService`)
    return await getAllEmployees()
}

export const getAllEmployeesServiceWithCache = memoization(
    getAllEmployeesService, getKeyFn, mycache.getMyCache()
)