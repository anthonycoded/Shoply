import PRODUCTS from "../../data/dummy-data (2)";
const initialState = {
  availableProducts: [PRODUCTS],
  userProducts: [PRODUCTS.filter((product) => product.ownerId === "u1")],
};

export default (state = initialState, action) => {
  return state;
};
