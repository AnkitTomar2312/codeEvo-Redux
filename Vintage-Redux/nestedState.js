const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;
const initialState = {
  name: "Ankit",
  address: {
    street: "123 main street",
    city: "Bruklin",
    state: "Beky",
  },
};

const STREET_UPDATE = "STREET_UPDATE";

const streetUpdate = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("New State: ", store.getState())
);

store.dispatch(streetUpdate("w2/112 Damodar Nagar"));

unsubscribe();
