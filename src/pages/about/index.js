import { graphql } from 'gatsby';
import React from 'react';

const AboutPage = ({ data }) => (
    <div>
        <h1>About</h1>
        <div dangerouslySetInnerHTML={{ __html: data?.about?.html }} />
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
