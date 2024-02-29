import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { StyleSheetManager } from "styled-components";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { Elements } from "@stripe/react-stripe-js";
import "regenerator-runtime";
import { loadStripe } from "@stripe/stripe-js";
import { selectCurrentUserSelectors } from "./store/user/user.slice";

const AppContainer = () => {
  const { currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { stripePublishableKey } = currentUserEnvironmentVariables;

  return (
    <>
      {stripePublishableKey ? (
        <>
          <Elements stripe={loadStripe(stripePublishableKey)}>
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
