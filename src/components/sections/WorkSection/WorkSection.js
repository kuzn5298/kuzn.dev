import React from 'react';
import { SectionContainer } from '@components/app';
import { goWorkById } from '@utils/navigation';
import { Card, CardList } from '../../custom';

const WorkSection = ({ title, items, ...props }) => (
    <SectionContainer alignCenter title={title} {...props}>
        <CardList>
            {items.map((item) => (
                <Card
                    key={item.id}
                    title={item.frontmatter.title}
                    description={item.frontmatter.description}
                    image={item.frontmatter.laptopPreview?.publicURL}
                    github={item.frontmatter.github}
                    external={item.frontmatter.external}
                    status={item.frontmatter.status}
                    tags={item.frontmatter.tags}
                    date={item.frontmatter.date}
                    onClick={() => goWorkById(item.id)}
                />
            ))}
        </CardList>
    </SectionContainer>
);

export default WorkSection;
