import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { darkTheme, lightTheme } from '@styles';
import Spinner from '../../core/Spinner';

export const LoadingContainer = styled.div`
    --background-color: ${darkTheme.palette.background.default};
    --text-color: ${darkTheme.palette.text.primary};
    --primary-color: ${darkTheme.palette.primary.main};

    @media (prefers-color-scheme: light) {
        --background-color: ${lightTheme.palette.background.default};
        --text-color: ${lightTheme.palette.text.primary};
        --primary-color: ${lightTheme.palette.primary.main};
    }

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
`;

const ClientLoading = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <>
            {children}
            {!hasMounted && (
                <LoadingContainer>
                    <Spinner size="large" />
                </LoadingContainer>
            )}
        </>
    );
};

export default ClientLoading;
