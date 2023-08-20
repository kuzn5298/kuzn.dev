import styled from 'styled-components';

export const SkillIconContainer = styled.span`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${({ hoverColor }) => hoverColor};
    }

    .icon {
        display: inline-block;
        font-size: 2.5rem;
    }

    .name {
        text-transform: uppercase;
    }
`;
