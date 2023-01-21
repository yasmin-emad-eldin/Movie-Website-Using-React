// import { legacy_createStore as createStore } from "redux";
import favReducer from './reduce';
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(favReducer, composeWithDevTools());
// export default store;

import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import MovieReducer from "./movieReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import favReducer from '../Redux/reduce'

const store = createStore(favReducer,applyMiddleware(thunk));

 export default store;