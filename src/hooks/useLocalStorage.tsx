"use client";
import { useEffect, useState } from "react";
import {
    getItemLocalStorage,
    setItemLocalStorage,
} from "~/helper/localStorage";

function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T | undefined>();

    useEffect(() => {
        const value = getItemLocalStorage(key) as T | undefined;

        setStoredValue(value ?? initialValue);
    }, []);

    useEffect(() => {
        if (storedValue) {
            setItemLocalStorage(key, storedValue);
        }
    }, [storedValue]);

    return [storedValue as T, setStoredValue] as const;
}

export default useLocalStorage;
