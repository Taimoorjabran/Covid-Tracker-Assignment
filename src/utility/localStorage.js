const setItemsLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getItemsLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export {
    setItemsLocalStorage,
    getItemsLocalStorage
};
