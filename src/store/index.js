import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import appSlice from "./reducer";

const persistConfig = {
    key: "root",
    storage: storage,
    timeout: 1,
};

const reducers = combineReducers({
    mystore: appSlice.reducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: _persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});

let persistor = persistStore(store);

const {
    storeCurrencies,
    storeCurrency,
    storeCategories,
    selectCategory,
    addProduct,
    incrementQty,
    decrementQty,
    updateAttribute,
} = appSlice.actions;

export {
    store,
    persistor,
    storeCurrencies,
    storeCurrency,
    storeCategories,
    selectCategory,
    addProduct,
    incrementQty,
    decrementQty,
    updateAttribute,
};
