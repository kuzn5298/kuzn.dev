import styled from 'styled-components';

export const InputContainer = styled.div`
    display: inline-block;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    overflow: hidden;

    .input {
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        padding: 1rem 1.5rem;
        background-color: ${({ theme }) => theme.palette.common.gray};
        box-sizing: border-box;
        border: 2px solid ${({ theme }) => theme.palette.common.gray};
        width: 100%;

        &.error-container {
            border-color: ${({ theme }) => theme.palette.common.error};
        }

        &:focus {
            border-color: ${({ theme }) => theme.palette.primary.main};
        }
    }

    .error {
        color: ${({ theme }) => theme.palette.common.error};
    }
`;
