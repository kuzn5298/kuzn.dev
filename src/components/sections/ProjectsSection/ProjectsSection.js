import React from 'react';
import { SectionContainer } from '@components/app';
import { goProjectById, getPreviewURL } from '@utils';
import { useTheme } from '@hooks';
import { Card, CardList } from '../../custom';

const ProjectsSection = ({ title, items, ...props }) => {
    const { themeId } = useTheme();

    return (
        <SectionContainer alignCenter title={title} {...props}>
            <CardList>
                {items.map((item) => {
                    const previewUrl = getPreviewURL(item.frontmatter.laptopPreviews, themeId);

                    const id = item.frontmatter?.id ?? item.id;

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
                            onClick={() => goProjectById(id)}
                        />
                    );
                })}
            </CardList>
        </SectionContainer>
    );
};

export default ProjectsSection;
