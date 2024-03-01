import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store/store";
import { StyleSheetManager } from "styled-components";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { Elements } from "@stripe/react-stripe-js";
import "regenerator-runtime";
import { loadStripe } from "@stripe/stripe-js";
import {
  selectCurrentUserSelectors,
  setLoadStripeKey,
} from "./store/user/user.slice";

const AppContainer = () => {
  const { currentUserEnvironmentVariables, loadStripeKey } = useSelector(
    selectCurrentUserSelectors
  );

  const dispatch = useDispatch();

  const { stripePublishableKey } = currentUserEnvironmentVariables;

  useEffect(() => {
    if (!stripePublishableKey) return;
    dispatch(setLoadStripeKey(loadStripe(stripePublishableKey)));
  }, [stripePublishableKey, dispatch]);

  return (
    <>
      {loadStripeKey ? (
        <>
          <Elements stripe={loadStripeKey}>
            <App />
          </Elements>
        </>
      ) : (
        <App />
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "theme"}>
          <AppContainer />
        </StyleSheetManager>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
