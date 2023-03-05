import React from 'react';
import _ from 'lodash';
import { PageProvider } from '@contexts/PageContext';
import BackgroundTitle from '../BackgroundTitle';
import Head from '../Head';
import Layout from '../Layout';
import { PageWrapperContainer } from './PageWrapper.styled';

const PageWrapper = ({ element, props }) => {
    const { location, data } = props;
    const { title, backgroundTitle, withLayout = true, sections } = element?.type?.settings ?? {};
    const actualTitle = _.isFunction(title) ? title(props) : title;
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
                <Head title={actualTitle} />
                {withLayout ? <Layout>{element}</Layout> : element}
                <BackgroundTitle title={actualBackgroundTitle} />
            </PageWrapperContainer>
        </PageProvider>
    );
};

export default PageWrapper;
