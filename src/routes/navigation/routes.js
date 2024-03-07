import {
  userBookingsRoute,
  bookSessionRoute,
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  bookedSessionsOwnerRoute,
  addFundsRoute,
  childInfoRoute,
  aboutRoute,
} from "../../strings/strings";

export const signedInRoutes = [
  userBookingsRoute,
  bookSessionRoute,
  addFundsRoute,
  accountRoute,
  childInfoRoute,
  contactRoute,
];

export const ownerSignedInRoutes = [bookedSessionsOwnerRoute, accountRoute];

export const signedOutRoutes = [
  signInRoute,
  signUpRoute,
  contactRoute,
  aboutRoute,
];
