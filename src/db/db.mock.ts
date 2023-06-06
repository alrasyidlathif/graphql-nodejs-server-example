import products from '../data/products.mock.json';
import categories from '../data/categories.mock.json';

export const getAllProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getAllCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}

export const addCategory = (category: string): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            categories.push(category)
            resolve()
        }, 1000)
    })
}
