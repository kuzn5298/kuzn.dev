import styled from 'styled-components';

const LogoContainer = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    user-select: none;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    .dot {
        color: ${({ theme }) => theme.palette.primary.main};
    }
`;

export default LogoContainer;
