import React from 'react';
import { NAVIGATION } from '@constants';
import { Link } from '@components/core';
import { NavigationContainer } from './Navigation.styled';

const Navigation = () => (
    <NavigationContainer>
        {NAVIGATION.map((nav) => (
            <Link key={nav.to} to={nav.to}>
                {nav.name}
            </Link>
        ))}
    </NavigationContainer>
);

export default Navigation;
