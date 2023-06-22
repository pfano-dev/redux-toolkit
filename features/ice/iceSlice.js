const createSlice = require("@reduxjs/toolkit").createSlice;

initialState = {
  numOfIce: 20,
};

const iceSlice = createSlice({
  name: "ice",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIce--;
    },

    restocked: (state, action) => {
      state.numOfIce += action.payload;
    },
  },
});

module.exports = iceSlice.reducer;
module.exports.iceActions = iceSlice.actions;
