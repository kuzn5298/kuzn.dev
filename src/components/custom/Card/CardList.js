import React, { Children, Fragment } from 'react';
import { CardListContainer } from './CardList.styled';

const CardList = ({ children }) => (
    <CardListContainer>
        {Children.map(children, (child, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={i}>
                {React.cloneElement(child, { position: i % 2 ? 'left' : 'right' })}
                {i < children.length - 1 && <div className="separator" />}
            </Fragment>
        ))}
    </CardListContainer>
);

export default CardList;
