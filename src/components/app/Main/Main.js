import React from 'react';
import { ContentContainer, MainContainer } from './Main.styled';

const Main = ({ children, ...props }) => (
    <MainContainer {...props}>
        <ContentContainer>{children}</ContentContainer>
    </MainContainer>
);

export default Main;
