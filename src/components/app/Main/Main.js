import React from 'react';
import { ContentContainer, MainContainer } from './Main.styled';

const Main = ({ children, ...props }, ref) => (
    <MainContainer ref={ref} {...props}>
        <ContentContainer>{children}</ContentContainer>
    </MainContainer>
);

export default React.memo(React.forwardRef(Main));
