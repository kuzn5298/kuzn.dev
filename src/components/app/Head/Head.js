import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme, useSiteMetadata } from '@hooks';

const Head = ({ title, description, children }) => {
    const { title: defaultTitle, description: defaultDescription } = useSiteMetadata();
    const { theme } = useTheme();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
    };

    return (
        <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
            <html lang="en" />

            <meta name="description" content={seo.description} />
            <meta name="theme-color" content={theme.palette.background.default} />
            {children}
        </Helmet>
    );
};

export default Head;
