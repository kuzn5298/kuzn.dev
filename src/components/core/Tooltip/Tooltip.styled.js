import styled, { css } from 'styled-components';

const directionBlock = css`
    ${({ direction }) => {
        switch (direction) {
            case 'top':
                return css`
                    top: calc((100% + var(--tooltip-margin)) * -1);
                `;
            case 'right':
                return css`
                    left: calc(100% + var(--tooltip-margin));
                    top: 50%;
                    transform: translateX(0) translateY(-50%);
                `;
            case 'bottom':
                return css`
                    bottom: calc((100% + var(--tooltip-margin)) * -1);
                `;
            case 'left':
                return css`
                    left: auto;
                    right: calc(100% + var(--tooltip-margin));
                    top: 50%;
                    transform: translateX(0) translateY(-50%);
                `;
            default:
                return undefined;
        }
    }}
`;

export const TooltipContainer = styled.div`
    display: inline-block;
    position: relative;
`;

export const TooltipTip = styled.div`
    --tooltip-margin: 0.5rem;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    line-height: 1;
    white-space: nowrap;
    padding: 0.25rem 1rem;
    border-radius: 2rem;

    color: ${({ theme }) => theme.palette.common.white};
    background: ${({ theme }) => theme.palette.common.black};
    z-index: ${({ theme }) => theme.zIndex.tooltip};

    ${directionBlock}
`;
