/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const workTemplate = path.resolve(`src/templates/work/index.js`);

    const result = await graphql(`
        {
            worksRemark: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/content/works/" } }
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

    const works = result.data.worksRemark.edges;

    works.forEach(({ node }) => {
        createPage({
            path: `/works/${node.id}`,
            component: workTemplate,
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
                '@contexts': path.resolve(__dirname, 'src/contexts'),
                '@content': path.resolve(__dirname, 'src/content'),
                '@constants': path.resolve(__dirname, 'src/constants'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@libs': path.resolve(__dirname, 'src/libs'),
            },
        },
    });
};
