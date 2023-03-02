const redux = require("redux");
const createStore = redux.createStore;
const CAKE_ORDER = "CAKE_ORDER";
function orderCake() {
  return {
    type: CAKE_ORDER,
    qunatity: 1,
  };
}

const initialState = {
  numberOfCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        numberOfCake: state.numberOfCake - action.qunatity,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("New State: ", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
