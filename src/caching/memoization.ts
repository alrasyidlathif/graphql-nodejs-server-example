import NodeCache from "node-cache";
import { GetKeyFnArgsType } from "./cache";

export const memoization = (
    cachedFn: Function, 
    getKeyFn: Function, 
    cache: NodeCache
) => async (args: GetKeyFnArgsType, additionContext: string) => {
    const key = getKeyFn(args, additionContext);

    try {
        const cacheVal = await cache.get(key);
        if (cacheVal) {
            console.log('Cache Hit!');
            return cacheVal;
        }
    } catch (error) {
        console.log(error)
    }

    const res = await cachedFn(args.id);

    try {
        cache.set(key, res);
    } catch (error) {
        console.log(error)
    }
  
    return res;
};
