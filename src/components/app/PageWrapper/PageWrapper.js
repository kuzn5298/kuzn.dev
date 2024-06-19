import React from 'react';
import _ from 'lodash';
import { PageProvider } from '@contexts/PageContext';
import BackgroundTitle from '../BackgroundTitle';
import Head from '../Head';
import Layout from '../Layout';

import { PageWrapperContainer } from './PageWrapper.styled';

const PageWrapper = ({ element, props }) => {
    const { location, data } = props;
    const {
        title,
        description,
        backgroundTitle,
        withLayout = true,
        sections,
        image,
        article = false,
    } = element?.type?.settings ?? {};
    const actualTitle = _.isFunction(title) ? title(props) : title;
    const actualDescription = _.isFunction(description) ? description(props) : description;
    const actualImage = _.isFunction(image) ? image(props) : image;
    const actualBackgroundTitle = _.isFunction(backgroundTitle)
        ? backgroundTitle(props)
        : backgroundTitle;

    return (
        <PageProvider
            value={{
                title: actualTitle,
                sections,
                location,
                data,
            }}
        >
            <PageWrapperContainer>
                <Head
                    title={actualTitle}
                    description={actualDescription}
                    image={actualImage}
                    article={article}
                />
                {withLayout ? <Layout>{element}</Layout> : element}
                <BackgroundTitle title={actualBackgroundTitle} />
            </PageWrapperContainer>
        </PageProvider>
    );
};

export default PageWrapper;
