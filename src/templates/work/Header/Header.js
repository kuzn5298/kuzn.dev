import React from 'react';
import { ExternalLinkIcon, GithubIcon } from '@components/icons';
import { IconButton, Chip } from '@components/core';
import { ToolChip } from '@components/custom';
import { openURL } from '@utils/navigation';
import { HeaderContainer } from './Header.styled';

const Header = ({ title, github, external, status, tags, year }) => {
    const handleAction = (url) => (e) => {
        e.stopPropagation();
        openURL(url);
    };

    return (
        <HeaderContainer>
            <div className="header">
                <h2 className="title">{title}</h2>
                {status && <Chip size="small">{status}</Chip>}
                <div className="spacer" />
                <div className="actions">
                    {github && (
                        <IconButton
                            size="medium"
                            hoverColor="primary"
                            onClick={handleAction(github)}
                        >
                            <GithubIcon />
                        </IconButton>
                    )}
                    {external && (
                        <IconButton
                            size="medium"
                            hoverColor="primary"
                            onClick={handleAction(external)}
                        >
                            <ExternalLinkIcon />
                        </IconButton>
                    )}
                </div>
            </div>
            {tags?.length && <hr className="separator" />}
            <div className="bottom">
                {tags?.length && (
                    <div className="tags">
                        {tags.map((tag, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <ToolChip key={i}>{tag}</ToolChip>
                        ))}
                    </div>
                )}
                {year && <span className="year">{year}</span>}
            </div>
        </HeaderContainer>
    );
};

export default Header;
