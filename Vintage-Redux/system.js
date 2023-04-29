const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_REORDER = "CAKE_REORDER";

function orderCake(payload) {
  return {
    type: CAKE_ORDER,
    quantity: payload,
  };
}

function cakeReoreder(payload) {
  return {
    type: CAKE_REORDER,
    quantity: payload,
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
    case "CAKE_REORDER":
      return {
        ...state,
        numberOfcake: state.numberOfcake + action.quantity,
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

store.dispatch(orderCake(4));
store.dispatch(cakeReoreder(3));

unsubscribe();
