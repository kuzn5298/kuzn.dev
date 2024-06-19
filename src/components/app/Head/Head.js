import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useSiteMetadata, useTheme } from '@hooks';

import Icon from '@images/logo.svg';

const Head = ({ title, description, image, children, article }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image: defaultImage,
        siteUrl,
        twitterUsername,
    } = useSiteMetadata();
    const { theme } = useTheme();
    const { pathname } = useLocation();

    const seo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description ?? defaultDescription,
        image: `${siteUrl}${image ?? defaultImage}`,
        url: `${siteUrl}${pathname ?? ``}`,
        twitterUsername,
    };

    return (
        <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
            <html lang="en" />

            <meta name="description" content={seo.description} />
            <meta name="theme-color" content={theme.palette.background.default} />
            <link rel="icon" href={Icon} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:type" content={article ? 'article' : 'website'} />

            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.twitterUsername} />

            {children}
        </Helmet>
    );
};

export default Head;
