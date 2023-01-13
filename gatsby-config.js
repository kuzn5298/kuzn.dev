/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Nikita Kuznetsov`,
        description: `Nikita Kuznetsov`,
        siteUrl: `https://kuzn.dev/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nikita Kuznetsov`,
                short_name: `Nikita Kuznetsov`,
                start_url: `/`,
                background_color: `#1D1C1C`,
                display: `minimal-ui`,
                icon: `src/images/logo.svg`,
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `jobs`,
                path: `${__dirname}/content/jobs`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `works`,
                path: `${__dirname}/content/works`,
            },
        },
        `gatsby-transformer-remark`,
    ],
};
