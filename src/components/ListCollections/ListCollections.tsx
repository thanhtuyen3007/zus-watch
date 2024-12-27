import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { CollectionItem } from '../CollectionItem/CollectionItem';
import { CollectionItemType } from '../../data';



interface ListCollectionsProps {
  data: CollectionItemType[];
}

export const ListCollections = ({ data }: ListCollectionsProps) => {
  return (
    <div>
        <Row>
            {data.map((collectionItem) => (
                <Col md={6} key={collectionItem.id}>
                    <CollectionItem data={collectionItem} />
                </Col>
            ))}

        </Row>
    </div>
  )
}
