import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLList } from 'graphql';

export const Product = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        discountPercentage: { type: GraphQLFloat },
        rating: { type: GraphQLFloat },
        stock: { type: GraphQLInt },
        brand: { type: GraphQLString },
        category: { type: GraphQLString },
        thumbnail: { type: GraphQLString },
        images: { type: new GraphQLList(GraphQLString) },
    }),
});
