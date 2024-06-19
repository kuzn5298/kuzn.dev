import React from 'react';
import styled from 'styled-components';
import { Button } from '@components/core';
import { goHome } from '@utils';

const NotFoundPageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    font-size: 1rem;

    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 0.75rem;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        font-size: 0.5rem;
    }

    .code {
        margin: 0;
        font-size: 20em;
        font-weight: 900;
        color: ${({ theme }) => theme.palette.common.lightGray};
        line-height: 0.8;
    }

    .message {
        margin: 0;
        font-size: 1.5em;
        text-transform: uppercase;
    }
`;

const NotFoundPage = () => (
    <NotFoundPageContainer>
        <h1 className="code">404</h1>
        <p className="message">Page not found</p>
        <Button border onClick={goHome}>
            Home
        </Button>
    </NotFoundPageContainer>
);

NotFoundPage.settings = {
    title: '404',
    description:
        'Sorry, the page you are looking for could not be found. Please return to the homepage to continue your journey on my site.',
    withLayout: false,
};

export default NotFoundPage;
