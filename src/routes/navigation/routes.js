import {
  userBookingsRoute,
  bookSessionRoute,
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  yourCustomerBookingsRoute,
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

export const ownerSignedInRoutes = [yourCustomerBookingsRoute, accountRoute];

export const signedOutRoutes = [signInRoute, signUpRoute, contactRoute];
