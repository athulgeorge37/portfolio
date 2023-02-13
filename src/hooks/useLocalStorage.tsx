import { useEffect, useState } from "react";
import {
    getItemLocalStorage,
    setItemLocalStorage,
} from "~/helper/localStorage";

const useLocalStorage = (key: string, initalValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = getItemLocalStorage(key);
            return item ?? initalValue;
        } catch (e) {
            console.log({ e });
            return initalValue;
        }
    });

    useEffect(() => {
        try {
            setItemLocalStorage(key, storedValue);
        } catch (e) {
            console.log({ e });
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;
