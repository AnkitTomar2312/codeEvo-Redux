const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
function orderCake() {
  return {
    type: CAKE_ORDER,
    payload: 1,
  };
}

function cakeRestocked(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

const initialState = {
  numberOfCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numberOfCake: state.numberOfCake - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCake: state.numberOfCake + action.payload,
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

const action = bindActionCreators({ orderCake, cakeRestocked }, store.dispatch);

action.orderCake();
action.orderCake();
action.orderCake();
action.cakeRestocked(3);
unsubscribe();
