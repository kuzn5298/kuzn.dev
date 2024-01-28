import React from 'react';
import { graphql } from 'gatsby';
import { Preview } from '@components/core';
import Header from './Header';

const WorkTemplate = ({ data: { work } }) => {
    const { title, github, external, status, tags, phonePreview, tabletPreview, laptopPreview } =
        work.frontmatter;

    return (
        <div>
            <Header title={title} github={github} external={external} status={status} tags={tags} />

            <div>
                <Preview
                    phonePreview={phonePreview.publicURL}
                    tabletPreview={tabletPreview.publicURL}
                    laptopPreview={laptopPreview.publicURL}
                />
            </div>
            <section dangerouslySetInnerHTML={{ __html: work.html }} />
        </div>
    );
};

WorkTemplate.settings = {
    title: ({ data }) => data.work.frontmatter.title,
    backgroundTitle: ({ data }) => data.work.frontmatter.title,
};

export default WorkTemplate;

export const pageQuery = graphql`
    query ($id: String!) {
        work: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date
                title
                version
                status
                github
                external
                tags
                phonePreview {
                    id
                    publicURL
                }
                tabletPreview {
                    id
                    publicURL
                }
                laptopPreview {
                    id
                    publicURL
                }
            }
        }
    }
`;
