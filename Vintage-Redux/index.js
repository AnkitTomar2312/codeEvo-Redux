const redux = require("redux");
const createStore = redux.createStore;

//An action is an oject with the type property
//An action creator is a function that return an object
const CAKE_ORDER = "CAKE_ORDER";

function orderCake() {
  return {
    type: CAKE_ORDER,
    quantity: 1,
  };
}

//Reducer specify how a state change in response to the action sent to the store
//it is a function which take two parameters a state and a action and return the
//next state of the applicaiton
//(previousState,action)=>nextState

const initalState = {
  numberOfCake: 10,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "CAKE_ORDER":
      return {
        ...state,
        numberOfCake: state.numberOfCake - action.quantity,
      };
    default:
      return state;
  }
};

//Redux Store
//1.Hold application state
//2.Allows access to state via getState()
//3.Allows state to be update via dispatch(action)
//4.Registers listeners via subscribers(listerners)
//5.Handels unregistering of listeners via the function
//  returned by the subscribe(listeners)

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
