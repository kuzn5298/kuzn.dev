import React from 'react';
import { Link } from 'gatsby';

const ContactPage = () => (
    <div>
        <h1>Contact</h1>
        <p>Welcome to Contact page</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
);

ContactPage.settings = {
    title: 'Contact',
    backgroundTitle: 'Contact',
};

export default ContactPage;
