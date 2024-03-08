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
} from "../../strings/routes/routes-strings";

export const signedInRoutes = [
  bookedSessionsUserRoute,
  bookSessionRoute,
  addFundsRoute,
  accountRoute,
  childInfoRoute,
  contactRoute,
];

export const ownerSignedInRoutes = [
  bookedSessionsOwnerRoute,
  allChildrenRoute,
  accountRoute,
];

export const signedOutRoutes = [
  signInRoute,
  signUpRoute,
  contactRoute,
  aboutRoute,
];
