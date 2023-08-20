const initialState = [
  {
    id: 1,
    product: "IPhone 14 pro",
  },
];
const allProduct = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_PRODUCT":
      state = [...state, action.payload];
      return state;
    case "DELETE_PRODUCT":
      console.log("delete products")
      return state;
    default:
      return state;
  }
};

export default allProduct;
