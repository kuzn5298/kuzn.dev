import styled from 'styled-components';

const Content = styled.main`
    flex: 1;
    box-sizing: border-box;
    overflow: auto;
    padding: var(--content-height-padding)
        calc(var(--app-width-padding) + var(--content-width-padding));
`;

export default Content;
