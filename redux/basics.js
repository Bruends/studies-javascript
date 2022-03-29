const { createStore, combineReducers } = require("redux");

// redux:
// -> lib to control state of js applications
// -> implement flux

// redux principles
// -> store is unique
// -> components can't manipulate store directly
// -> only 'reducers' can manipulate the store
// -> reducer should return a new instance of the state  


// -> actions 
// a plain object that describe
// the action that generated the new state 
const INCREMENT = { type: 'increment' }
const DECREMENT = { type: 'decrement' }
const LOGIN = { type: 'login' }
const LOGOUT = { type: 'logout' }

// -> reducer
// a pure function that returns a new intance of the state
// based of the action dispatched and the old state
const counterReducer = (state = { value : 0 }, action) => {
    // the function must be pure
    // so it can't do side effects
    // like state.value++
    switch (action.type) {
        case 'increment': 
            return { value: state.value + 1 }            
        case 'decrement': 
            return { value: state.value - 1 }
        default:
            return state;
    }
}

// can have multiple reducers
const authReducer = (state = { logged: false }, action) => {
    switch (action.type) {
        case 'login':
            return { logged: true }
        case 'logout':
            return { logged: false }
        default:
            return state;
    }
}

// combine reducers
const reducers = combineReducers({ counterReducer, authReducer });

// create store
// -> store
// an unique storage for data
let store = createStore(reducers);

// listen to state changes
store.subscribe( () => console.log(store.getState()) );

// -> dispatch
// dispatch an action to the reducer to create a new state
store.dispatch(INCREMENT);
store.dispatch(LOGIN);

