import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

import useGetCurrentUserSelectors from "./hooks/get-selectors/use-get-current-user-selectors";
import useGetUserOnLoadThunkUseEffect from "./hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-get-user-on-load-thunk-use-effect";

import PrivateRoutes from "./components/private-routes/private-routes.component";
import ErrorFallback from "./components/errors/error-fallback.component";
import Loader from "./components/loader/loader.component";
import FloatingBackButton from "./components/floating-back-button/floating-back-button.component";
import DBManageViewBookingClosingTimes from "./routes/database-management/booking-closing-times/db-manage-view-booking-closing-times.component";

import {
  contactRoute,
  signUpRoute,
  signInRoute,
  accountRoute,
  updateEmailRoute,
  forgotPasswordRequestRoute,
  chooseNewPasswordRoute,
  addFundsRoute,
  bookSessionRoute,
  updatePasswordRoute,
  closeAccountRoute,
  paymentResultRoute,
  childInfoRoute,
  addChildInfoRoute,
  editChildInfoRoute,
  deleteChildInfoRoute,
  chosenEntryChildDetailsRoute,
  bookedSessionsUserRoute,
  cancelBookingRoute,
  bookedSessionsOwnerRoute,
  allChildrenRoute,
  allUsersRoute,
  uploadDatesRoute,
  databaseManagementRoute,
  databaseManagementViewBookingClosingTimesRoute,
} from "./strings/routes/routes-strings";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const BookedSessionsOwner = lazy(() =>
  import("./routes/booked-sessions-owner/booked-sessions-owner.component")
);
const BookedSessionsUser = lazy(() =>
  import("./routes/booked-sessions-user/booked-sessions-user.component")
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
const AllChildrenInfo = lazy(() =>
  import("./routes/all-children-info/all-children-info.component")
);
const AllUsersInfo = lazy(() =>
  import("./routes/all-users-info/all-users-info.component")
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
const UpdatePassword = lazy(() =>
  import("./routes/update-password/update-password.component")
);

const CloseAccount = lazy(() =>
  import("./routes/close-account/close-account.component")
);
const ForgotPasswordRequest = lazy(() =>
  import("./routes/forgot-password-request/forgot-password-request.component")
);
const ChooseNewPassword = lazy(() =>
  import("./routes/choose-new-password/choose-new-password.component")
);
const UploadDatesToDatabase = lazy(() =>
  import("./routes/upload-dates-to-database/upload-dates-to-database.component")
);
const DatabaseManagement = lazy(() =>
  import("./routes/database-management/database-management.component")
);

const App = () => {
  const { currentUser, appOwnerId } = useGetCurrentUserSelectors();
  useGetUserOnLoadThunkUseEffect();

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
            <Route
              path={forgotPasswordRequestRoute}
              element={<ForgotPasswordRequest />}
            />

            <Route
              path={chooseNewPasswordRoute}
              element={<ChooseNewPassword />}
            />

            {/*private routes - if no user, redirect to sign in route */}
            <Route element={<PrivateRoutes />}>
              <Route path={accountRoute} element={<Account />} />
              <Route
                path={allChildrenRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <AllChildrenInfo />
                  ) : null
                }
              />
              <Route
                path={allUsersRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <AllUsersInfo />
                  ) : null
                }
              />
              <Route
                path={uploadDatesRoute}
                element={
                  currentUser &&
                  currentUser.id ===
                    import.meta.env.VITE_TEST_SCHOOL_APP_OWNER_ID ? (
                    <UploadDatesToDatabase />
                  ) : null
                }
              />

              <Route
                path={databaseManagementRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <DatabaseManagement />
                  ) : null
                }
              />
              <Route
                path={databaseManagementViewBookingClosingTimesRoute}
                element={<DBManageViewBookingClosingTimes />}
              />

              <Route path={childInfoRoute} element={<ChildInfo />} />
              <Route path={addChildInfoRoute} element={<AddChildInfo />} />
              <Route path={editChildInfoRoute} element={<EditChildInfo />} />
              <Route
                path={deleteChildInfoRoute}
                element={<DeleteChildInfo />}
              />
              <Route
                path={bookedSessionsOwnerRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <BookedSessionsOwner />
                  ) : null
                }
              />

              <Route
                path={bookedSessionsUserRoute}
                element={<BookedSessionsUser />}
              />

              <Route path={cancelBookingRoute} element={<CancelBooking />} />

              <Route
                path={chosenEntryChildDetailsRoute}
                element={<ChosenEntryChildDetails />}
              />

              <Route path={bookSessionRoute} element={<BookASession />} />
              <Route path={addFundsRoute} element={<AddFunds />} />
              <Route path={paymentResultRoute} element={<PaymentResult />} />
              <Route path={updateEmailRoute} element={<UpdateEmail />} />
              <Route path={updatePasswordRoute} element={<UpdatePassword />} />
              <Route path={closeAccountRoute} element={<CloseAccount />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
