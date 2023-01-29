import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';

const WorksPage = ({ data }) => {
    const works = data.works.nodes;
    return (
        <div>
            <h1>Works</h1>
            <hr />
            {works.map((work, i) => {
                const link = `/works/${_.kebabCase(work.frontmatter.title)}`;
                return (
                    <div key={work.id}>
                        <b>
                            {i}) {work.frontmatter.title}
                        </b>
                        <i>{work.frontmatter.date}</i>
                        <Link to={link}>go to project</Link>
                    </div>
                );
            })}
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
            sort: { frontmatter: { date: DESC } }
            filter: { fileAbsolutePath: { regex: "/content/works/" } }
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
