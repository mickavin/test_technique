import { legacy_createStore, applyMiddleware, compose } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import makeRootReducer from './reducers/combinedReducers';
import thunk from "redux-thunk";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['like'],
    stateReconciler: hardSet
}

const persistingReducer = persistReducer(persistConfig,makeRootReducer());

// a function which can create our store and auto-persist the data
export default (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [thunk];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];

    // ======================================================
    // Store Instantiation
    // ======================================================
    const store = legacy_createStore(
        persistingReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
    return store;
};