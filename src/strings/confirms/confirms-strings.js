import { format } from "date-fns";

import { getSessionTypeString } from "../../functions/get-session-type-string";

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
export const fundsDeductedFromBalance = (sessionPrice) => {
  return `£${(sessionPrice / 100).toFixed(
    2
  )} will be deducted from your wallet balance.`;
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
