import * as React from 'react';
import { Link } from 'gatsby';
import { useTheme } from '@hooks';
import { Layout } from '@components/app';
import { THEME } from '@constants';

const samplePageLinks = [
    { text: 'About', url: 'about' },
    { text: 'Projects', url: 'projects' },
    { text: 'Contact', url: 'contact' },
];

const IndexPage = () => {
    const { setThemeByName } = useTheme();

    return (
        <Layout>
            <div>
                <h1>
                    Welcome to <b>Gatsby!</b>
                </h1>
                <div>
                    <button type="button" onClick={() => setThemeByName(THEME.LIGHT)}>
                        light
                    </button>
                    <button type="button" onClick={() => setThemeByName(THEME.DARK)}>
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
        </Layout>
    );
};

export default IndexPage;
