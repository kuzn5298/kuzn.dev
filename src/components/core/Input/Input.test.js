import React from 'react';
import { wrapWithTheme } from '@tests/helpers';
import { lightTheme } from '@styles/theme';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('<Input />', () => {
    it('should render component', () => {
        const { getByRole } = render(wrapWithTheme(<Input />));
        expect(getByRole('textbox')).toBeInTheDocument();
    });

    it('should have default class', () => {
        const { getByRole } = render(wrapWithTheme(<Input />));
        expect(getByRole('textbox')).toHaveClass('input');
    });

    it('should display error message when error prop is true', () => {
        const errorMessage = 'This is an error';
        const { getByText } = render(wrapWithTheme(<Input error errorMessage={errorMessage} />));

        const inputElement = getByText(errorMessage);

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('error');
    });

    it('should not display error message when error prop is false', () => {
        const errorMessage = 'This is an error';
        const { queryByText } = render(wrapWithTheme(<Input errorMessage={errorMessage} />));
        expect(queryByText(errorMessage)).not.toBeInTheDocument();
    });

    it('should apply error class when error prop is true', () => {
        const { getByRole } = render(wrapWithTheme(<Input error />));
        expect(getByRole('textbox')).toHaveClass('error-container');
    });

    it('should render an input with different props (snapshot test)', () => {
        const errorMessage = 'This is an error';

        const { asFragment } = render(
            wrapWithTheme(<Input error placeholder="Snapshot test" errorMessage={errorMessage} />)
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should focus input on tab press and change border color on focus (event)', async () => {
        const { getByRole } = render(wrapWithTheme(<Input />, lightTheme));
        const inputElement = getByRole('textbox');

        expect(inputElement).not.toHaveFocus();
        await userEvent.tab();
        expect(inputElement).toHaveFocus();
        expect(inputElement).toHaveStyle(`border-color: ${lightTheme.palette.primary.main}`);
    });

    it('should allow typing into input field (event)', async () => {
        const text = 'Hello world';
        const { getByRole } = render(wrapWithTheme(<Input />));
        const inputElement = getByRole('textbox');

        await userEvent.type(inputElement, text);
        expect(inputElement).toHaveValue(text);
    });

    it('should call onChange on typing (event)', async () => {
        const handleChange = jest.fn();
        const text = 'Hello world';
        const { getByRole } = render(wrapWithTheme(<Input onChange={handleChange} />));
        const inputElement = getByRole('textbox');

        await userEvent.type(inputElement, text);
        expect(handleChange).toHaveBeenCalledTimes(text.length);
    });

    it('should call onFocus when input is focused (event)', async () => {
        const handleFocus = jest.fn();
        const { getByRole } = render(wrapWithTheme(<Input onFocus={handleFocus} />));
        const inputElement = getByRole('textbox');

        await userEvent.click(inputElement);

        expect(handleFocus).toHaveBeenCalled();
    });

    it('should call onBlur when input loses focus (event)', async () => {
        const handleBlur = jest.fn();
        const { getByRole } = render(wrapWithTheme(<Input onBlur={handleBlur} />));

        const inputElement = getByRole('textbox');

        await userEvent.click(inputElement);
        await userEvent.tab();

        expect(handleBlur).toHaveBeenCalled();
    });

    test('should call onKeyUp and onKeyDown when a key is released (event)', async () => {
        const handleKeyUp = jest.fn();
        const handleKeyDown = jest.fn();
        const { getByRole } = render(
            wrapWithTheme(<Input onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} />)
        );

        const inputElement = getByRole('textbox');

        await userEvent.type(inputElement, 'A');

        expect(handleKeyUp).toHaveBeenCalled();
        expect(handleKeyDown).toHaveBeenCalled();
    });
});
