import React from 'react';
import _ from 'lodash';
import BackgroundTitle from '../BackgroundTitle';
import Head from '../Head';
import Layout from '../Layout';
import { PageWrapperContainer } from './PageWrapper.styled';

const PageWrapper = ({ element, props }) => {
    const { title, backgroundTitle, withLayout = true } = element?.type?.settings ?? {};
    const actualTitle = _.isFunction(title) ? title(props) : title;
    const actualBackgroundTitle = _.isFunction(backgroundTitle)
        ? backgroundTitle(props)
        : backgroundTitle;

    return (
        <PageWrapperContainer>
            <Head title={actualTitle} />
            {withLayout ? <Layout>{element}</Layout> : element}
            <BackgroundTitle title={actualBackgroundTitle} />
        </PageWrapperContainer>
    );
};

export default PageWrapper;
