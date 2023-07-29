import {
  bookingsRoute,
  bookSessionRoute,
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
} from "../../strings/strings";

export const signedInRoutes = [
  bookingsRoute,
  bookSessionRoute,
  accountRoute,
  contactRoute,
];

export const signedInRoutesWithoutDash = [
  bookSessionRoute,
  accountRoute,
  contactRoute,
];

export const signedOutRoutes = [signInRoute, signUpRoute, contactRoute];
