import styled from 'styled-components';

const LayoutContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-areas:
        'header'
        'main';

    grid-template-rows: auto 1fr;

    .header {
        grid-area: header;
    }

    .main {
        grid-area: main;
        padding: 0 2rem;
    }
`;

export default LayoutContainer;
