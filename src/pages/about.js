import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { AboutSection } from '@components/sections';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const AboutPage = ({ data }) => (
    <AboutContainer>
        <AboutSection id="about" html={data?.about?.html} title={data?.about?.frontmatter?.title} />
    </AboutContainer>
);

const NAV_SECTIONS = [
    {
        id: 'about',
        name: 'About',
        to: 'about',
    },
];

AboutPage.settings = {
    title: 'About',
    backgroundTitle: 'About',
    sections: NAV_SECTIONS,
};

export default AboutPage;

export const pageQuery = graphql`
    {
        about: markdownRemark(fileAbsolutePath: { regex: "/content/about/" }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
