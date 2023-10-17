import {
  userBookingsRoute,
  bookSessionRoute,
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  dashboardRoute,
  addFundsRoute,
  childInfoRoute,
} from "../../strings/strings";

export const signedInRoutes = [
  userBookingsRoute,
  bookSessionRoute,
  addFundsRoute,
  accountRoute,
  childInfoRoute,
  contactRoute,
];

export const ownerSignedInRoutes = [dashboardRoute, accountRoute];

export const signedOutRoutes = [signInRoute, signUpRoute, contactRoute];
