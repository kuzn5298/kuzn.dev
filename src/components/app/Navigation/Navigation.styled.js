import styled from 'styled-components';

const NavigationContainer = styled.nav`
    display: inline-flex;
    align-items: center;
    flex-direction: ${({ orientation }) => (orientation === 'horizontal' ? 'column' : 'row')};
    gap: ${({ orientation }) => (orientation === 'horizontal' ? '1em' : '1.5em')};
    font-size: ${({ orientation }) => (orientation === 'horizontal' ? '1.5rem' : '1rem')};
`;

export default NavigationContainer;
