import React from 'react';
import data from './data';

const CollectionsList: React.FC = () => {
  // Get the collection names from the data
  const collectionNames = Object.keys(data.collections);

  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {collectionNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionsList;
