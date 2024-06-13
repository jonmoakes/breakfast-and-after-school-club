import {
  bookedSessionsUserRoute,
  bookSessionRoute,
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  bookedSessionsOwnerRoute,
  addFundsRoute,
  childInfoRoute,
  aboutRoute,
  allChildrenRoute,
  allUsersRoute,
  pricingRoute,
  bookedSessionsOwnerAllBookingsRoute,
} from "../../strings/routes/routes-strings";

export const signedInRoutes = [
  bookedSessionsUserRoute,
  bookSessionRoute,
  addFundsRoute,
  childInfoRoute,
  accountRoute,
  contactRoute,
];

export const ownerSignedInRoutes = [
  bookedSessionsOwnerRoute,
  bookedSessionsOwnerAllBookingsRoute,
  allChildrenRoute,
  allUsersRoute,
  accountRoute,
  contactRoute,
];

export const signedOutRoutes = [
  signInRoute,
  signUpRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
];
