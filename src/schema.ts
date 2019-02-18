// import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from 'path';

const AllTypes: any = fileLoader(
    path.join(__dirname,'./api/**/*.graphql')
)

const AllResolvers: any = fileLoader(
    path.join(__dirname,"./api/**/*.resolvers.*")
)

const mergedTypes: any =  mergeTypes(AllTypes);
const mergedResolvers: any = mergeResolvers(AllResolvers);

const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
})

export default schema;