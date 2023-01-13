import styled from 'styled-components';

const SideBarContainer = styled.aside`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: 6rem;
    bottom: 0;
    left: var(--app-width-padding);
`;

export default SideBarContainer;
