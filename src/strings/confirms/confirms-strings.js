import { format } from "date-fns";

import { getSessionTypeString } from "../../functions/get-session-type-string";
import { removeStarFromChildrensNamesIfExists } from "../../functions/remove-star-from-childrens-name-if-exists";
import { formatChildNames } from "../../functions/format-child-names";
import { customWhite, customIosBlue, customYellow } from "../../styles/colors";

export const confirmCancelBookingMessage =
  "do you want to cancel this booking?";
export const confirmSignOutMessage = "are you sure you wish to sign out?";
export const yesSignOutMessage = "yes, sign me out!";
export const areYouSureMessage = "are you sure?";
export const confirmAddFundsMessage = (walletFunds) => {
  return `are you sure you wish to add £${walletFunds.toFixed(
    2
  )} to your wallet?`;
};

export const fundsReaddedToAccountMessage = (formattedRefundPrice) => {
  return `£${formattedRefundPrice}  will be added to your wallet.`;
};
export const confirmSureBookSession = (sessionType, date) => {
  return `are you sure you want to book the ${getSessionTypeString(
    sessionType
  )} session for ${format(new Date(date), "dd MMMM yyyy")}?`;
};
export const fundsDeductedFromBalance = (sessionPrice, balanceAfterBooking) => {
  return `<span style="color: ${customIosBlue}">£${(sessionPrice / 100).toFixed(
    2
  )}</span> will be deducted from your wallet balance.<br/>After the booking, your remaining balance will be <span style="color: ${customIosBlue}">£${balanceAfterBooking}</span>.<br/><br/>By booking, you confirm that you agree to our<br/><a href="/booking-terms" target="_blank" rel="noopener noreferrer"  style="color: ${customWhite}"; text-decoration: underline;">terms and conditions</a>.`;
};

export const sureSignUpMessage = "are you sure you wish to sign up?";
export const yesSignUpMessage = "I agree, sign me up!";
export const confirmSignUpMessage = () => {
  return `By signing up, you confirm that you agree to our<br/><a href="/terms-and-conditions" style="color: ${customIosBlue}"; text-decoration: underline;">terms and conditions</a>.`;
};
export const sureCloseAccountQuestion =
  "are you sure you wish to close your account with us?";
export const sureSendContactFormMessage =
  "are you sure you want to send this message?";
export const sureSendUpdatePasswordLinkMessage =
  "are you sure you wish to send a link to your email to update your password?";
export const sureResetPasswordMessage =
  "are you sure you wish to reset your password?";
export const sureUpdatePasswordMessage =
  "are you sure you wish to update your password?";
export const imSureMessage = "i'm sure";
export const addFundsMessage = "yes, add funds!";
export const yesSendIt = "yes, send it!";
export const yesAddChild = "yes, add child";
export const confirmUpdateEmailMessage = (newEmail) => {
  return `are you sure you wish to update your email to be <span style="text-transform: lowercase;  color: hsl(60, 100%, 50%);">${newEmail}</span>?`;
};
export const confirmRequestWalletBalance = `<span style="font-size: 20px;">when you tap 'get balance' below,  we will contact our servers to check for your latest wallet balance. if different to what is currently here,  it will updated automatically. if there is no change and you still think that your balance is incorrect, please contact us using our contact form.</span>`;
export const confirmAddChildMessage =
  "are you sure you want to add this child?";
export const confirmUpdateChildMessage =
  "are you sure you want to update your childs details?";
export const confirmDeleteChildMessage =
  "are you sure you want to delete your child?";
export const confirmUploadDatesMessage = "do you want to upload these dates?";
export const confirmUpdateMorningSessionClosingTimeMessage =
  "are you sure you want to update the latest time that a user can book or cancel a morning session?";
export const newMorningSessionTimeInfoMessage = (
  newMorningBookingClosingTime
) => {
  return `the new time will be ${newMorningBookingClosingTime}AM`;
};
export const confirmUpdateAfternoonSessionClosingTimeMessage =
  "are you sure you want to update the latest time that a user can book or cancel an afternoon session?";
export const newAfternoonSessionTimeInfoMessage = (
  newAfternoonBookingClosingTime
) => {
  return `the new time will be ${newAfternoonBookingClosingTime}PM`;
};
export const confirmUpdateMorningSessionTime =
  "are you sure you'd like to update the morning session time?";
export const confirmUpdateAfternoonShortSessionTime =
  "are you sure you'd like to update the afternoon short session time?";
export const confirmUpdateAfternoonLongSessionTime =
  "are you sure you'd like to update the afternoon long session time?";
export const confirmUpdateMorningSessionPriceMessage =
  "are you sure you'd like to update the morning session price?";
export const confirmUpdateAfternoonShortSessionPriceMessage =
  "are you sure you'd like to update the afternoon short session price?";
export const confirmUpdateAfternoonLongSessionPriceMessage =
  "are you sure you'd like to update the afternoon long session price?";
export const confirmUpdateMorningAndAfternoonShortSessionPriceMessage =
  "are you sure you'd like to update the morning and afternoon short session price?";
export const confirmUpdateMorningAndAfternoonLongSessionPriceMessage =
  "are you sure you'd like to update the morning and afternoon long session price?";
export const confirmUpdateUserBalanceMessage =
  "are you sure you wish to update the wallet balance of this user?";
export const confirmManuallyAddBookingToDatabase =
  "are you sure you want to manually add this booking to the database?";
export const confirmDeleteChildDocument =
  "are you sure you want to delete the users child?";
export const confirmDeleteUserDocument =
  "are you sure you want to delete the user?";
export const confirmUpdateSessionSpacesMessage =
  "are you sure you wish to update the session spaces?";
export const confirmCreateUserMessage =
  "are you sure you want to create this user?";
export const shouldSendEmailMessage = `<span style="font-size: 20px;">do you wish to send an email confirmation of the booking to the user?<br/><br/>tap 'cancel' if you do not wish to send an email.</span>`;
export const shouldSendCancelledBookingEmailMessage = `<span style="font-size: 20px;">do you wish to send a confirmation email of the cancelled booking to the user?<br/><br/>tap 'cancel' if you do not wish to send an email.</span>`;

export const bookingSuccessfulConfirmSendEmailMessage = `<span style="font-size: 20px;"><span style="color: ${customYellow}">booking successful!</span><br/>do you want to send a confirmation email?<br/><br/>tap '<span style="color: ${customYellow}">cancel</span>' if you do <span style="color: ${customYellow}">NOT</span> wish to be sent an email.</span><br/>`;
export const recurringBookingsSuccessfulConfirmSendEmailMessage = `<span style="font-size: 20px;"><span style="color: ${customYellow}">bookings successfully made!</span><br/>do you want to send a confirmation email?<br/><br/>tap '<span style="color: ${customYellow}">cancel</span>' if you do <span style="color: ${customYellow}">NOT</span> wish to be sent an email.</span><br/>`;

export const sendEmailButtonText = "yes, send an email";
export const bookAnotherSessionQuestion = `<span style="font-size: 20px;">would you like to book another session?<br/><br/>if not, tap '<span style="color: ${customYellow}">cancel</span>' to return to your bookings page.</span><br/>`;
export const recurringBookingsBookMoreSessionsQuestion = `<span style="font-size: 20px;">would you like to book more sessions?<br/><br/>if not, tap '<span style="color: ${customYellow}">cancel</span>' to return to your bookings page.</span><br/>`;

export const emailSentBookAnotherSessionQuestion = `<span style="font-size: 20px;"><span style="color: ${customYellow}">email sent!</span><br/>do you want to book another session?<br/><br/>tap '<span style="color: ${customYellow}">cancel</span>' to return to your bookings table.</span><br/>`;

export const confirmAppOwnerViewAllBookingsMessage = `<span style="font-size: 20px;">do you wish to go to the page that will show every booking ever taken?<br/>you should only need this page if you want to see past bookings, otherwise choose<br/>'<span style="color:${customYellow};">customer bookings</span>'.<br/><br/>Depending on the amount of bookings you have, this may take a while to load so please be patient :)</span>`;
export const confirmNotAppOwnerViewAllBookingsMessage = `<span style="font-size: 20px;">do you wish to go to the page that will show you every booking you have ever made?<br/>you should only need this page if you want to see your past bookings.<br/><br/>Depending on the amount of bookings you have, this may take a while to load so please be patient :)</span>`;

export const confirmUpdateRegistrationSignInMessage = (
  hasSignedIn,
  numberOfChildrenInBooking,
  childrenInBooking
) => {
  const namesInSession =
    removeStarFromChildrensNamesIfExists(childrenInBooking);

  return `<span style="font-size: 20px;">${
    hasSignedIn && numberOfChildrenInBooking === 1
      ? `this will revert <br/><span style="color: yellow;">${namesInSession}</span><br/>to not being signed into the session.<br/>please only do this if you made a mistake signing the child in.<br/>to sign a child out, please tap the appropriate button under the 'signed out' header.`
      : hasSignedIn && numberOfChildrenInBooking > 1
      ? `this will revert <br/><span style="color: yellow;">${formatChildNames(
          namesInSession
        )}</span><br/>to not being signed into the session.<br/>please only do this if you made a mistake signing the children in.<br/>to sign the children out, please tap the appropriate button under the 'signed out' header.`
      : !hasSignedIn && numberOfChildrenInBooking === 1
      ? `do you wish to sign<br/><span style="color: yellow;">${namesInSession}</span><br/>into the session?`
      : !hasSignedIn &&
        numberOfChildrenInBooking > 1 &&
        `do you wish to sign<br/><span style="color: yellow;">${formatChildNames(
          namesInSession
        )}</span><br/>into the session? `
  }</span>`;
};

export const confirmUpdateRegistrationSignOutMessage = (
  hasSignedOut,
  numberOfChildrenInBooking,
  childrenInBooking
) => {
  const namesInSession =
    removeStarFromChildrensNamesIfExists(childrenInBooking);

  return `<span style="font-size: 20px;">${
    hasSignedOut && numberOfChildrenInBooking === 1
      ? `this will revert <br/><span style="color: yellow;">${namesInSession}</span><br/>to not being signed out of the session.<br/>please only do this if you made a mistake signing the child out.`
      : hasSignedOut && numberOfChildrenInBooking > 1
      ? `this will revert <br/><span style="color: yellow;">${formatChildNames(
          namesInSession
        )}</span><br/>to not being signed out of the session.<br/>please only do this if you made a mistake signing the children out.`
      : !hasSignedOut && numberOfChildrenInBooking === 1
      ? `do you wish to sign<br/><span style="color: yellow;">${namesInSession}</span><br/>out of the session?`
      : !hasSignedOut &&
        numberOfChildrenInBooking > 1 &&
        `do you wish to sign<br/><span style="color: yellow;">${formatChildNames(
          namesInSession
        )}</span><br/>out of the session? `
  }</span>`;
};
export const confirmUpdateEmergencyContactsMessage =
  "Are you sure you want to upload these contact details?";
export const confirmDeleteFirstEmergencyContactsMessage =
  "Are you sure you want to delete your first emergency contact details?";
export const confirmDeleteSecondEmergencyContactsMessage =
  "Are you sure you want to delete your second emergency contact details?";
export const confirmGoToRecurringBookingsRoute =
  "Are you sure you want to move to the page where you can book recurring sessions for the month?";
export const confirmChangeChildrenQuestion = `<span style="font-size: 20px;">are you sure you want to change the children that you wish to make the bookings for?<br/><br/>this will reload the page.</span>`;
export const confirmChangeDayQuestion = `<span style="font-size: 20px;">are you sure you want to change the day that you wish to make the bookings for?<br/><br/>this will reload the page.</span>`;
