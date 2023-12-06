import { format } from "date-fns";

import { getSessionTypeString } from "../../functions/get-session-type-string";
import { capitalizeString } from "../../functions/capitalize-string";

export const emailToSend = (
  name,
  date,
  sessionType,
  childrenInBooking,
  sessionPrice,
  walletBalance
) => {
  return `______________________________________________

Dear ${name},

This Is Confirmation Of Your Breakfast & After School Club Booking That You Recently Made.

Your Booking Details Are:

Selected Date:
${date ? format(new Date(date), "dd MMMM yyyy") : ""}

Session Booked:
${capitalizeString(getSessionTypeString(sessionType))}

Child(ren) In The Booking:
${capitalizeString(childrenInBooking)}

Funds Deducted From Your Wallet:
£${sessionPrice / 100}

Remaining Wallet Balance Directly After This Booking:
£${walletBalance / 100}

______________________________________________

Thank you for using the Breakfast & After School Club App!

______________________________________________
`;
};

export const cancellationEmailToSend = (
  name,
  date,
  sessionType,
  childrensName,
  refundPrice,
  walletBalance
) => {
  return `______________________________________________

Dear ${name},

This Is Confirmation That Your Breakfast & After School Club Booking Was Cancelled.

The Details Of The Booking That Was Cancelled Are:

Booking Date:
${date ? format(new Date(date), "dd MMMM yyyy") : ""}

Session Booked:
${capitalizeString(getSessionTypeString(sessionType))}

Child(ren) In The Booking:
${capitalizeString(childrensName)}

Funds Added To Your Wallet:
£${refundPrice / 100}

New Wallet Balance Directly After This Cancellation:
£${walletBalance / 100}

______________________________________________

Thank you for using the Breakfast & After School Club App!

______________________________________________
`;
};
