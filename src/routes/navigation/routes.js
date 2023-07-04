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
  contactRoute,
  accountRoute,
];

export const signedInRoutesWithoutDash = [
  bookSessionRoute,
  contactRoute,
  accountRoute,
];

export const signedOutRoutes = [signInRoute, signUpRoute, contactRoute];
