import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './slices/currentWeatherSlice'
import selectReducer from './slices/SelectSlice'

const rootReducer = combineReducers({
    currentWeatherSliceReducer,
    selectReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];