import React from 'react';
import _ from 'lodash';
import BackgroundTitle from '../BackgroundTitle';
import Head from '../Head';
import Layout from '../Layout';
import PageWrapperContainer from './PageWrapper.styled';

const PageWrapper = ({ element, props }) => {
    const { title, backgroundTitle } = element?.type?.settings ?? {};
    const actualTitle = _.isFunction(title) ? title(props) : title;
    const actualBackgroundTitle = _.isFunction(backgroundTitle)
        ? backgroundTitle(props)
        : backgroundTitle;

    return (
        <PageWrapperContainer>
            <Head title={actualTitle} />
            <Layout>{element}</Layout>
            <BackgroundTitle title={actualBackgroundTitle} />
        </PageWrapperContainer>
    );
};

export default PageWrapper;
