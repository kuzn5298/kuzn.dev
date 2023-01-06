import * as React from 'react';
import { Link } from 'gatsby';

const samplePageLinks = [
    { text: 'About', url: 'about' },
    { text: 'Projects', url: 'projects' },
    { text: 'Contact', url: 'contact' },
];

const IndexPage = () => (
    <div>
        <div>
            <h1>
                Welcome to <b>Gatsby!</b>
            </h1>
            <p>
                <b>Example pages:</b>
                {samplePageLinks.map((link, i) => (
                    <React.Fragment key={link.url}>
                        <Link to={link.url}>{link.text}</Link>
                        {i !== samplePageLinks.length - 1 && <> · </>}
                    </React.Fragment>
                ))}
                <br />
            </p>
        </div>
    </div>
);

export default IndexPage;
