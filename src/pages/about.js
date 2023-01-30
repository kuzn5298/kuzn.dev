import { graphql } from 'gatsby';
import React from 'react';

const AboutPage = () => (
    <div>
        <h2>About</h2>
    </div>
);

AboutPage.settings = {
    title: 'About',
    backgroundTitle: 'About',
};

export default AboutPage;

export const pageQuery = graphql`
    {
        about: markdownRemark(fileAbsolutePath: { regex: "/content/about/" }) {
            html
        }
    }
`;
