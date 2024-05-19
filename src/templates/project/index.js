import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import { DevicePreview } from '@components/custom';
import Header from './Header';

import { ProjectTemplateContainer } from './ProjectTemplate.styled';

const ProjectTemplate = ({ data: { project } }) => {
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
    } = project.frontmatter;

    const isDevicePreview = useMemo(
        () => Boolean(phonePreviews ?? tabletPreviews ?? laptopPreviews),
        [laptopPreviews, phonePreviews, tabletPreviews]
    );
    const year = useMemo(() => date && new Date(date).getFullYear(), [date]);

    return (
        <ProjectTemplateContainer>
            <Header
                title={title}
                github={github}
                external={external}
                status={status}
                tags={tags}
                year={year}
            />
            <div className="scroll-container">
                {isDevicePreview && (
                    <DevicePreview
                        phonePreviews={phonePreviews}
                        tabletPreviews={tabletPreviews}
                        laptopPreviews={laptopPreviews}
                    />
                )}
                <section dangerouslySetInnerHTML={{ __html: project.html }} />
            </div>
        </ProjectTemplateContainer>
    );
};

ProjectTemplate.settings = {
    title: ({ data }) => data.project.frontmatter.title,
    backgroundTitle: ({ data }) => data.project.frontmatter.title,
};

export default ProjectTemplate;

export const pageQuery = graphql`
    query ($id: String!) {
        project: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date
                title
                version
                status
                github
                external
                tags
                preview {
                    id
                    publicURL
                }
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
