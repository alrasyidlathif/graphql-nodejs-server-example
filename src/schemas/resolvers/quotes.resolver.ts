import { getAllCategoriesService } from "../../services/category"
import { getAllQuotesService } from "../../services/quote"

export default {
    Query: {
        async quotes(parent, args, context, info) {
            return await getAllQuotesService()
        }
    }
}