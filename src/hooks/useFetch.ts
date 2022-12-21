import axios from "axios";
import { useEffect, useState } from "react";

const pause = (ms: number) => ({ then: (fn: Function) => setTimeout(fn, ms) });

export function useFetch<T = unknown>(url: string): [T[] | null, boolean] {

    const [data, setData] = useState<T[] | null>(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get(url)
            .then(resp => setData(resp.data))
            .finally(() => pause(2000).then(() => setIsFetching(false)));
    }, []);

    return [data, isFetching];

}