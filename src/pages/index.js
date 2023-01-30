import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { SummarySection } from '@components/sections';

const IndexContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const IndexPage = ({ data }) => (
    <IndexContainer>
        <SummarySection html={data?.summary?.html} />
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
