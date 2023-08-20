export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const setProduct = (product: any) => {
  return {
    type: "SET_PRODUCT",
    payload: product,
  };
};

export const deleteProduct = (id: any) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};

export const increase = (payload: any) => {
  return {
    type: "INCREASE",
    payload: payload,
  };
};

export const decrease = (payload: any) => {
  return {
    type: "INCREASE",
    payload: payload,
  };
};
