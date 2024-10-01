import { isValidThemeId } from '../theme';

describe('isValidThemeId', () => {
    test('valid theme id', () => {
        expect(isValidThemeId('light')).toBeTruthy();
    });

    test('invalid theme id', () => {
        expect(isValidThemeId('red')).toBeFalsy();
    });
});
