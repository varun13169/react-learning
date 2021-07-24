import { createStore } from 'redux'

const defaultState = { counter: 0 }

function reducer(state = defaultState, action) {
    let newState = JSON.parse(JSON.stringify(state));;
    if (action.type === 'increment') {
        newState.counter = newState.counter + action.value;
    }
    else if (action.type === 'decrement') {
        newState.counter = newState.counter - action.value;
    }
    else {
        newState = newState;
    }
    return newState;
}

const store = createStore(reducer);


export default store;