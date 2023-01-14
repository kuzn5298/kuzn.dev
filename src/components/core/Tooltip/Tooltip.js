import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TooltipContainer, TooltipTip } from './Tooltip.styled';

const Tooltip = ({ children, className, enterDelay, direction, title }) => {
    const timeout = useRef(null);
    const [active, setActive] = useState(false);

    const showTip = useCallback(() => {
        timeout.current = setTimeout(() => {
            setActive(true);
        }, enterDelay);
    }, [enterDelay]);

    const hideTip = useCallback(() => {
        clearInterval(timeout.current);
        setActive(false);
    }, []);

    return (
        <TooltipContainer onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {active && title && (
                <TooltipTip className={className} direction={direction}>
                    {title}
                </TooltipTip>
            )}
        </TooltipContainer>
    );
};

Tooltip.propTypes = {
    enterDelay: PropTypes.number,
    direction: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
    title: PropTypes.node,
};

Tooltip.defaultProps = {
    enterDelay: 100,
    direction: 'top',
    title: null,
};

export default Tooltip;
