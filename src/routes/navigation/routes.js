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
  allChildrenRoute,
  allUsersRoute,
  accountRoute,
];

export const signedOutRoutes = [
  signInRoute,
  signUpRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
];
