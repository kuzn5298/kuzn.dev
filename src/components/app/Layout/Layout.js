import React from 'react';
import Head from '../Head';

const Layout = ({ title, children }) => (
    <>
        <Head title={title} />
        <div id="root">{children}</div>
    </>
);

export default Layout;
