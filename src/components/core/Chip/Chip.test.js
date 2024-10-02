import React from 'react';
import { rgba } from 'polished';
import { lightTheme } from '@styles/theme';
import { wrapWithTheme } from '@tests/helpers';
import { render, screen } from '@testing-library/react';
import Chip from './Chip';

describe('Chip Component', () => {
    it('render', () => {
        render(wrapWithTheme(<Chip>Test Chip</Chip>));
        const chipElement = screen.getByText(/test chip/i);
        expect(chipElement).toBeInTheDocument();
    });

    it('default chip', () => {
        render(wrapWithTheme(<Chip>Default Chip</Chip>, lightTheme));
        const chipElement = screen.getByText(/default chip/i);

        expect(chipElement).toHaveStyle({
            backgroundColor: rgba(lightTheme.palette.primary.main, 0.75),
            fontSize: '1rem',
            padding: '0.25rem 0.5rem',
        });
    });

    it('correct "color" prop', () => {
        render(wrapWithTheme(<Chip color="secondary">Secondary Chip</Chip>, lightTheme));
        const chipElement = screen.getByText(/secondary chip/i);

        expect(chipElement).toHaveStyle(`backgroundColor: ${lightTheme.palette.common.darkGray}`);
    });

    it('correct "size" prop', () => {
        render(wrapWithTheme(<Chip size="large">Large Chip</Chip>));
        const chipElement = screen.getByText(/large chip/i);

        expect(chipElement).toHaveStyle({
            fontSize: '1.5rem',
            padding: '0.5rem 1rem',
        });
    });

    it('correct "borderColor" prop', () => {
        render(wrapWithTheme(<Chip borderColor="primary">Chip with Border</Chip>, lightTheme));
        const chipElement = screen.getByText(/chip with border/i);

        expect(chipElement).toHaveStyle(
            `border-left: 3px solid ${lightTheme.palette.primary.main};`
        );
    });

    it('correct custom props', () => {
        render(
            wrapWithTheme(
                <Chip color="#ff0000" borderColor="#00ff00">
                    Custom Chip
                </Chip>
            )
        );
        const chipElement = screen.getByText(/custom chip/i);

        expect(chipElement).toHaveStyle({
            backgroundColor: '#ff0000',
            borderLeft: '3px solid #00ff00',
        });
    });

    it('correct custom props (snapshot test)', () => {
        const { asFragment } = render(
            wrapWithTheme(
                <Chip color="secondary" size="small" borderColor="primary">
                    Custom Chip
                </Chip>
            )
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
