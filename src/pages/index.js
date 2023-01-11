import * as React from 'react';
import { useTheme } from '@hooks';
import { Button, Link } from '@components/core';
import { MoonIcon, SunIcon } from '@components/icons';
import { THEME } from '@constants';

const samplePageLinks = [
    { text: 'About', url: 'about' },
    { text: 'Projects', url: 'projects' },
    { text: 'Contact', url: 'contact' },
];

const IndexPage = () => {
    const { setThemeByName } = useTheme();

    return (
        <div>
            <h1>
                Welcome to <b>Gatsby!</b>
            </h1>
            <div>
                <Button onClick={() => setThemeByName(THEME.LIGHT)} startIcon={<SunIcon />}>
                    light
                </Button>
                <Button onClick={() => setThemeByName(THEME.DARK)} endIcon={<MoonIcon />}>
                    dark
                </Button>
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
    );
};

IndexPage.settings = {
    backgroundTitle: 'Hello',
};

export default IndexPage;
