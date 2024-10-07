import React from 'react';
import { render } from '@testing-library/react';
import { wrapWithTheme } from '@tests/helpers';
import { NAVIGATION } from '@constants';
import Navigation from './Navigation';

describe('<Navigation />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render component', () => {
        const { getByTestId } = render(wrapWithTheme(<Navigation />));
        expect(getByTestId('navigation')).toBeInTheDocument();
    });

    it('should render navigation links', () => {
        const { getByTestId, getByText } = render(<Navigation />);

        expect(getByTestId('navigation')).toBeInTheDocument();

        NAVIGATION.forEach((nav) => {
            expect(getByText(nav.name)).toBeInTheDocument();
        });
    });

    it('should link to the correct routes', () => {
        const { getByText } = render(<Navigation />);

        NAVIGATION.forEach((nav) => {
            expect(getByText(nav.name)).toHaveAttribute('href', nav.to);
        });
    });
});
