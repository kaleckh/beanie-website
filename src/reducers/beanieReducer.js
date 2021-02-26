var initialState = {
  cart: [],
  beanies: [
    {
      price: "15",
      color: "red",
      size: "medium",
      id: 2,
    },
    {
      price: "15",
      color: "red",
      size: "large",
      id: 3,
    },
    {
      price: "20",
      color: "yellow",
      size: "medium",
      id: 4,
    },
    {
      price: "25",
      color: "orange",
      size: "small",
      id: 5,
    },
  ],
};

const beanieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.id,
      };
    default:
      return state;
  }
};
export default beanieReducer;
