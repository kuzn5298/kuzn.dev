import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { goWorkById, getPreviewURL } from '@utils';
import { Card, CardList } from '@components/custom';
import { useTheme } from '@hooks';

const Title = styled.h2`
    color: ${({ theme }) => theme.palette.primary.main};
`;

const WorksPage = ({ data }) => {
    const { themeId } = useTheme();
    const works = data.works.nodes;

    return (
        <div>
            <Title>Works</Title>
            <CardList>
                {works.map((item) => {
                    const previewUrl =
                        item.frontmatter.preview?.publicURL ??
                        getPreviewURL(item.frontmatter.laptopPreviews, themeId);

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
                            onClick={() => goWorkById(item.id)}
                        />
                    );
                })}
            </CardList>
        </div>
    );
};

WorksPage.settings = {
    title: 'Work',
    backgroundTitle: 'Work',
};

export default WorksPage;

export const pageQuery = graphql`
    {
        works: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/works/" } }
            sort: { frontmatter: { date: DESC } }
        ) {
            nodes {
                id
                html
                frontmatter {
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
