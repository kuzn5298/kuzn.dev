import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    SkillsSection,
} from '@components/sections';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SECTIONS = {
    ABOUT: {
        id: 'about',
        title: 'About Me',
    },
    EXPERIENCE: {
        id: 'experience',
        title: 'Experience',
    },
    PROJECTS: {
        id: 'projects',
        title: 'Projects',
    },
    SKILLS: {
        id: 'skills',
        title: 'Skills',
    },
};

const AboutPage = ({ data }) => (
    <AboutContainer>
        <AboutSection
            id={SECTIONS.ABOUT.id}
            title={SECTIONS.ABOUT.title}
            html={data?.about?.html}
        />
        <ExperienceSection
            id={SECTIONS.EXPERIENCE.id}
            title={SECTIONS.EXPERIENCE.title}
            items={data?.experience?.nodes}
        />
        <ProjectsSection
            id={SECTIONS.PROJECTS.id}
            title={SECTIONS.PROJECTS.title}
            items={data?.projects?.nodes}
        />
        <SkillsSection id={SECTIONS.SKILLS.id} title={SECTIONS.SKILLS.title} />
    </AboutContainer>
);

const NAV_SECTIONS = [
    {
        id: SECTIONS.ABOUT.id,
        name: SECTIONS.ABOUT.title,
        to: SECTIONS.ABOUT.id,
    },
    {
        id: SECTIONS.EXPERIENCE.id,
        name: SECTIONS.EXPERIENCE.title,
        to: SECTIONS.EXPERIENCE.id,
    },
    {
        id: SECTIONS.PROJECTS.id,
        name: SECTIONS.PROJECTS.title,
        to: SECTIONS.PROJECTS.id,
    },
    {
        id: SECTIONS.SKILLS.id,
        name: SECTIONS.SKILLS.title,
        to: SECTIONS.SKILLS.id,
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
                    link
                }
            }
        }
        projects: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/content/projects/" }
                frontmatter: { main: { eq: true } }
            }
            sort: { frontmatter: { date: DESC } }
            limit: 3
        ) {
            nodes {
                id
                html
                frontmatter {
                    id
                    date
                    title
                    version
                    status
                    github
                    external
                    laptopPreviews {
                        id
                        publicURL
                    }
                    description
                    tags
                }
            }
        }
    }
`;
