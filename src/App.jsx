import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

import useGetUserOnLoad from "./hooks/use-get-user-on-load";
import useWalletBalanceListener from "./hooks/use-wallet-balance-listener";
import useSessionPricesListener from "./hooks/use-session-prices-listener";

import { selectCurrentUser } from "./store/user/user.selector";

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
  magicUrlRequestRoute,
  localhostMagicUrlResultRoute,
  forgotPasswordRequestRoute,
  forgotPasswordResultRoute,
  localhostForgotPasswordResultRoute,
  addFundsRoute,
  bookSessionRoute,
  updatePasswordRequestRoute,
  updatePasswordResultRoute,
  localhostUpdatePasswordResultRoute,
  closeAccountRoute,
  dashboardRoute,
  socialLoginResultRoute,
  localhostSocialLoginResultRoute,
  paymentResultRoute,
  childInfoRoute,
  addChildInfoRoute,
  editChildInfoRoute,
  deleteChildInfoRoute,
  chosenEntryChildDetailsRoute,
  userBookingsRoute,
  cancelBookingRoute,
} from "./strings/strings";

import FloatingBackButton from "./components/floating-back-button/floating-back-button.component";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const Dashboard = lazy(() => import("./routes/dashboard/dashboard.component"));
const UserBookings = lazy(() =>
  import("./routes/user-bookings/users-bookings.component")
);
const CancelBooking = lazy(() =>
  import("./routes/cancel-booking/cancel-booking.component")
);
const ChosenEntryChildDetails = lazy(() =>
  import(
    "./routes/chosen-entry-child-details/chosen-entry-child-details.component"
  )
);
const Account = lazy(() => import("./routes/account/account.component"));
const ChildInfo = lazy(() =>
  import("./routes/child-info/child-info.component")
);
const AddChildInfo = lazy(() =>
  import("./routes/add-child-info/add-child-info.component")
);
const EditChildInfo = lazy(() =>
  import("./routes/edit-child-info/edit-child-info.component")
);
const DeleteChildInfo = lazy(() =>
  import("./routes/delete-child-info/delete-child-info.component")
);
const BookASession = lazy(() =>
  import("./routes/book-a-session/book-a-session.component")
);
const AddFunds = lazy(() => import("./routes/add-funds/add-funds.component"));
const PaymentResult = lazy(() =>
  import("./routes/payment-result/payment-result.component")
);
const UpdateEmail = lazy(() =>
  import("./routes/update-email/update-email.component")
);
const UpdatePasswordRequest = lazy(() =>
  import("./routes/update-password-request/update-password-request.component")
);
const UpdatePasswordResult = lazy(() =>
  import("./routes/update-password-result/update-password-result.component")
);
const CloseAccount = lazy(() =>
  import("./routes/close-account/close-account.component")
);
const MagicUrlRequest = lazy(() =>
  import("./routes/magic-url-request/magic-url-request.component")
);
const MagicUrlResult = lazy(() =>
  import("./routes/magic-url-result/magic-url-result.component")
);
const SocialLoginResult = lazy(() =>
  import("./routes/social-login-result/social-login-result.component")
);
const ForgotPasswordRequest = lazy(() =>
  import("./routes/forgot-password-request/forgot-password-request.component")
);
const ForgotPasswordResult = lazy(() =>
  import("./routes/forgot-password-result/forgot-password-result.component")
);

const App = () => {
  useGetUserOnLoad();
  useWalletBalanceListener();
  useSessionPricesListener();

  const currentUser = useSelector(selectCurrentUser);
  const ownerId = import.meta.env.VITE_APP_OWNER_ID;

  return (
    <>
      <GlobalStyle />
      <FloatingBackButton />
      <Navigation />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={signInRoute} element={<SignIn />} />
            <Route path={contactRoute} element={<Contact />} />
            <Route path={signUpRoute} element={<SignUp />} />
            <Route path={magicUrlRequestRoute} element={<MagicUrlRequest />} />
            <Route
              path={magicUrlResultRoute || localhostMagicUrlResultRoute}
              element={<MagicUrlResult />}
            />
            <Route
              path={socialLoginResultRoute || localhostSocialLoginResultRoute}
              element={<SocialLoginResult />}
            />
            <Route
              path={forgotPasswordRequestRoute}
              element={<ForgotPasswordRequest />}
            />
            <Route
              path={
                forgotPasswordResultRoute || localhostForgotPasswordResultRoute
              }
              element={<ForgotPasswordResult />}
            />
            <Route
              path={
                updatePasswordResultRoute || localhostUpdatePasswordResultRoute
              }
              element={<UpdatePasswordResult />}
            />

            {/*private routes - if no user, redirect to sign in route */}
            <Route element={<PrivateRoutes />}>
              <Route path={accountRoute} element={<Account />} />
              <Route path={childInfoRoute} element={<ChildInfo />} />
              <Route path={addChildInfoRoute} element={<AddChildInfo />} />
              <Route path={editChildInfoRoute} element={<EditChildInfo />} />
              <Route
                path={deleteChildInfoRoute}
                element={<DeleteChildInfo />}
              />
              <Route
                path={dashboardRoute}
                element={
                  currentUser && currentUser.id === ownerId ? (
                    <Dashboard />
                  ) : (
                    <Account />
                  )
                }
              />

              <Route
                path={userBookingsRoute}
                element={currentUser ? <UserBookings /> : <SignIn />}
              />

              <Route path={cancelBookingRoute} element={<CancelBooking />} />

              <Route
                path={chosenEntryChildDetailsRoute}
                element={<ChosenEntryChildDetails />}
              />

              <Route
                path={accountRoute}
                element={currentUser ? <Account /> : null}
              />
              <Route path={bookSessionRoute} element={<BookASession />} />
              <Route path={addFundsRoute} element={<AddFunds />} />
              <Route path={paymentResultRoute} element={<PaymentResult />} />
              <Route path={updateEmailRoute} element={<UpdateEmail />} />
              <Route
                path={updatePasswordRequestRoute}
                element={<UpdatePasswordRequest />}
              />
              <Route path={closeAccountRoute} element={<CloseAccount />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
