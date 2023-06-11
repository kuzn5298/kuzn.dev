import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { ScrollContainer, TabsContainer } from './Tabs.styled';

const Tabs = ({ children, value, onChange, orientation = 'horizontal' }) => {
    const ref = useRef(null);
    const [styleData, setStyleData] = useState({});

    useEffect(() => {
        const items = Array.from(ref.current?.children ?? []);
        const index = React.Children.toArray(children).findIndex(
            (child) => child.props.value === value
        );
        const orientationKey = orientation === 'vertical' ? 'offsetHeight' : 'offsetWidth';
        const shift = items.slice(0, index).reduce((acc, child) => acc + child[orientationKey], 0);
        const size = items?.[index][orientationKey];
        if (orientation === 'vertical') {
            setStyleData({
                left: 0,
                top: shift,
                height: size,
            });
        } else {
            setStyleData({
                bottom: 0,
                left: shift,
                width: size,
            });
        }
    }, [value, children, orientation]);

    return (
        <ScrollContainer>
            <TabsContainer
                ref={ref}
                className={clsx(orientation === 'vertical' ? 'vertical' : 'horizontal')}
            >
                {React.Children.map(children, (child) => {
                    const { value: v } = child.props;
                    return React.cloneElement(child, {
                        selected: value === v,
                        onClick: onChange,
                        value: v,
                    });
                })}
                <span className="highlight" style={styleData} />
            </TabsContainer>
        </ScrollContainer>
    );
};

export default Tabs;
