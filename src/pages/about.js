import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '@components/app';

const AboutPage = () => (
    <Layout title="About">
        <div>
            <h1>About</h1>
            <p>Welcome to About page</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
);

export default AboutPage;
