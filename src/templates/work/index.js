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
        phonePreviews,
        tabletPreviews,
        laptopPreviews,
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
                    phonePreviews={phonePreviews}
                    tabletPreviews={tabletPreviews}
                    laptopPreviews={laptopPreviews}
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
                phonePreviews {
                    id
                    publicURL
                }
                tabletPreviews {
                    id
                    publicURL
                }
                laptopPreviews {
                    id
                    publicURL
                }
            }
        }
    }
`;
