import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { RootState } from "./store";

export const useTodoListSelector = () => {
    return useSelector((state: RootState) => state.productsList);
};
// filepath: d:\front-end\reactJS\zusWatch\src\store\selectors.ts

// Input selector: Get the raw products list from the state
const selectProductsList = (state: RootState) => state.productsList;

// Memoized selector: Transform the products list
export const selectCollectionsList = createSelector(
  [selectProductsList],
  (productsList) =>
    productsList.map((collection) => ({
      ...collection,
      watches: collection.watches.map((watch) => ({
        ...watch,
        warranty: parseInt(watch.warranty, 10), // Ensure warranty is a number
      })),
    }))
);