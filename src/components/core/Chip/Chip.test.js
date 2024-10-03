import React from 'react';
import { rgba } from 'polished';
import { lightTheme } from '@styles/theme';
import { wrapWithTheme } from '@tests/helpers';
import { render, screen } from '@testing-library/react';
import Chip from './Chip';

describe('<Chip />', () => {
    it('should render component with default props', () => {
        render(wrapWithTheme(<Chip>Default Chip</Chip>));
        const chipElement = screen.getByText(/default chip/i);

        expect(chipElement).toBeInTheDocument();
        expect(chipElement).toHaveStyle({
            backgroundColor: rgba(lightTheme.palette.primary.main, 0.75),
            fontSize: '1rem',
            padding: '0.25rem 0.5rem',
        });
    });

    it('should render a correct chip color', () => {
        const { getByTestId } = render(
            wrapWithTheme(
                <>
                    <Chip color="primary" data-testid="primary-chip">
                        Test Chip
                    </Chip>
                    <Chip color="secondary" data-testid="secondary-chip">
                        Test Chip
                    </Chip>
                </>,
                lightTheme
            )
        );

        expect(getByTestId('primary-chip')).toHaveStyle(
            `backgroundColor: ${rgba(lightTheme.palette.primary.main, 0.75)}`
        );
        expect(getByTestId('secondary-chip')).toHaveStyle(
            `backgroundColor: ${lightTheme.palette.common.darkGray}`
        );
    });

    it('should render a correct chip size', () => {
        const { getByTestId } = render(
            wrapWithTheme(
                <>
                    <Chip size="small" data-testid="small-chip">
                        Test Chip
                    </Chip>
                    <Chip size="medium" data-testid="medium-chip">
                        Test Chip
                    </Chip>
                    <Chip size="large" data-testid="large-chip">
                        Test Chip
                    </Chip>
                    <Chip size="inherit" data-testid="inherit-chip">
                        Test Chip
                    </Chip>
                </>,
                lightTheme
            )
        );

        expect(getByTestId('small-chip')).toHaveStyle({
            fontSize: '0.75rem',
            padding: '0.125rem 0.25rem',
        });
        expect(getByTestId('medium-chip')).toHaveStyle({
            fontSize: '1rem',
            padding: '0.25rem 0.5rem',
        });
        expect(getByTestId('large-chip')).toHaveStyle({
            fontSize: '1.5rem',
            padding: '0.5rem 1rem',
        });
        expect(getByTestId('inherit-chip')).toHaveStyle({
            fontSize: 'inherit',
            padding: 'inherit',
        });
    });

    it('should render a correct chip border color', () => {
        const { getByTestId } = render(
            wrapWithTheme(
                <Chip borderColor="primary" data-testid="primary-chip">
                    Test Chip
                </Chip>,
                lightTheme
            )
        );

        expect(getByTestId('primary-chip')).toHaveStyle(
            `borderLeftColor: ${lightTheme.palette.primary.main};`
        );
    });

    it('should render a correct chip custom props', () => {
        const { getByTestId } = render(
            wrapWithTheme(
                <Chip color="#ff0000" borderColor="#00ff00" data-testid="custom-chip">
                    Test Chip
                </Chip>
            )
        );

        expect(getByTestId('custom-chip')).toHaveStyle({
            backgroundColor: '#ff0000',
            borderLeftColor: '#00ff00',
        });
    });

    it('should render a chip with different props (snapshot test)', () => {
        const { asFragment } = render(
            wrapWithTheme(
                <Chip color="secondary" size="small" borderColor="primary">
                    Test Chip
                </Chip>
            )
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
