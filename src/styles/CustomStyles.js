import { css } from 'styled-components';

const CustomStyles = css`
    a {
        text-decoration: none;
        position: relative;
        color: ${({ theme }) => theme.palette.primary.main};
        cursor: pointer;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 0.125em;
            border-radius: 0.125em;
            background-color: currentColor;
            bottom: 0;
            left: 0;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
        }

        &:hover::before {
            transform-origin: left;
            transform: scaleX(1);
        }
    }

    .contains-task-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

export default CustomStyles;
