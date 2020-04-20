import React from 'react';

import {CollectionPreviewContainer, Title, PreviewContainer} from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <Title>{title.toUpperCase()}</Title>
        <PreviewContainer>
            {items
            .filter((item, index) => index < 4)
            .map(item => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;