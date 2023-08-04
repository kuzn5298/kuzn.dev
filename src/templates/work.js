import React from 'react';
import { graphql, Link } from 'gatsby';

const WorkTemplate = ({ data: { work } }) => (
    <div>
        <h1>
            Hello from a <b>{work.frontmatter.title}</b>
        </h1>
        <p>This is Project page.</p>
        <Link to="/works">Go back to the homepage</Link>
        <hr />
        <section dangerouslySetInnerHTML={{ __html: work.html }} />
    </div>
);

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
            }
        }
    }
`;
