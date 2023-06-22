const store = require("./app/store");

const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceActions = require("./features/ice/iceSlice").iceActions;

console.log("Intial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated: ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
store.dispatch(iceActions.ordered());
store.dispatch(iceActions.ordered());
store.dispatch(iceActions.ordered());
store.dispatch(iceActions.restocked(3));

unsubscribe();
