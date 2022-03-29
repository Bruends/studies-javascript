const {createStore, applyMiddleware} = require('redux');
const axios = require('axios').default;

const defaultState = {
    loading: null,
    data: null,
    error: null
}

// thunk is a middleware that checks if the action is a function
// then execute it
const thunk = (store) => (next) => (action) => {
    if(typeof action === 'function') {
        return action(store.dispatch);
    }
    return next(action);
}

const fetchReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'FETCH_START':
            return { ...state, loading: true }
        case 'FETCH_SUCCESS':
            return { ...state, data: action.payload ,loading: false }
        case 'FETCH_ERROR':
            return { ...state, error: action.payload, loading: false }
    }
}

const middleware = applyMiddleware(thunk);

const store = createStore(fetchReducer, middleware);

// the function 
function fetchUrl(url){
    // this function is executed in the middleware
    return async function(dispatch) {
        try {
            dispatch({type: 'FETCH_START'})
            const res = await axios.get(url)
            const data = res.data
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    }
}

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUrl('https://catfact.ninja/fact'));

