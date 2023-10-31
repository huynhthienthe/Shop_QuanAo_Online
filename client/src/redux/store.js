import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import User_Status_Reducer from "./User_Status_Slice.js";
import Users_Reducer from "./UserSlice.js";
import cartSlice from "../store/shopping-cart/cartSlice";
import cartUiSlice from "../store/shopping-cart/cartUiSlice";
import Roles_Reducer from "./RoleSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user_status: User_Status_Reducer,
  users: Users_Reducer,
  roles: Roles_Reducer,
  cart: cartSlice.reducer,
  cartUi: cartUiSlice.reducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
