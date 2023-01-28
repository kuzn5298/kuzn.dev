import { css } from 'styled-components';

const variables = css`
    :root {
        --app-width-padding: 12rem;

        --header-height-padding: 1.5rem;
        --header-width-padding: 0rem;

        --content-height-padding: 1.5rem;
        --content-width-padding: 4rem;

        ${({ theme }) => theme.breakpoints.down('xl')} {
            --app-width-padding: 8rem;
            --content-width-padding: 4rem;
        }

        ${({ theme }) => theme.breakpoints.down('lg')} {
            --app-width-padding: 4rem;
            --content-width-padding: 4rem;
        }

        ${({ theme }) => theme.breakpoints.down('md')} {
            --app-width-padding: 2rem;
            --content-width-padding: 4rem;
        }

        ${({ theme }) => theme.breakpoints.down('sm')} {
            --app-width-padding: 1rem;
            --content-width-padding: 0rem;
        }
    }
`;

export default variables;
