import { Product } from './types/product.type';
import { Categories } from './types/categories.type';
import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { getAllProductsService } from '../services/product';
import { addCategoryService, getAllCategoriesService } from '../services/category';
import { mergeTypeDefs } from '@graphql-tools/merge';
import quotesType from './types/quotes.type';
import usersType from './types/users.type';
import { makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema';
import quotesResolver from './resolvers/quotes.resolver';
import usersResolver from './resolvers/users.resolver';
import employeeType from './types/employee.type';
import employeeResolver from './resolvers/employee.resolver';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        products: {
            type: new GraphQLList(Product),
            // args: { id: { type: GraphQLInt } },
            async resolve(parent, args) {
                return await getAllProductsService();
            },
        },
        categories: {
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

const quotesAndUsersSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([quotesType, usersType, employeeType]),
    resolvers: [quotesResolver, usersResolver, employeeResolver]
})
const categoriesAndProductsSchema = new GraphQLSchema({ query: Query, mutation: Mutation });

export default mergeSchemas({
    schemas: [quotesAndUsersSchema, categoriesAndProductsSchema]
})
