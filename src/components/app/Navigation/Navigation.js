import React from 'react';
import PropTypes from 'prop-types';
import { NAVIGATION } from '@constants';
import { Link } from '@components/core';
import NavigationContainer from './Navigation.styled';

const Navigation = ({ orientation }) => (
    <NavigationContainer orientation={orientation}>
        {NAVIGATION.map((nav) => (
            <Link key={nav.to} to={nav.to}>
                {nav.name}
            </Link>
        ))}
    </NavigationContainer>
);

export default Navigation;

Navigation.propTypes = {
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

Navigation.defaultProps = {
    orientation: 'vertical',
};
