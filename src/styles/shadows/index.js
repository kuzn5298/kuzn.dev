import { css } from 'styled-components';

export const shadow2 = css`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
        rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;

export const shadow8 = css`
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
        0px 3px 14px 2px rgba(0, 0, 0, 0.12);
`;

const Shadows = css`
    .elevation-2 {
        ${shadow2}
    }

    .elevation-8 {
        ${shadow8}
    }
`;

export default Shadows;
