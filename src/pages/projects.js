import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { goProjectById, getPreviewURL } from '@utils';
import { Card, CardList } from '@components/custom';
import { useTheme } from '@hooks';

const Title = styled.h2`
    color: ${({ theme }) => theme.palette.primary.main};
    text-transform: uppercase;
`;

const Container = styled.div`
    padding-bottom: 2rem;
`;

const ProjectsPage = ({ data }) => {
    const { themeId } = useTheme();
    const projects = data.projects.nodes;

    return (
        <Container>
            <Title>Projects</Title>
            <CardList>
                {projects.map((item) => {
                    const previewUrl = getPreviewURL(item.frontmatter.laptopPreviews, themeId);

                    const id = item.frontmatter?.id ?? item.id;

                    return (
                        <Card
                            key={item.id}
                            title={item.frontmatter.title}
                            description={item.frontmatter.description}
                            image={previewUrl}
                            github={item.frontmatter.github}
                            external={item.frontmatter.external}
                            status={item.frontmatter.status}
                            tags={item.frontmatter.tags}
                            date={item.frontmatter.date}
                            onClick={() => goProjectById(id)}
                        />
                    );
                })}
            </CardList>
        </Container>
    );
};

ProjectsPage.settings = {
    title: 'Projects',
    backgroundTitle: 'Projects',
};

export default ProjectsPage;

export const pageQuery = graphql`
    {
        projects: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/projects/" } }
            sort: { fields: [frontmatter___priority, frontmatter___date], order: [DESC, DESC] }
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
