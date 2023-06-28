import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { logger } from "redux-logger";

const middlewares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./root-saga";
// import { rootReducer } from "./root-reducer";

// const sagaMiddleware = createSagaMiddleware();

// const persistConfirg = {
//   key: "root",
//   storage,
//   blacklist: [
//     "user",
//     "hamburgerMenu",
//     "bookingsTable",
//     "expensesTable",
//     "loader",
//     "error",
//     "expenseToAdd",
//     "expenseToEdit",
//     "expenseToDelete",
//     "newEmail",
//     "newPassword",
//     "addUnavailableDates",
//     "sendCustomerBookingEmail",
//     "sendOwnerBookingEmail",
//     "addBookingToFirestore",
//     "cardInputResult",
//   ],
// };

// const persistedReducer = persistReducer(persistConfirg, rootReducer);

// let middlewares = [];
// if (process.env.NODE_ENV === "development") {
//   middlewares = [logger, sagaMiddleware, thunk];
// } else {
//   middlewares = [sagaMiddleware, thunk];
// }

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );
// export const persistor = persistStore(store);
// sagaMiddleware.run(rootSaga);
