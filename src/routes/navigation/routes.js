import {
  userBookingsRoute,
  bookSessionRoute,
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  BookingsOwnerRoute,
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

export const ownerSignedInRoutes = [BookingsOwnerRoute, accountRoute];

export const signedOutRoutes = [
  signInRoute,
  signUpRoute,
  contactRoute,
  aboutRoute,
];
