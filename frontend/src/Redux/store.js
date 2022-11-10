import {legacy_createStore, applyMiddleware, combineReducers} from "redux";

import thunk from "redux-thunk"

import {reducer as BestReducer} from "./BestReducer/reducer"
import { reducer as FlashReducer } from "./FlashReducer/reducer";
import { reducer as TrendReducer} from "./TrendReducer/reducer"
import {reducer as NewReducer} from "./NewReducer/reducer"

const rootReducer=combineReducers({
   
    FlashReducer, BestReducer, TrendReducer, NewReducer
})

const store =legacy_createStore(rootReducer, applyMiddleware(thunk))
export {store};