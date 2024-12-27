import data from "./data";

// type CollectionItemType = {
//   id: number;
//   name: string;
//   url: string;
//   link: string;
//   product: Array<{
//     id: number;
//     name: string;
//     price: number;
//     description: string;
//     image: string;
//   }>;
// };

export const collectionsList = () => {
  const collectionsData = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(data.collections)) {
    collectionsData.push(value);
  }
  return collectionsData;
};
