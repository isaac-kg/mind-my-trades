import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "./auth/auth.reducer";
import { firestoreApi } from "@/services/firestoreApi";

const rootReducer = combineReducers({
  authReducer,
  [firestoreApi.reducerPath]: firestoreApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(firestoreApi.middleware),
});

export const persistor = persistStore(store);

