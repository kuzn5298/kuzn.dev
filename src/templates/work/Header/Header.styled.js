import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 2rem 0;

    .header {
        display: flex;
        align-items: flex-end;
        gap: 0.5rem;

        .title {
            font-size: 2rem;
            line-height: 2rem;
            font-weight: 700;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .spacer {
            flex: 1;
        }

        .actions {
            display: flex;
            gap: 0.5rem;
        }
    }

    .separator {
        margin: 0;
    }

    .tags {
        display: flex;
        gap: 0.5rem;
        overflow: hidden;
    }
`;
