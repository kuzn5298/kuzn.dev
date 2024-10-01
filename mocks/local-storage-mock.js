const storage = {};

const proto = {
    setItem(key, value) {
        this[key] = value?.toString();
    },
    getItem(key) {
        return this[key] ?? null;
    },
    removeItem(key) {
        delete this[key];
    },
    clear() {
        Object.keys(this).forEach((k) => delete this[k]);
    },
};

Object.setPrototypeOf(storage, proto);

export { storage };
