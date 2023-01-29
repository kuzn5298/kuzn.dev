const store = typeof localStorage === 'object' ? localStorage : {};

const storage = {
    set(key, value) {
        const serialize = JSON.stringify(value);
        store[key] = serialize;
    },
    get(key) {
        if (!store[key]) return null;
        const value = store[key];
        try {
            const deserialize = JSON.parse(value);
            return deserialize;
        } catch (e) {
            return value;
        }
    },
    remove(key) {
        delete store[key];
    },
};

export default storage;
