import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
    <div>
        <h1>404: Not Found</h1>
        <Link to="/">Go back to the homepage</Link>
    </div>
);

NotFoundPage.settings = {
    title: '404',
};

export default NotFoundPage;
