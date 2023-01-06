import React from 'react';
import { graphql, Link } from 'gatsby';

const ProjectTemplate = ({ data: { project } }) => (
    <div>
        <h1>
            Hello from a <b>{project.frontmatter.title}</b>
        </h1>
        <p>This is Project page.</p>
        <Link to="/projects">Go back to the homepage</Link>
        <hr />
        <section dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
);

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
                tech
            }
        }
    }
`;
