import styled from 'styled-components';

export const ScrollContainer = styled.div`
    overflow: auto;
`;

export const TabsContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    box-sizing: border-box;

    .highlight {
        position: absolute;
        background-color: ${({ theme }) => theme.palette.primary.main};
        border-radius: 0.125rem;
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0px;
        background-color: rgba(158, 158, 158, 0.2);
        border-radius: 0.125rem;
    }

    &.vertical {
        flex-direction: column;
        padding-left: 0.25rem;

        .highlight {
            width: 0.25rem;
            transition: top 0.5s, height 0.5s;
        }

        &::before {
            width: 0.25rem;
            top: 0;
        }
    }

    &.horizontal {
        flex-direction: row;
        padding-bottom: 0.25rem;
        min-width: fit-content;

        .highlight {
            height: 0.25rem;
            transition: left 0.5s, width 0.5s;
        }

        &::before {
            height: 0.25rem;
            right: 0px;
        }
    }
`;
