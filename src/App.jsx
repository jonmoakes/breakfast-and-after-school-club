import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

import useGetUserOnLoad from "./hooks/use-get-user-on-load";
import useWalletBalanceListener from "./hooks/use-wallet-balance-listener";

import PrivateRoutes from "./components/private-routes/private-routes.component";
import ErrorFallback from "./components/errors/error-fallback.component";
import Loader from "./components/loader/loader.component";

import {
  contactRoute,
  signUpRoute,
  signInRoute,
  accountRoute,
  updateEmailRoute,
  magicUrlResultRoute,
  magicUrlSignInRoute,
  localhostMagicUrlResultRoute,
  forgotPasswordRoute,
  forgotPasswordResultRoute,
  localhostForgotPasswordResultRoute,
  addFundsRoute,
} from "./strings/strings";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const Account = lazy(() => import("./routes/account/account.component"));
const AddFunds = lazy(() => import("./routes/add-funds/add-funds.component"));
const UpdateEmail = lazy(() =>
  import("./routes/update-email/update-email.component")
);
const MagicUrlSignIn = lazy(() =>
  import("./routes/magic-url-sign-in/magic-url-sign-in.component")
);
const MagicUrlResult = lazy(() =>
  import("./routes/magic-url-result/magic-url-result.component")
);
const ForgotPassword = lazy(() =>
  import("./routes/forgot-password/forgot-password.component")
);
const ForgotPasswordResult = lazy(() =>
  import("./routes/forgot-password-result/forgot-password-result.component")
);

const App = () => {
  useGetUserOnLoad();
  useWalletBalanceListener();

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={signInRoute} element={<SignIn />} />
            <Route path={contactRoute} element={<Contact />} />
            <Route path={signUpRoute} element={<SignUp />} />
            <Route path={magicUrlSignInRoute} element={<MagicUrlSignIn />} />
            <Route
              path={magicUrlResultRoute || localhostMagicUrlResultRoute}
              element={<MagicUrlResult />}
            />
            <Route path={forgotPasswordRoute} element={<ForgotPassword />} />
            <Route
              path={
                forgotPasswordResultRoute || localhostForgotPasswordResultRoute
              }
              element={<ForgotPasswordResult />}
            />
            <Route element={<PrivateRoutes />}>
              <Route path={accountRoute} element={<Account />} />
              <Route path={addFundsRoute} element={<AddFunds />} />
              <Route path={updateEmailRoute} element={<UpdateEmail />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
