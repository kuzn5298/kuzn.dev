import styled from 'styled-components';
import { rgba } from 'polished';
import { shadow2, shadow8 } from '@styles/shadows';

export const CardContainer = styled.article`
    position: relative;
    padding: 1.5rem;

    .details {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 70%;
        backdrop-filter: blur(0.5rem);
        padding: 1rem;
        background-color: ${({ theme }) => rgba(theme.palette.background.default, 0.75)};
        cursor: pointer;
        ${shadow2}

        &:hover {
            ${shadow8}
        }

        .header {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            .title {
                font-size: 1.25rem;
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .spacer {
                flex: 1;
            }

            .actions {
                display: flex;
                gap: 0.25rem;
            }
        }

        .tags {
            display: flex;
            gap: 0.5rem;
            overflow: hidden;
        }

        ${({ theme }) => theme.breakpoints.down('md')} {
            left: 0;
            width: auto;
        }
    }

    .poster {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 40%;
        overflow: hidden;
        cursor: pointer;
        border-radius: 0.125rem;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;

        &::after {
            position: absolute;
            display: block;
            content: '';
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
        }

        ${({ theme }) => theme.breakpoints.down('md')} {
            left: 0;
        }
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        padding-left: 0;
    }

    &.left {
        ${({ theme }) => theme.breakpoints.up('md')} {
            padding-right: 0;
        }

        .details {
            left: 0;
            margin-left: auto;

            ${({ theme }) => theme.breakpoints.down('md')} {
                margin-left: 0;
            }
        }
        .poster {
            right: 40%;
            left: 0;
            ${({ theme }) => theme.breakpoints.down('md')} {
                right: 0;
            }
        }
    }
`;
