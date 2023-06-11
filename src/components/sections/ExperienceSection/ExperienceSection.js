import React, { useCallback, useState } from 'react';
import { SectionContainer } from '@components/app';
import { useMedia } from '@hooks';
import { Tab, TabPanel, Tabs } from './components';
import { TabContainer } from './ExperienceSection.styled';

const ExperienceSection = ({ title, items, ...props }) => {
    const [value, setValue] = useState(() => items?.[0]?.id);
    const isMobile = useMedia((theme) => theme.breakpoints.down('sm'));

    const handleValue = useCallback((_e, v) => {
        setValue(v);
    }, []);

    return (
        <SectionContainer title={title} {...props}>
            <TabContainer className={isMobile ? 'horizontal' : 'vertical'}>
                <Tabs
                    value={value}
                    onChange={handleValue}
                    orientation={isMobile ? 'horizontal' : 'vertical'}
                >
                    {items.map((tab) => (
                        <Tab
                            key={tab.id}
                            value={tab.id}
                            title={tab.frontmatter.company}
                            subtitle={tab.frontmatter.location}
                        />
                    ))}
                </Tabs>
                {items.map((tab) => (
                    <TabPanel key={tab.id} value={tab.id} selectedValue={value} className="panel">
                        <span className="panel-title">
                            {tab.frontmatter.position}{' '}
                            <a href={tab.frontmatter.link} target="_blank" rel="noreferrer">
                                @{tab.frontmatter.company.split(' ').join('')}
                            </a>
                        </span>
                        <span>{tab.frontmatter.range}</span>
                        <span
                            className="panel-content"
                            dangerouslySetInnerHTML={{ __html: tab.html }}
                        />
                    </TabPanel>
                ))}
            </TabContainer>
        </SectionContainer>
    );
};

export default ExperienceSection;
