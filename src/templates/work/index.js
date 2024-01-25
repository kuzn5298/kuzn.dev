import React from 'react';
import { graphql } from 'gatsby';
import { LaptopPreview } from '@components/core';
import Header from './Header';

const WorkTemplate = ({ data: { work } }) => {
    const { title, github, external, status, tags, laptopPreview } = work.frontmatter;

    return (
        <div>
            <Header title={title} github={github} external={external} status={status} tags={tags} />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <div style={{ maxWidth: 600 }}>
                    <LaptopPreview preview={laptopPreview.publicURL} />
                </div>
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
                laptopPreview {
                    id
                    publicURL
                }
            }
        }
    }
`;
