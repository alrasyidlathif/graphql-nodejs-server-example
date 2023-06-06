import { addCategory, getAllCategories } from "../db/db.mock"

export const getAllCategoriesService = async () => {
    console.log(`getAllCategoriesService`)
    return await getAllCategories()
}

export const addCategoryService = async (category: string): Promise<void> => {
    console.log(`addCategoryService`)
    await addCategory(category)
}
