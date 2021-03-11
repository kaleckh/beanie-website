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
    case "ADD_BEANIE_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.beanieId],
      };
    default:
      return state;
  }
};
export default beanieReducer;
