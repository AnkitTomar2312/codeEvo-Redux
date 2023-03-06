const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
//importing middle ware
const applyMiddleware = redux.applyMiddleware;
//creating a logger used command [npm i redux-logger]
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDER = "ICECREAM_ORDER";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDER,
    payload: qty,
  };
}

function cakeRestocked(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function icecreamOrder(qty = 1) {
  return {
    type: ICECREAM_ORDER,
    payload: qty,
  };
}
function icecreamRestocked(qty = 1) {
  return { type: ICECREAM_RESTOCKED, payload: qty };
}

const CakeinitialState = {
  numberOfCake: 10,
};
const IcecreaminitialState = {
  numberOfIcecream: 20,
};

const Cakereducer = (state = CakeinitialState, action) => {
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
const IceCreamreducer = (state = IcecreaminitialState, action) => {
  switch (action.type) {
    case ICECREAM_ORDER:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream + action.payload,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: Cakereducer,
  icecream: IceCreamreducer,
});

const store = createStore(rootReducers, applyMiddleware(logger));

console.log("Initial State: ", store.getState());

//just removed the log statement because now logger is there in store to log evert thing
const unsubscribe = store.subscribe(() => {});

const action = bindActionCreators(
  { orderCake, cakeRestocked, icecreamOrder, icecreamRestocked },
  store.dispatch
);

action.orderCake();
action.orderCake();
action.orderCake();
action.cakeRestocked(3);
action.icecreamOrder(5);
action.icecreamRestocked(3);
unsubscribe();
