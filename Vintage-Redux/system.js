const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDER = "CAKE_ORDER";

function orderCake() {
  return {
    type: CAKE_ORDER,
    quantity: 1,
  };
}

const intitalState = {
  numberOfcake: 10,
};

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case "CAKE_ORDER":
      return {
        ...state,
        numberOfcake: state.numberOfcake - action.quantity,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(orderCake());

unsubscribe();
