const { configureStore, createSlice } = require('@reduxjs/toolkit'); 

// create slice
// object with configs for reducer and action creators
// it also configs immer
const slice = createSlice({
    name: 'count',
    initialState: 0,    
    reducers: {
        increment: (state)  => state + 1,        
        decrement: (state)  => state - 1,
    }
});

// like createStore, but config automatically common things
// like thunk middleware and redux dev tools browser extension
const store = configureStore({ reducer: slice.reducer });

store.subscribe(() => console.log(store.getState()));

store.dispatch(slice.actions.increment());
