const setItemLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getItemLocalStorage = (key: string) => {
    const item = localStorage.getItem(key);
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
