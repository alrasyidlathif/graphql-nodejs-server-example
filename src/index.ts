import express, { Request, Response } from 'express';
import schema from './schemas';
import { createYoga } from 'graphql-yoga'

const app = express();
const yoga = createYoga({
    schema,
    // graphiql: false
});
app.use(yoga.graphqlEndpoint, yoga);
app.get('/', (req: Request, res: Response) => {
    return res.status(200).send('OK');
});

const PORT = 4000
app.listen({ port: PORT }, () => console.log(`server listen on port ${PORT}`));
