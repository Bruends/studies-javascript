const { createStore, applyMiddleware, compose } = require('redux');

const reducer =  (state = 0, action) => {
    switch(action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default: 
            return state;
    }
}

// -> Middlewares 
// functions that trigger before the reducers
const logger = (store) => (next) => (action) => {
    //log the action before passing to reducer
    console.log(action);

    // need to end calling next function
    // with the action
    return next(action);
}

// join the middlewares
const enhancer = compose(applyMiddleware(logger));

// single middleware
const middlewares = applyMiddleware(logger);

const store = createStore(reducer, middlewares);

store.dispatch({ type: 'INC' });