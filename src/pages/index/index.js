import { graphql } from 'gatsby';
import * as React from 'react';
import { goAbout } from '@utils/navigation';
import { ArrowButton } from './components';
import { IndexContainer, SummarySection } from './style';

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
