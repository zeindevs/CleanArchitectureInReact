import reducers from "./reducers";
import middleware from "./middleware";
import { configureStore } from "@reduxjs/toolkit";

export const userStoreProvider = (services) =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(...middleware.map((f) => f(services))),
  });
