import {legacy_createStore, applyMiddleware, combineReducers} from "redux";

import thunk from "redux-thunk"

import {reducer as BestReducer} from "./BestReducer/reducer"
import { reducer as FlashReducer } from "./FlashReducer/reducer";

const rootReducer=combineReducers({
   
    FlashReducer, BestReducer
})

const store =legacy_createStore(rootReducer, applyMiddleware(thunk))
export {store};