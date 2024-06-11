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
  allBookingsRoute,
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
  allBookingsRoute,
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
