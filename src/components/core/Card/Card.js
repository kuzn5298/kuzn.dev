import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ExternalLinkIcon, GithubIcon } from '@components/icons';
import { openURL } from '@utils/navigation';
import { CardContainer } from './Card.styled';
import IconButton from '../IconButton';
import Chip from '../Chip';

const Card = ({
    title,
    description,
    image,
    github,
    external,
    status,
    tags,
    onClick,
    position,
    ...props
}) => {
    const handleAction = (url) => (e) => {
        e.stopPropagation();
        openURL(url);
    };

    return (
        <CardContainer {...props} className={clsx(position === 'left' && 'left')}>
            <div
                className="poster"
                style={{ backgroundImage: `url(${image})` }}
                onClick={onClick}
                aria-hidden="true"
            />
            <div className="details" onClick={onClick} aria-hidden="true">
                <div className="header">
                    <div className="title">{title}</div>
                    <Chip size="small">{status}</Chip>
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
                {description && <div>{description}</div>}
                <div className="tags">
                    {tags.map((tag, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Chip key={i} size="small" color="secondary">
                            {tag}
                        </Chip>
                    ))}
                </div>
            </div>
        </CardContainer>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    github: PropTypes.string,
    external: PropTypes.string,
    status: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    position: PropTypes.oneOf(['left', 'right']),
};

Card.defaultProps = {
    description: undefined,
    image: '',
    github: undefined,
    external: undefined,
    status: undefined,
    tags: [],
    onClick: () => {},
    position: 'right',
};

export default Card;
