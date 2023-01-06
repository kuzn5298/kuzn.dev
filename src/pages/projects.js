import React from 'react';
import _ from 'lodash';
import { graphql, Link } from 'gatsby';

const ProjectsPage = ({ data }) => {
    const projects = data.projects.nodes;
    return (
        <div>
            <h1>Projects</h1>
            <p>Welcome to Projects page</p>
            <Link to="/">Go back to the homepage</Link>
            <hr />
            {projects.map((project, i) => {
                const link = `/projects/${_.kebabCase(project.frontmatter.title)}`;
                return (
                    <div key={project.id}>
                        <b>
                            {i}) {project.frontmatter.title}
                        </b>
                        <i>{project.frontmatter.date}</i>
                        <Link to={link}>go to project</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectsPage;

export const pageQuery = graphql`
    {
        projects: allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        ) {
            nodes {
                id
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                }
            }
        }
    }
`;
