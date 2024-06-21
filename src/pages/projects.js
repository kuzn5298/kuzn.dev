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

const ProjectsPage = ({ data }) => {
    const { themeId } = useTheme();
    const projects = data.projects.nodes;

    return (
        <div>
            <Title>Projects</Title>
            <CardList>
                {projects.map((item) => {
                    const previewUrl =
                        item.frontmatter.preview?.publicURL ??
                        getPreviewURL(item.frontmatter.laptopPreviews, themeId);

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
        </div>
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
            sort: { frontmatter: { date: DESC } }
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
                    preview {
                        id
                        publicURL
                    }
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
