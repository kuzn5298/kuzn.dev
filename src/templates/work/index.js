import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import { Preview } from '@components/core';
import Header from './Header';
import { WorkTemplateContainer } from './WorkTemplate.styled';

const WorkTemplate = ({ data: { work } }) => {
    const {
        title,
        github,
        external,
        status,
        tags,
        phonePreview,
        tabletPreview,
        laptopPreview,
        date,
    } = work.frontmatter;

    const year = useMemo(() => date && new Date(date).getFullYear(), [date]);

    return (
        <WorkTemplateContainer>
            <Header
                title={title}
                github={github}
                external={external}
                status={status}
                tags={tags}
                year={year}
            />
            <div className="scroll-container">
                <Preview
                    phonePreview={phonePreview.publicURL}
                    tabletPreview={tabletPreview.publicURL}
                    laptopPreview={laptopPreview.publicURL}
                />
                <section dangerouslySetInnerHTML={{ __html: work.html }} />
            </div>
        </WorkTemplateContainer>
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
