import React from 'react';
import { graphql } from 'gatsby';
import { goWorkById } from '@utils/navigation';
import { Card, CardList } from '@components/core';
import styled from 'styled-components';

const Title = styled.h2`
    color: ${({ theme }) => theme.palette.primary.main};
`;

const WorksPage = ({ data }) => {
    const works = data.works.nodes;
    return (
        <div>
            <Title>Works</Title>
            <CardList>
                {works.map((item) => (
                    <Card
                        key={item.id}
                        title={item.frontmatter.title}
                        description={item.frontmatter.description}
                        image={item.frontmatter.image?.publicURL}
                        github={item.frontmatter.github}
                        external={item.frontmatter.external}
                        status={item.frontmatter.status}
                        tags={item.frontmatter.tags}
                        onClick={() => goWorkById(item.id)}
                    />
                ))}
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
        works: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/works/" } }) {
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
                    image {
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
