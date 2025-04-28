import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStorage } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

//code to persist the user if page refreshes
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);
