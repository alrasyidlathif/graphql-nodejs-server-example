import { getAllUsersService } from "../../services/user"

export default {
    Query: {
        async users(parent, args, context, info) {
            return await getAllUsersService()
        }
    }
}