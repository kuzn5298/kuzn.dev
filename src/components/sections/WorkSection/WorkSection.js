import React from 'react';
import { SectionContainer } from '@components/app';
import { goWorkById, getPreviewURL } from '@utils';
import { useTheme } from '@hooks';
import { Card, CardList } from '../../custom';

const WorkSection = ({ title, items, ...props }) => {
    const { themeId } = useTheme();

    return (
        <SectionContainer alignCenter title={title} {...props}>
            <CardList>
                {items.map((item) => {
                    const previewUrl = getPreviewURL(item.frontmatter.laptopPreviews, themeId);

                    return (
                        <Card
                            key={item.id}
                            title={item.frontmatter.title}
                            description={item.frontmatter.description}
                            image={previewUrl}
                            github={item.frontmatter.github}
                            external={item.frontmatter.external}
                            status={item.frontmatter.status}
                            tags={item.frontmatter.tags}
                            date={item.frontmatter.date}
                            onClick={() => goWorkById(item.id)}
                        />
                    );
                })}
            </CardList>
        </SectionContainer>
    );
};

export default WorkSection;
