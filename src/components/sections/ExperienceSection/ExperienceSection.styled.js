import styled from 'styled-components';

export const TabContainer = styled.div`
    display: flex;
    gap: 1rem;

    &.horizontal {
        flex-direction: column;
    }

    &.vertical {
        flex-direction: row;
    }

    .panel {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 0.5rem;
    }

    .panel-title {
        font-size: 1.75rem;
    }

    .panel-content {
        ul {
            list-style: none;
            padding: 0 2rem;

            li {
                position: relative;
                margin-bottom: 0.75rem;

                &:last-child {
                    margin-bottom: 0;
                }

                &::before {
                    position: absolute;
                    content: '●';
                    color: ${({ theme }) => theme.palette.primary.main};
                    left: -1.25rem;
                    transform: translate(-100%, -50%);
                    top: 50%;
                }
            }
        }
    }
`;
