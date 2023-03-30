import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const middleware = [thunkMiddleware];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

export default store;
