import data from "./data";

export const collectionsList = () => {
  const collectionsData = [];
  // Iterate over the collections and push them to collectionsData array
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(data.collections)) {
    collectionsData.push(value);
  }
  // Return the collections data
  return collectionsData;
};
