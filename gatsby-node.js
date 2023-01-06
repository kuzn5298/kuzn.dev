/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');
const _ = require('lodash');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const projectTemplate = path.resolve(`src/templates/project.js`);

    const result = await graphql(`
        {
            projectsRemark: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/content/projects/" } }
                sort: { frontmatter: { date: DESC } }
                limit: 1000
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `);

    const projects = result.data.projectsRemark.edges;

    projects.forEach(({ node }) => {
        createPage({
            path: `/projects/${_.kebabCase(node.frontmatter.title)}`,
            component: projectTemplate,
            context: {
                id: node.id,
            },
        });
    });
};

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@fonts': path.resolve(__dirname, 'src/fonts'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@pages': path.resolve(__dirname, 'src/pages'),
            },
        },
    });
};
