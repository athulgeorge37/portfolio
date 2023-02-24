// helper functions for localStorage

const setItemLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getItemLocalStorage = (key: string) => {
    const item = localStorage.getItem(key);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return item === null ? undefined : JSON.parse(item);
};

const removeItemLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};

const clearLocalStorage = () => {
    localStorage.clear();
};

export {
    setItemLocalStorage,
    getItemLocalStorage,
    removeItemLocalStorage,
    clearLocalStorage,
};
