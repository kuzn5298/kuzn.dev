import React from 'react';
import { graphql } from 'gatsby';
import { goAbout } from '@utils/navigation';
import { ArrowButton } from './index/components';
import { IndexContainer, SummarySection } from './index/style';

const IndexPage = ({ data }) => (
    <IndexContainer>
        <SummarySection dangerouslySetInnerHTML={{ __html: data?.summary?.html }} />
        <ArrowButton onClick={goAbout}>See more about me</ArrowButton>
    </IndexContainer>
);

IndexPage.settings = {
    backgroundTitle: 'Hello',
};

export default IndexPage;

export const pageQuery = graphql`
    {
        summary: markdownRemark(fileAbsolutePath: { regex: "/content/summary/" }) {
            html
        }
    }
`;
