import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { wrapWithTheme } from '@tests/helpers';
import { lightTheme } from '@styles/theme';
import { goHome } from '@utils';
import { useMedia, useTheme } from '@hooks';
import Header from './Header';

jest.mock('@hooks', () => ({
    useMedia: jest.fn(),
    useTheme: jest.fn(),
}));

jest.mock('@utils', () => ({
    goHome: jest.fn(),
}));

describe('<Header />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render component', () => {
        const { getByTestId } = render(wrapWithTheme(<Header />));
        expect(getByTestId('header')).toBeInTheDocument();
    });

    it('should render logo and call goHome on click', async () => {
        const { getByTestId } = render(wrapWithTheme(<Header />));
        const logo = getByTestId('logo');
        await userEvent.click(logo);
        expect(logo).toBeInTheDocument();
        expect(goHome).toHaveBeenCalled();
    });

    it('should render navigation and resume button on desktop', () => {
        useMedia.mockReturnValue(false);

        const { getByTestId, queryByTestId } = render(wrapWithTheme(<Header />));

        expect(getByTestId('navigation')).toBeInTheDocument();
        expect(getByTestId('resume-button')).toBeInTheDocument();
        expect(queryByTestId('menu-button')).not.toBeInTheDocument();
    });

    it('should render app menu with icon button on mobile', () => {
        useTheme.mockReturnValue({ theme: lightTheme });
        useMedia.mockReturnValue(true);

        const { getByTestId, queryByTestId } = render(wrapWithTheme(<Header />));

        expect(getByTestId('menu-button')).toBeInTheDocument();
        expect(queryByTestId('navigation')).not.toBeInTheDocument();
        expect(queryByTestId('resume-button')).not.toBeInTheDocument();
    });

    it('should apply elevation class', () => {
        const { getByTestId } = render(wrapWithTheme(<Header elevation />));

        expect(getByTestId('header')).toHaveClass('elevation-2');
    });
});
