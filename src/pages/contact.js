import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '@components/app';

const ContactPage = () => (
    <Layout title="Contact">
        <div>
            <h1>Contact</h1>
            <p>Welcome to Contact page</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
);

export default ContactPage;
