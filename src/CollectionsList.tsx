import { dataCollections } from "./data";
// Function to get the collections list data object converted to an array
export const collectionsListData = () => {
  const collectionsData = [];
  // Iterate over the collections and push them to collectionsData array
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(dataCollections)) {
    // console.log(key , value);
    // Push the collection to the collectionsData array
    collectionsData.push(value);
  }

  // Return the collections data
  return collectionsData;
};
collectionsListData();
console.log(collectionsListData());
