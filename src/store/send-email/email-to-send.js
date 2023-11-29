import { format } from "date-fns";

import { getSessionTypeString } from "../../functions/get-session-type-string";
import { capitalizeString } from "../../functions/capitalize-string";

export const emailToSend = (name, date, sessionType, childrenInBooking) => {
  return `______________________________________________

Dear ${name},

This is your confirmation of your breakfast & after school club booking that you recently made.

Your booking details are:

SelectedDate:
${date ? format(new Date(date), "dd MMMM yyyy") : ""}

Session Booked:
${capitalizeString(getSessionTypeString(sessionType))}

Child(ren) In The Booking:
${capitalizeString(childrenInBooking)}

______________________________________________

You will also recieved a separate email containing your receipt.

Thank you for using the Breakfast & After School Club App!

______________________________________________
`;
};
