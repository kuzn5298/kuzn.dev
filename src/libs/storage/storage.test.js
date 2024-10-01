import storage from './storage';

describe('storage utility', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    afterAll(() => {
        localStorage.clear();
    });

    test('set stores value', () => {
        const KEY = 'key1';
        const VALUE = { test: 'value' };

        storage.set(KEY, VALUE);

        const storedValue = localStorage.getItem(KEY);
        expect(storedValue).toBe(JSON.stringify(VALUE));
    });

    test('get stores string value', () => {
        const KEY = 'key2';
        const VALUE = 'value';

        localStorage.setItem(KEY, VALUE);

        const value = storage.get(KEY);
        expect(value).toBe(VALUE);
    });

    test('get stores object value', () => {
        const KEY = 'key3';
        const VALUE = { test: 'value' };

        localStorage.setItem(KEY, JSON.stringify(VALUE));

        const value = storage.get(KEY);
        expect(value).toEqual(VALUE);
    });

    test('key does not exist', () => {
        const KEY = 'nonexistentKey';

        const value = storage.get(KEY);
        expect(value).toBeNull();
    });

    test('remove stores value', () => {
        const KEY = 'key4';
        const VALUE = { test: 'value' };

        localStorage.setItem(KEY, VALUE);
        storage.remove(KEY);

        const value = localStorage.getItem(KEY);
        expect(value).toBeNull();
    });
});
