import styled from 'styled-components';

const LayoutContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 var(--app-width-padding);
    box-sizing: border-box;
`;

export default LayoutContainer;
