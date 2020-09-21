import {createSelector} from "reselect";

const COLLECTION_ID_MAP = {
    'product_category_1': 1,
    product_category_2: 2,
    product_category_3: 3,
    product_category_4: 4,
    product_category_5: 5,
}
const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)