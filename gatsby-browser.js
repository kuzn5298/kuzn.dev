/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import * as ReactDOM from 'react-dom/client';
import { PageWrapper, RootWrapper } from '@components/app';

export const wrapRootElement = RootWrapper;

export const wrapPageElement = PageWrapper;

export const replaceHydrateFunction = () => (element, container) => {
    // ? Problem with render element in wrapPageElement (element is null in ssr)
    const useHydrate = container && container.children.length;

    if (useHydrate) {
        const root = ReactDOM.hydrateRoot(container, element);
        return () => root.unmount();
    }
    const root = ReactDOM.createRoot(container);
    root.render(element);
    return () => root.unmount();
};
