/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Nikita Kuznetsov`,
        description:
            'Nikita Kuznetsov is a software engineer specializing in developing modern and user-friendly products for the web.',
        siteUrl: `https://kuzn.dev/`,
        image: '/og.png',
        twitterUsername: '@kuzn5298',
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
                theme_color: '#1D1C1C',
                background_color: `#1D1C1C`,
                display: `standalone`,
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
                name: `experience`,
                path: `${__dirname}/content/experience`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/content/projects`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `summary`,
                path: `${__dirname}/content/summary`,
            },
        },
        `gatsby-transformer-remark`,
    ],
};
