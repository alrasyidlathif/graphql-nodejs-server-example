import products from '../data/products.mock.json';
import categories from '../data/categories.mock.json';
import users from '../data/users.mock.json';
import quotes from '../data/quotes.mock.json';
import todos from '../data/todos.mock.json';
import employees from '../data/employee.mock.json';

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

export const getAllUsers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users)
        }, 1000)
    })
}

export const getAllQuotes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(quotes)
        }, 1000)
    })
}

export const getAllTodos = (): Promise<any[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(todos)
        }, 1000)
    })
}

export const getAllEmployees = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(employees)
        }, 1000)
    })
}
