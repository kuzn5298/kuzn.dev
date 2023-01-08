import * as React from 'react';
import { Link } from 'gatsby';
import { useTheme } from '@hooks';

const samplePageLinks = [
    { text: 'About', url: 'about' },
    { text: 'Projects', url: 'projects' },
    { text: 'Contact', url: 'contact' },
];

const IndexPage = () => {
    const { setThemeByName } = useTheme();

    return (
        <div>
            <div>
                <h1>
                    Welcome to <b>Gatsby!</b>
                </h1>
                <div>
                    <button type="button" onClick={() => setThemeByName('light')}>
                        light
                    </button>
                    <button type="button" onClick={() => setThemeByName('dark')}>
                        dark
                    </button>
                </div>
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
};

export default IndexPage;
