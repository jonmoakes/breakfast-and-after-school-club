import {
  bookingsRoute,
  bookSessionRoute,
  contactRoute,
  accountRoute,
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

export const signedOutRoutes = [bookSessionRoute, contactRoute];
