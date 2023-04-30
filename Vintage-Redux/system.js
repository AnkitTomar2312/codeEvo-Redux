const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const CAKE_ORDER = "CAKE_ORDER";
const CAKE_REORDER = "CAKE_REORDER";
const ICECREAM_ORDER = "ICECREAM_ORDER";
const ICECREAM_REORDER = "ICECREAM_REORDER";

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
function orderIcecream(payload) {
  return {
    type: ICECREAM_ORDER,
    quantity: payload,
  };
}

function icecreamReoreder(payload) {
  return {
    type: ICECREAM_ORDER,
    quantity: payload,
  };
}
const cakeintitalState = {
  numberOfcake: 10,
};
const icecreamintitalState = {
  numberOficecream: 20,
};

const cakereducer = (state = cakeintitalState, action) => {
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
const icecreamreducer = (state = icecreamintitalState, action) => {
  switch (action.type) {
    case "ICECREAM_ORDER":
      return {
        ...state,
        numberOficecream: state.numberOficecream - action.quantity,
      };
    case "ICECREAM_REORDER":
      return {
        ...state,
        numberOficecream: state.numberOficecream + action.quantity,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: cakereducer,
  icecream: icecreamreducer,
});
const store = createStore(rootReducers);

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

const action = bindActionCreators(
  { orderCake, cakeReoreder, icecreamReoreder, orderIcecream },
  store.dispatch
);

action.orderCake(2);
action.cakeReoreder(2);
action.orderIcecream(5);
action.icecreamReoreder(5);
unsubscribe();
