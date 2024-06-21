/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { PageWrapper, RootWrapper } from '@components/app';

export const replaceRenderer = ({ bodyComponent, setHeadComponents }) => {
    const sheet = new ServerStyleSheet();
    renderToString(sheet.collectStyles(bodyComponent));
    const styleElement = sheet.getStyleElement();
    setHeadComponents(styleElement);
};

export const wrapRootElement = RootWrapper;

export const wrapPageElement = PageWrapper;
