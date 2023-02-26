const redux = require("redux");
const createStore = redux.createStore;

const orderCake = () => {
  return {
    type: "CAKE_ORDER",
    quantity: 1,
  };
};

const intialState = {
  numberOfCakes: 10,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "CAKE_ORDER":
      return {
        numberOfCakes: state.numberOfCakes - 1,
      };
  }
};

const store = createStore(reducer);

console.log("Initail State", store.getState());

store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
