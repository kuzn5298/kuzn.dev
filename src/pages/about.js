import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { AboutSection, ExperienceSection } from '@components/sections';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const AboutPage = ({ data }) => (
    <AboutContainer>
        <AboutSection id="about" title="About Me" html={data?.about?.html} />
        <ExperienceSection id="experience" title="Experience" items={data?.experience?.nodes} />
    </AboutContainer>
);

const NAV_SECTIONS = [
    {
        id: 'about',
        name: 'About Me',
        to: 'about',
    },
    {
        id: 'experience',
        name: 'Experience',
        to: 'experience',
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
        }
        experience: allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { fileAbsolutePath: { regex: "/content/experience/" } }
        ) {
            nodes {
                id
                html
                frontmatter {
                    company
                    date(formatString: "MMMM DD, YYYY")
                    range
                    position
                    location
                }
            }
        }
    }
`;
