const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceReducer = require("../features/ice/iceSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceReducer,
  },
});

module.exports = store;
