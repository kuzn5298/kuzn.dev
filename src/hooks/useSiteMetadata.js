import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                    title
                    image
                    twitterUsername
                }
            }
        }
    `);

    return data.site.siteMetadata;
};
