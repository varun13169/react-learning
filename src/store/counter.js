import { createSlice } from '@reduxjs/toolkit';

const defaultState = { 
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload.value;
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload.value;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload.value;
        },
        toggleCounter(state, action) {
            state.showCounter = !state.showCounter;
        },
    }
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
