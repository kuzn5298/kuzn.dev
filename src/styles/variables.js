import { css } from 'styled-components';

const variables = css`
    :root {
        --app-width-padding: 3rem;

        --header-height-padding: 1.5rem;
        --header-width-padding: 3rem;

        --header-height: calc(
            2 * var(--header-height-padding) + ${({ theme }) => 2 * theme.typography.fontSize}px
        );

        --max-content-width: ${({ theme }) => `${theme.breakpoints.values.md}px`};
        --content-height-padding: 0rem;
        --content-width-padding: 7.5rem;

        ${({ theme }) => theme.breakpoints.down('md')} {
            --app-width-padding: 2rem;
            --header-width-padding: 2rem;
            --content-width-padding: 5.5rem;
        }

        ${({ theme }) => theme.breakpoints.down('sm')} {
            --app-width-padding: 1rem;
            --header-height-padding: 1rem;
            --header-width-padding: 1rem;
            --content-width-padding: 1rem;
        }

        // colors for ssr
        --background-color: ${({ theme }) => theme.palette.background.default};
        --text-color: ${({ theme }) => theme.palette.text.primary};
        --primary-color: ${({ theme }) => theme.palette.primary.main};
    }
`;

export default variables;
