import { Product } from './product.type';
import { Categories } from './categories.type';
import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { getAllProductsService } from '../services/product';
import { addCategoryService, getAllCategoriesService } from '../services/category';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllProducts: {
            type: new GraphQLList(Product),
            // args: { id: { type: GraphQLInt } },
            async resolve(parent, args) {
                return await getAllProductsService();
            },
        },
        getAllCategories: {
            type: Categories,
            async resolve(parent, args) {
                return await getAllCategoriesService();
            },
        },
    },
});
  
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCategory: {
            type: GraphQLString,
            args: {
                category: { type: GraphQLString },
            },
            async resolve(parent, args) {
                await addCategoryService(args.category)
                return args.category;
            },
        },
    },
});
  
export default new GraphQLSchema({ query: Query, mutation: Mutation });
