import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import { StyleSheetManager } from "styled-components";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { Elements } from "@stripe/react-stripe-js";
import "regenerator-runtime";
import { loadStripe } from "@stripe/stripe-js";

import useGetCurrentUserSelectors from "./hooks/get-selectors/use-get-current-user-selectors";
import { setLoadStripeKey } from "./store/user/user.slice";

const AppContainer = () => {
  const { stripePublishableKey, loadStripeKey } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

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
