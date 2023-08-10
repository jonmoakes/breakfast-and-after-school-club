import {
  bookingsRoute,
  bookSessionRoute,
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  dashboardRoute,
  addFundsRoute,
} from "../../strings/strings";

export const signedInRoutes = [
  bookingsRoute,
  bookSessionRoute,
  addFundsRoute,
  accountRoute,
  contactRoute,
];

export const ownerSignedInRoutes = [
  dashboardRoute,
  bookingsRoute,
  bookSessionRoute,
  accountRoute,
  contactRoute,
];

export const signedOutRoutes = [signInRoute, signUpRoute, contactRoute];
