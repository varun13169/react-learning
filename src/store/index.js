import { createSlice, configureStore } from '@reduxjs/toolkit';

const defaultState = { 
    counter: 0,
    showCounter: true
}

const authInitialState = {
    isAuthenticated: false,
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

const authSlice = createSlice({
    name: 'authSlice',
    initialState: authInitialState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})


const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
        authSlice: authSlice.reducer
    }
});

export const authAction = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;