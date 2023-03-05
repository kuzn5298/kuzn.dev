import styled from 'styled-components';

const SectionContainer = styled.section`
    display: flex;
    min-height: calc(100vh - var(--header-height));
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: var(--header-height);
`;

export default SectionContainer;
