import { useEffect, useState } from "react";
import {
    getItemLocalStorage,
    setItemLocalStorage,
} from "~/helper/localStorage";

const useLocalStorage = <T,>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T | undefined>();

    useEffect(() => {
        const value = getItemLocalStorage(key) as T | undefined;

        setStoredValue(value ?? initialValue);
    }, [initialValue, key]);

    useEffect(() => {
        if (storedValue) {
            setItemLocalStorage(key, storedValue);
        }
    }, [key, storedValue]);

    return [storedValue as T, setStoredValue] as const;
};

export default useLocalStorage;
