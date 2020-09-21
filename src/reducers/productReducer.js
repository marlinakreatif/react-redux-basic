
export const listProductReducer = (state = [], action) => {
  switch (action.type) {
    case "AMBIL_DATA":
      return action.payload;
    default:
      return state;
  }
};

export const choosenProductReducer = (state = null, action) => {
  switch (action.type) {
    case "CHOOSE_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};
