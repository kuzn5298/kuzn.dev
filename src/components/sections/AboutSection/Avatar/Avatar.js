import React from 'react';
import styled from 'styled-components';
import MeImage from '@images/me.png';

const Image = styled.img`
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 50%;
    border: 0.125rem solid ${({ theme }) => theme.palette.text.primary};
    box-shadow: inset 0px 0px 0px 0px ${({ theme }) => theme.palette.primary.main};
    transform: scaleX(-1);
    box-sizing: border-box;
    transition:
        box-shadow 1s 0.1s,
        border-color 0.1s 1s;

    &:hover {
        transition:
            box-shadow 1s 0.1s,
            border-color 0.1s;
        cursor: pointer;
        border-color: ${({ theme }) => theme.palette.primary.main};
        box-shadow: inset 0px 0px 0px 150px ${({ theme }) => theme.palette.primary.main};
    }
`;

const Avatar = (props) => <Image alt="Nikita Kuznetsov" src={MeImage} {...props} />;

export default Avatar;
