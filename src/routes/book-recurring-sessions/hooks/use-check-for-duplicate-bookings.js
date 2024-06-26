// import { useState } from "react";
// import useBookRecurringSessionsVariables from "./use-book-recurring-sessions-variables";
// import useRecurringSessionsFunctions from "./use-recurring-sessions-functions";

// const useCheckForDuplicateBookings = (
//   bookingData,
//   bookedSessionsUser,
//   sessionChoice
// ) => {
//   const [bookingsToAdd, setBookingsToAdd] = useState(bookingData);
//   const [showConfirmButton, setShowConfirmButton] = useState(false);
//   const [showHelp, setShowHelp] = useState(false);

//   const checkForDuplicateBookings = () => {
//     const bookedSessionUserDatesAndSessionTypes = bookedSessionsUser.map(
//       (booking) => ({ date: booking.date, sessionType: booking.sessionType })
//     );

//     const bookingsUserWantsToBookDatesAndSessionTypes = bookingData.map(
//       (booking) => ({ date: booking.date, sessionType: sessionChoice })
//     );

//     const userHasAlreadyBookedOneOfTheSessions =
//       bookingsUserWantsToBookDatesAndSessionTypes.filter((wantedBooking) =>
//         bookedSessionUserDatesAndSessionTypes.some(
//           (bookedBooking) =>
//             bookedBooking.date === wantedBooking.date &&
//             bookedBooking.sessionType === wantedBooking.sessionType
//         )
//       );

//     const userHasAlreadyBookedOneOrMoreDates =
//       userHasAlreadyBookedOneOfTheSessions.length > 0;

//     if (userHasAlreadyBookedOneOrMoreDates) {
//       const filteredBookings = bookingData.filter(
//         (booking) =>
//           !userHasAlreadyBookedOneOfTheSessions.some(
//             (alreadyBooked) =>
//               alreadyBooked.date === booking.date &&
//               alreadyBooked.sessionType === sessionChoice
//           )
//       );
//       setBookingsToAdd(filteredBookings);
//       setShowHelp(true);
//       setShowConfirmButton(false);
//     } else {
//       setShowHelp(false);
//       setShowConfirmButton(true);
//     }
//   };

//   return {
//     bookingsToAdd,
//     showConfirmButton,
//     showHelp,
//     checkForDuplicateBookings,
//   };
// };

// export default useCheckForDuplicateBookings;
