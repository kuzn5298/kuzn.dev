import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => (
    <div>
        <h1>About</h1>
        <p>Welcome to About page</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
);

AboutPage.settings = {
    title: 'About',
    backgroundTitle: 'About',
};

export default AboutPage;
