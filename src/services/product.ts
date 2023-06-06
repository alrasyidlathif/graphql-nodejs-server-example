import { getAllProducts } from "../db/db.mock"

export const getAllProductsService = async () => {
    console.log(`getAllProductsService`)
    return await getAllProducts()
}
