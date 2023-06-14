import NodeCache from "node-cache";

class MyCache {
    private static instance: MyCache
    private mychache: NodeCache

    private constructor() {
        this.mychache = new NodeCache( { stdTTL: 300, checkperiod: 60 } );
    }

    public static getInstance(): MyCache {
        if (!MyCache.instance) {
            MyCache.instance = new MyCache()
        }

        return MyCache.instance
    }

    getMyCache(): NodeCache {
        return this.mychache
    }
};

export const mycache = MyCache.getInstance();

type MyString = {
    id: string,
    type: 'string'
}

type MyNumber = {
    id: number,
    type: 'number'
}

type MyArray = {
    id: any[],
    type: 'array'
}

type MyNull = {
    id: null
    type: 'null'
}

export type GetKeyFnArgsType = MyString | MyNumber | MyArray | MyNull

export const getKeyFn = (args: GetKeyFnArgsType, additionContext: string) => {
    if (args.type === 'string') {
        return additionContext+':'+args.id
    }
    else if (args.type === 'number') {
        return additionContext+':'+String(args.id)
    }
    else if (args.type === 'array') {
        const ids = [...args.id]
        ids.sort()
        return additionContext+':'+JSON.stringify(args.id)
    }
    else if (args.type === 'null') {
        return additionContext+':'+'ALL'
    }
    else {
        throw new Error('invalid args')
    }
};