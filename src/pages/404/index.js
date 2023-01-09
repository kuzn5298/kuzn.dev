import React from 'react';
import { Link } from 'gatsby';
import { Head } from '@components/app';

const NotFoundPage = () => (
    <>
        <Head title="404" />
        <div>
            <h1>404: Not Found</h1>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </>
);

export default NotFoundPage;
