import styled from 'styled-components';

const Content = styled.main`
    flex: 1;
    box-sizing: border-box;
    overflow: auto;
    padding: var(--content-height-padding) var(--content-width-padding);
    max-width: var(--max-content-width);
    width: 100%;
    margin: 0 auto;
    font-size: 1rem;

    ${({ theme }) => theme.breakpoints.down('sm')} {
        font-size: 0.75rem;
    }
`;

export default Content;
