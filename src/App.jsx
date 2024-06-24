import { lazy, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

import useGetCurrentUserSelectors from "./hooks/get-selectors/use-get-current-user-selectors";
import useGetUserOnLoadThunkUseEffect from "./hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-get-user-on-load-thunk-use-effect";

import ScrollToTop from "./components/scroll-to-top/use-scroll-to-top";
import PrivateRoutes from "./components/private-routes/private-routes.component";
import ErrorFallback from "./components/errors/error-fallback.component";
import Loader from "./components/loader/loader.component";
import FloatingBackButton from "./components/floating-back-button/floating-back-button.component";

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
  bookedSessionsUserAllBookingsRoute,
  cancelBookingRoute,
  bookedSessionsOwnerRoute,
  bookedSessionsOwnerAllBookingsRoute,
  allChildrenRoute,
  allUsersRoute,
  uploadDatesRoute,
  databaseManagementRoute,
  databaseManagementViewBookingClosingTimesRoute,
  databaseManagementViewSessionTimesRoute,
  databaseManagementViewSessionPricesRoute,
  databaseManagementUpdateUserBalanceRoute,
  databaseManagementUpdateSessionSpacesRoute,
  databaseManagementAddBookingRoute,
  databaseManagementDeleteUserRoute,
  databaseManagementCreateUserRoute,
  databaseManagementCancelBookingRoute,
  aboutRoute,
  pricingRoute,
  databaseManagementCreateChildRoute,
  databaseManagementDeleteChildRoute,
  databaseManagementUpdateLatestBookingsAndChildrensParentEmailRoute,
  pwaInfoRoute,
  termsRoute,
  privacyPolicyRoute,
  cookiesRoute,
  securityPolicyRoute,
  refundsPolicyRoute,
  dataProtectionPolicyRoute,
  imageCreditsRoute,
  customerPortalRoute,
  manageEmergencyContactsRoute,
  bookRecurringSessionsRoute,
} from "./strings/routes/routes-strings";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const About = lazy(() => import("./routes/about/about.component"));
const Pricing = lazy(() => import("./routes/pricing/pricing.component"));
const TermsAndConditions = lazy(() =>
  import("./routes/terms-and-conditions/terms-and-conditions.component")
);
const PrivacyPolicy = lazy(() =>
  import("./routes/privacy-policy/privacy-policy.component")
);
const CookiePolicy = lazy(() =>
  import("./routes/cookie-policy/cookie-policy.component")
);
const SecurityPolicy = lazy(() =>
  import("./routes/security-policy/security-policy.component")
);
const RefundsPolicy = lazy(() =>
  import("./routes/refunds-policy/refunds-policy.component")
);
const DataProtection = lazy(() =>
  import("./routes/data-protection/data-protection.component")
);
const ImageCredits = lazy(() =>
  import("./routes/image-credits/image-credits.component")
);
const Contact = lazy(() => import("./routes/contact/contact.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const BookedSessionsOwner = lazy(() =>
  import("./routes/booked-sessions-owner/booked-sessions-owner.component")
);
const BookedSessionsOwnerAllBookings = lazy(() =>
  import(
    "./routes/booked-sessions-owner-all-bookings/booked-sessions-owner-all-bookings.component"
  )
);
const BookedSessionsUser = lazy(() =>
  import("./routes/booked-sessions-user/booked-sessions-user.component")
);
const BookedSessionsUserAllBookings = lazy(() =>
  import(
    "./routes/booked-sessions-user-all-bookings/booked-sessions-user-all-bookings.component"
  )
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
const BookRecurringSessions = lazy(() =>
  import("./routes/book-recurring-sessions/book-recurring-sessions.component")
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
const PwaInformation = lazy(() =>
  import("./routes/pwa-info/pwa-information.component")
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
const DBManageViewBookingClosingTimes = lazy(() =>
  import(
    "./routes/database-management-booking-closing-times/db-manage-view-booking-closing-times.component"
  )
);
const DBManageViewSessionTimes = lazy(() =>
  import(
    "./routes/database-management-session-times/db-manage-view-session-times.component"
  )
);
const DBManageViewSessionPrices = lazy(() =>
  import(
    "./routes/database-management-session-prices/db-manage-view-session-prices.component"
  )
);
const DBManageUpdateUserBalance = lazy(() =>
  import(
    "./routes/database-management-update-balance/db-manage-update-user-balance.component"
  )
);
const DBManageAddBooking = lazy(() =>
  import(
    "./routes/database-management-add-booking/db-manage-add-booking.component"
  )
);
const DbManageCancelBooking = lazy(() =>
  import(
    "./routes/database-management-cancel-booking/db-manage-cancel-booking.component"
  )
);
const DBManageUpdateSessionSpaces = lazy(() =>
  import(
    "./routes/database-management-update-session-spaces/db-manage-update-session-spaces.component"
  )
);

const DBManageDeleteUser = lazy(() =>
  import(
    "./routes/database-management-delete-user/db-manage-delete-user.component"
  )
);
const DBManageCreateUser = lazy(() =>
  import(
    "./routes/database-management-create-user/db-manange-create-user.component"
  )
);
const DBManageCreateChild = lazy(() =>
  import(
    "./routes/database-management-create-child/db-manange-create-child.component"
  )
);

const DBManageDeleteChild = lazy(() =>
  import(
    "./routes/database-management-delete-child/db-manage-delete-child.component"
  )
);

const DBManageUpdateLatestBookingsAndChildrensParentEmail = lazy(() =>
  import(
    "./routes/database-management-update-latest-bookings-and-childrens-parent-email/db-manage-update-latest-bookings-and-childrens-parent-email.component"
  )
);

const CustomerPortal = lazy(() =>
  import("./routes/customer-portal/customer-portal.component")
);

const ManageEmergencyContacts = lazy(() =>
  import(
    "./routes/manage-emergency-contacts/manage-emergency-contacts.component"
  )
);

const App = () => {
  const { currentUser, appOwnerId } = useGetCurrentUserSelectors();
  useGetUserOnLoadThunkUseEffect();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Breakfast And After School Club</title>
        <meta
          name="description"
          content="Manage your primary school breakfast and after school clubs efficiently with our app. Reduce paperwork and admin with easy booking management, child details, customer communication, and database management options. Safe and simple care for children with medical and food information at your fingertips."
        />

        <meta
          name="keywords"
          content="primary school clubs, breakfast club management, after school club management, booking management, child care, school admin, reduce paperwork, virtual wallet, club management app, school club software"
        />

        <link
          rel="canonical"
          href="https://www.breakfast-and-after-school-club.co.uk/"
        />
      </Helmet>
      <GlobalStyle />
      <ScrollToTop />
      <FloatingBackButton />
      <Navigation />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={aboutRoute} element={<About />} />
            <Route path={pricingRoute} element={<Pricing />} />
            <Route path={termsRoute} element={<TermsAndConditions />} />
            <Route path={privacyPolicyRoute} element={<PrivacyPolicy />} />
            <Route path={cookiesRoute} element={<CookiePolicy />} />
            <Route path={securityPolicyRoute} element={<SecurityPolicy />} />
            <Route path={refundsPolicyRoute} element={<RefundsPolicy />} />
            <Route
              path={dataProtectionPolicyRoute}
              element={<DataProtection />}
            />
            <Route path={imageCreditsRoute} element={<ImageCredits />} />
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
              <Route
                path={databaseManagementViewSessionTimesRoute}
                element={<DBManageViewSessionTimes />}
              />
              <Route
                path={databaseManagementViewSessionPricesRoute}
                element={<DBManageViewSessionPrices />}
              />
              <Route
                path={databaseManagementUpdateUserBalanceRoute}
                element={<DBManageUpdateUserBalance />}
              />

              <Route
                path={databaseManagementAddBookingRoute}
                element={<DBManageAddBooking />}
              />

              <Route
                path={databaseManagementCancelBookingRoute}
                element={<DbManageCancelBooking />}
              />

              <Route
                path={databaseManagementUpdateSessionSpacesRoute}
                element={<DBManageUpdateSessionSpaces />}
              />
              <Route
                path={databaseManagementDeleteUserRoute}
                element={<DBManageDeleteUser />}
              />
              <Route
                path={databaseManagementCreateUserRoute}
                element={<DBManageCreateUser />}
              />
              <Route
                path={databaseManagementCreateChildRoute}
                element={<DBManageCreateChild />}
              />
              <Route
                path={databaseManagementDeleteChildRoute}
                element={<DBManageDeleteChild />}
              />
              <Route
                path={
                  databaseManagementUpdateLatestBookingsAndChildrensParentEmailRoute
                }
                element={
                  <DBManageUpdateLatestBookingsAndChildrensParentEmail />
                }
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
                path={bookedSessionsOwnerAllBookingsRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <BookedSessionsOwnerAllBookings />
                  ) : null
                }
              />

              <Route
                path={bookedSessionsUserRoute}
                element={
                  currentUser && currentUser.id !== appOwnerId ? (
                    <BookedSessionsUser />
                  ) : null
                }
              />

              <Route
                path={bookRecurringSessionsRoute}
                element={
                  currentUser && currentUser.id !== appOwnerId ? (
                    <BookRecurringSessions />
                  ) : null
                }
              />

              <Route
                path={bookedSessionsUserAllBookingsRoute}
                element={
                  currentUser && currentUser.id !== appOwnerId ? (
                    <BookedSessionsUserAllBookings />
                  ) : null
                }
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
              <Route
                path={manageEmergencyContactsRoute}
                element={
                  currentUser && currentUser.id !== appOwnerId ? (
                    <ManageEmergencyContacts />
                  ) : null
                }
              />
              <Route path={pwaInfoRoute} element={<PwaInformation />} />
              <Route path={customerPortalRoute} element={<CustomerPortal />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
