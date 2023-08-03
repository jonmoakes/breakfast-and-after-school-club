import {
  bookingsRoute,
  bookSessionRoute,
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  dashboardRoute,
} from "../../strings/strings";

export const signedInRoutes = [
  dashboardRoute,
  bookingsRoute,
  bookSessionRoute,
  accountRoute,
  contactRoute,
];

export const signedInRoutesWithoutDash = [
  dashboardRoute,
  bookingsRoute,
  bookSessionRoute,
  accountRoute,
  contactRoute,
];

export const signedOutRoutes = [signInRoute, signUpRoute, contactRoute];
