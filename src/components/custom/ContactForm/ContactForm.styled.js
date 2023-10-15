import styled from 'styled-components';

export const ContactFormContainer = styled.div`
    .form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(auto, auto);
        grid-gap: 1rem;

        & > *:nth-child(1) {
            grid-column: 1 / 2;
        }
        & > *:nth-child(2) {
            grid-column: 2 / 3;
        }
        & > *:nth-child(3) {
            grid-column: 1 / 3;
        }
        & > *:nth-child(4) {
            display: flex;
            justify-content: flex-end;
            grid-column: 1 / 3;
            & > * {
                padding-left: 4rem;
                padding-right: 4rem;
            }
        }

        ${({ theme }) => theme.breakpoints.down('sm')} {
            & > *:nth-child(1) {
                grid-column: 1 / 3;
            }
            & > *:nth-child(2) {
                grid-column: 1 / 3;
            }
            & > *:nth-child(4) {
                & > * {
                    width: 100%;
                }
            }
        }
    }
    textarea {
        resize: none;
    }
`;
