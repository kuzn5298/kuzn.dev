import React from 'react';
import { wrapWithTheme } from '@tests/helpers';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
    it('should render component', () => {
        const { getByRole } = render(wrapWithTheme(<Button>Click me</Button>));
        expect(getByRole('button')).toBeInTheDocument();
    });

    it('should render component with default props', () => {
        const { getByRole } = render(wrapWithTheme(<Button>Click me</Button>));
        const buttonElement = getByRole('button');

        expect(buttonElement).not.toHaveClass('border');
        expect(buttonElement).toHaveTextContent('Click me');
        expect(buttonElement).toHaveStyle({
            gap: '1rem',
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
        });
    });

    it('should renders start and end icons', () => {
        const StartIcon = <svg data-testid="start-icon" />;
        const EndIcon = <svg data-testid="end-icon" />;

        const { getByTestId } = render(
            wrapWithTheme(
                <Button startIcon={StartIcon} endIcon={EndIcon}>
                    Click me
                </Button>
            )
        );

        expect(getByTestId('start-icon')).toBeInTheDocument();
        expect(getByTestId('end-icon')).toBeInTheDocument();
    });

    it('should render a correct button size', () => {
        const { getByTestId } = render(
            wrapWithTheme(
                <>
                    <Button size="small" data-testid="small-button">
                        Click me
                    </Button>
                    <Button size="medium" data-testid="medium-button">
                        Click me
                    </Button>
                    <Button size="large" data-testid="large-button">
                        Click me
                    </Button>
                </>
            )
        );

        expect(getByTestId('small-button')).toHaveStyle({
            gap: '0.5rem',
            padding: '0.25rem 0.75rem',
            fontSize: '0.75rem',
        });
        expect(getByTestId('medium-button')).toHaveStyle({
            gap: '1rem',
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
        });
        expect(getByTestId('large-button')).toHaveStyle({
            gap: '1.5rem',
            padding: '0.75rem 2.25rem',
            fontSize: '1rem',
        });
    });

    it('should render a correct button with border', () => {
        const { getByTestId } = render(
            wrapWithTheme(
                <Button border data-testid="border-button">
                    Click me
                </Button>
            )
        );

        expect(getByTestId('border-button')).toHaveClass('border');
    });

    it('should render a button with different props (snapshot test)', () => {
        const StartIcon = <svg>start icon</svg>;
        const EndIcon = <svg>end icon</svg>;

        const { asFragment } = render(
            wrapWithTheme(
                <Button startIcon={StartIcon} endIcon={EndIcon} size="large" border>
                    Click me
                </Button>
            )
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('should call onClick handler when clicked (event)', async () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            wrapWithTheme(<Button onClick={handleClick}>Click me</Button>)
        );

        await userEvent.click(getByRole('button'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should focus the button on Tab press (event)', async () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            wrapWithTheme(<Button onClick={handleClick}>Click me</Button>)
        );

        const buttonElement = getByRole('button');

        expect(buttonElement).not.toHaveFocus();

        await userEvent.tab();
        expect(buttonElement).toHaveFocus();
    });

    it('should call onClick on Enter and Space key (event)', async () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            wrapWithTheme(<Button onClick={handleClick}>Click me</Button>)
        );

        const buttonElement = getByRole('button');
        buttonElement.focus();

        await userEvent.keyboard('{Enter}');
        expect(handleClick).toHaveBeenCalledTimes(1);

        await userEvent.keyboard('{ }');
        expect(handleClick).toHaveBeenCalledTimes(2);
    });
});
