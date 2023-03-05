import React from 'react';
import styled from 'styled-components';
import MeImage from '@images/me.png';

const Image = styled.img`
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 50%;
    border: 0.125rem solid ${({ theme }) => theme.palette.primary.main};
    transform: scaleX(-1);
    box-sizing: border-box;
`;

const Avatar = (props) => <Image alt="Nikita Kuznetsov" src={MeImage} {...props} />;

export default Avatar;
