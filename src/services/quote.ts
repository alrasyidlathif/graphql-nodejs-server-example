import { getAllQuotes } from "../db/db.mock"

export const getAllQuotesService = async () => {
    console.log(`getAllQuotesService`)
    return await getAllQuotes()
}
