import { getSessionTypeString } from "../../functions/get-session-type-string";
import { customYellow } from "../../styles/colors";

export const errorSigningInInstructions =
  "please check your email, password and school code and try again.";
export const errorSendingMessage =
  "sorry, there was an error sending your message...";
export const missingEmailFieldsErrorMessage =
  "please make sure that all required fields have been entered.";
export const invalidEmailErrorMessage =
  "the email that you have entered is an invalid email address. Please try again.";
export const missingFieldsMessage =
  "please make sure that all required fields have been entered before tapping sign in.";
export const errorSigningInMessage = "error signing in..";
export const errorSigningUpMessage = "error signing up..";
export const passwordsDontMatchMessage = `<span style="font-size:20px";>the password and confirm password fields don't match.<br/><br/>Please try again.<br/><br/>You can Tap the eye icon to view data entered in the fields.</span>`;
export const noNetworkMessage =
  "there is no internet connection. Please check your connection and try again.";
export const pleaseEnterYourCardDetails = "please enter your card details";
export const formNotCompleteWarning =
  "the pay button will show when the form is complete";
export const errorSubmittingPaymentMessage = (error) => {
  return `<span style="font-size:20px";>Sorry, There Was An Error Submitting Payment. Your Card Has Not Been Charged. Please Try Again or contact us if the problem persists.<br/><br/>The error received was:<br/>'<span style="color:${customYellow}";>${error}</span>'</span>`;
};
export const appwritePasswordError =
  "Invalid credentials. Please check the email and password.";
export const errorRequestResetPasswordLinkMessage =
  "error requesting your reset password link";
export const errorRequestUpdatePasswordLinkMessage =
  "error requesting update password link. please try again.";
export const errorSendingAccountClosureRequest =
  "sorry, there was an error sending your request.";
export const errorResettingPassword =
  "sorry, there was an error resetting your password.";
export const errorUploadingDatesToDatabaseMessage =
  "sorry, there was an error uploading the dates to the database..";
export const paymentSucceededButDatabaseUpdateErrorMessage =
  "your payment succeeded but the database had an error updating your wallet.";
export const emailAddressNotInDatabase =
  "the email address you entered does not match any email in our database.";
export const appwriteNoUserError =
  "User (role: guests) missing scope (account)";
export const appwriteIdAlreadyExistsError =
  "Document with the requested ID already exists.";
export const appwriteUserNotFoundMessage =
  "User with the requested ID could not be found.";
export const invalidTokenPassedInRequest =
  "Invalid token passed in the request.";
export const errorUpdatingPasswordMessage =
  "sorry, there was an error updating your password.";
export const mustBeSignedInMessage =
  "you must be signed in to perform this request.";
export const sessionDocFailureMessage = "session doc failure";
export const balanceDocFailureMessage = "balance doc failure";
export const resetSessionDocFailureMessage = "reset session doc failure";
export const updateSessionDocErrorMessage = `<span style="font-size: 20px;">there was an error booking your session. your wallet balance has not changed. if the issue persists, please contact us using the contact form and quote the following error:</span>`;
export const errorUpdatingBalanceMessage = `<span style="font-size: 20px;">sorry, there was an error making your booking. please tap the "ok" button to continue. if the issue continues, please contact us using the contact form and quote the following error:</span>`;
export const resetSessionErrorMessage = `<span style="font-size: 20px;">well this is embarassing.. We've had another error on our end.</span>`;
export const failedToSendEmailInstructions = `<span style="font-size: 20px;">sorry, the email failed to send...please contact the school as soon as possible telling us what you were trying to do, so we can fix our error. We apologise for the inconvenience. please tap ok to continue!</span>`;
export const failedToUpdateBalanceMessage = `<span style="font-size: 20px;">there was an error when adding your funds. the payment has successfully completed, but there was an error updating your balance in our database. please tap 'ok' below. This will email the app owner with all the necessary details so that they can update the database manually. Once they have done this, the correct balance should immediately show in your account. please allow 24 hours for this to occur. After 24hrs, If you still think that your balance is not correct, please tap on the button that says 'not correct' under your wallet balance in the 'account' page to refresh your balance. if you urgently need to book a session, please contact us using the contact form. We are sorry for the inconvenience!</span>`;
export const failedToUpdateBalanceOnCancellationMessage = `<span style="font-size:20px;">sorry, your booking was cancelled, but your balance was not updated correctly. please tap on 'ok' below. When you do, we will send an email to the app owner with the details required to manually update your balance. if your balance has not updated within 24h hours, please contact us using the contact form. We apologise for the inconvenience!</span>`;
export const sessionAlreadyBookedMessage = (childrenSelectedForBooking) => {
  return childrenSelectedForBooking.length
    ? "you have children booked into this session already."
    : "you have already booked this session for this day.";
};
export const fundsAddedBalanceUpdateFailedMessage = `<span style="font-size: 20px;">your payment was successful! however, although your funds were successfully added to our database, we couldn't update the balance in the app due to an error on our end. please tap on the button that says 'not correct' in your account page to try updating your balance again. if the issue persists, please contact us!</span>`;
export const sessionAlreadyBookedInstructions =
  "please check your bookings for this day to prevent double bookings.";
export const mutipleChildBookingChildAlreadyBookedMessage = (sessionType) =>
  ` has already been booked for the ${getSessionTypeString(
    sessionType
  )} session on this day.`;
export const removeChildFromSelectionMessage =
  "if you want to book this session, please remove this child from your selection to prevent double booking.";
export const addSessionBookingInfoErrorMessage = `<span style="font-size: 16px;">sorry, there was an error completing your session booking. the funds were deducted from your wallet but our database didn't receive your booking info. When you tap ok below, we will automatically send an email to the app owner who will then manually add your booking details to the database. Rest assured, you can still send your child(ren) in for the session you have just booked! If the booking does not show up in your 'bookings' section within 24hrs, please contact us using our contact form. Please tap 'ok' below to continue!</span>`;
export const lastMinuteNoSessionsMessage =
  "sorry, just before you pressed the confirm button,  the last available session was booked :(";
export const errorAddingChild = "sorry, there was an error adding your child.";
export const errorAddingChildGenericError = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error adding your child. the error received was:<br/><br/>'<span style="color: ${customYellow}";>${error}</span>'.<br/><br/>If the issue persists, please contact us. We apologise for the inconvenience.</span>`;
};
export const errorUpdatingChildGenericError = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error updating your child details. the error received was:<br/><br/>'<span style="color: ${customYellow}";>${error}</span>'.<br/><br/>If the issue persists, please contact us. We apologise for the inconvenience.</span>`;
};
export const enterChildsName = "please enter your childs full name";
export const enterChildsAge = "please enter your childs age";
export const errorFetchingChildren =
  "there was an error fetching your child / children";
export const errorFetchingChildDetails =
  "sorry, there was an error fetching the children details...";
export const errorReceivedMessage = (error) => {
  return `the error received was: '${error}'. please contact us if the error persists.`;
};
export const errorReceivedMessageWithoutContactDetail = (error) => {
  return `the error received was: '${error}'.`;
};
export const morningSessionSpacesErrorMessage = (childrenSelectedLength) => {
  return `sorry, we don't have enough morning session spaces remaining to cover ${childrenSelectedLength} children.`;
};
export const morningSpacesRemainingMessage = (morningSessionSpaces) => {
  return `for this session, we have ${morningSessionSpaces} space(s) remaining today.`;
};
export const afternoonSessionSpacesErrorMessage = (childrenSelectedLength) => {
  return `sorry, we don't have enough afternoon session spaces remaining to cover ${childrenSelectedLength} children.`;
};
export const afternoonSpacesRemainingMessage = (afternoonSessionSpaces) => {
  return `for this session, we have ${afternoonSessionSpaces} space(s) remaining today.`;
};
export const errorSendingBookingConfirmationEmail =
  "there was an error sending your booking confirmation email.";
export const errorUpdatingChild =
  "sorry, there was an error updating your childs information. please try again.";
export const errorDeletingChildMessage = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error when trying to delete your child. the error received was:<br/><br/>'<span style="color: ${customYellow}";>${error}</span>'.<br/><br/>If the issue persists, please contact us. We apologise for the inconvenience.</span>`;
};
// export const errorDeletingChildMessage =
//   "sorry, there was an error deleting your child. please try again.";
export const appwriteAgeAttributeErrorMessage =
  'Attribute "age" has invalid format';
export const cantIncludeCommaMessage = "names can't include a comma";
export const alreadyHaveChildNameMessage =
  "you can't add a child with the same name.";
export const contactFormDetailsPrePopulatedMessage =
  "please contact us urgently by tapping the ok button. We will populate the contact form with the details we need to fix our error, so you simply need to press the 'send message' button when on the contact form. We apologise for the inconvenience.";
export const tryingToCancelErrorMessage = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error trying to cancel your booking. the error received was:<br/><br/><span style="color: ${customYellow}";>${error}</span>.<br/><br/>If the issue persists, please contact the school directly to cancel your booking. We apologise for the inconvenience.</span>`;
};
export const errorCancellingBookingMessage =
  "sorry, there was an error cancelling the booking.";
export const errorInstructions =
  "please tap ok to continue. This will email the app owner with details of the error, allowing them to fix it manually. Your balance has not been affected. We apologise for the inconvenience.";

export const tooLateToCancelMorningMessage =
  "it's too late to cancel your morning session.";
export const tooLateToCancelAfternoonMessage =
  "it's too late to cancel your afternoon session.";
export const cancelBeforeTimeMessage = (time) => {
  return `please cancel before ${time} if you wish to cancel the session.`;
};
export const errorSendCancellationConfirmationEmailMessage = `<span style="font-size: 20px;">sorry, there was an error sending you the email with confirmation of this cancellation. Rest assured though, your booking has been cancelled and funds have been added to your wallet. if you require this email confirmation, please contact us using our contact form.</span>`;
export const errorFetchingBalanceMessage =
  "sorry, we couldn't fetch your balance..";
export const invalidSchoolCode = "Invalid school code";
export const invalidSchoolCodeHelpMessage =
  "please try again. if you have forgotten your code, please contact your school. please note that the school code is case sensitive";
export const passwordLengthErrorMessage = `password must be at least 8 characters in length.<br/><br/>please try again.`;
export const phoneNumberLengthErrorMessage =
  "your phone number must be 11 digits long";
export const consentOptionErrorMessage =
  "please 'yes' or 'no' for the consent option";
export const errorSigningOutMessage =
  "sorry, there was an error signing you out.";
export const passwordErrorMessage = "password error";
export const errorUpdatingEmailMessage =
  "sorry, there was an error updating your email address.";
export const errorFetchingAllChildrenMessage =
  "there was an error fetching the list of children from the database.";
export const appwriteCredentialsError =
  "Invalid credentials. Please check the email and password.";
export const updateSessionClosingTimeFormatErrorMessage =
  "the new time should be 5 characters long in the format of HH:MM";
export const timeIsInvalidErrorMessage = "the time you entered is invalid.";
export const sameTimeErrorMessage =
  "the time you have chosen is the same as the one currently in the database.";
export const chooseAnotherTimeMessage = "please choose another time.";
export const errorUpdatingBookingClosingTimeMessage =
  "sorry, there was an error updating the booking closing time.";
export const sessionClosingTimesInfoMessage =
  "the hour digits should be between 00 & 23 or after and the minutes should be between 00 & 59.";
export const errorUpdatingSessionTime =
  "sorry, there was an error updating the session time.";
export const updatingSessionTimeFormattingErrorMessage =
  "the time you entered isn't formatted correctly.";
export const updatingSessionTimeInfoMessage =
  "please see the example in the 'important info' section at the top of the page and make sure that your new time matches 'HH:MM - HH:MM'";
export const newPriceInvalidFormatErrorMessage = `<span style="font-size: 20px;">the price you entered is in an invalid format. please make sure you have followed the formatting as described in the 'important info' section at the top of the page.</span>`;
export const priceSameAsBeforeErrorMessage =
  "the price you have entered is the same as it currently is";
export const chooseAnotherPriceMessage = "please choose another price.";
export const dbManageErrorUpdatingBalanceAfterCancellingBookingMessage =
  "there was an error updating a users balance after they cancelled a booking.";
export const emptyFieldsMessage =
  "please make sure that all fields have been filled in";
export const documentLengthErrorMessage =
  "the id field should be 20 characters in length";
export const refundPriceLengthErrorMessage =
  "the refund price should be no more than 5 characters in length";
export const whiteSpaceErrorMessage = `<span style="font-size: 20px;">one or some of your entered values starts or ends with a space ( ' ' ). please make sure there is no white space at the beginning or end of the data you are trying to input.</span>`;
export const schoolCodeWhiteSpaceErrorMessage = `<span style="font-size: 20px;">the school code you entered starts or ends with a space.<br/>( ' ' )<br/>please make sure there is no white space at the beginning or end of the school code.</span>`;
export const dbManageErrorAddingBookingToDatabaseMessage =
  "there was an error adding a users booking to the database";
export const dbManageErrorUpdatingSessionSpacesAndBalanceAfterCancelledBookingMessage =
  "there was an error updating the session spaces and the users balance when they cancelled a booking";
export const passwordCantContainSpaceMessage = `<span style="font-size: 20px;">the password can't contain a space ( ' ' ).<br/>please check there are no whitespaces in your password - particularly at the beginning or end.</span>`;

export const invalidDateErrorMessage = `<span style="font-size: 20px;">the date you entered has an invalid format.</span>`;
export const invalidSessionTypeErrorMessage = `<span style="font-size: 20px;">the session type you entered has an invalid format. please check for typos and whitespace at the beginning or end of the value you entered.</span>`;
export const invalidNumberOfChildrenErrorMessage = `<span style="font-size: 20px;">the number of children should be greater than 0.</span>`;
export const errorUpdatingUsersBalanceMessage =
  "sorry, there was an error updating the users balance.";
export const errorUpdatingSessionSpacesMessage =
  "sorry, there was an error updating the session spaces.";
export const couldntFetchUsersChildrenErrorMessage = `<span style="font-size: 20px;">sorry, there was an error fetching your childrens details from the database. We need this information to send to the app owner so that they can delete all of the data associated with your account. please try again, or contact us if the error persists.</span>`;
export const cantHaveUppercaseCharactersErrorMessage = `<span style="font-size: 20px;">  the input can't have uppercase characters.</span>`;
export const cantHaveUppercaseCharactersExceptSessionSpacesErrorMessage = `<span style="font-size: 20px;">  the inputs ( apart from the 'sessionType' ), can't have uppercase characters.</span>`;
export const bookingCancelledBalanceUpdateFailedMessage = `<span style="font-size: 20px;">  there was an error cancelling the booking. Whilst the booking itself was cancelled, updating the users balance and therefore session spaces, failed. please contact jonathan urgently - quoting the date on the booking, the session type, the number of children in the booking and the user id of the parent.</span>`;
export const bookingCancelledBalanceUpdatedSessionSpacesFailedMessage = `<span style="font-size: 20px;">  there was an error cancelling the booking. Whilst the booking itself was cancelled and the users balance updated, updating the session spaces, failed. please contact jonathan urgently - quoting the date on the booking, the session type and the number of children in the booking.</span>`;
export const bookingCancelledSessionSpacesFailedMessage = `<span style="font-size: 20px;">  there was an error cancelling the booking. Whilst the booking itself was cancelled, updating the session spaces failed. please contact jonathan urgently - quoting the date on the booking, the session type and the number of children in the booking.</span>`;
export const balanceUpdatedSessionSpacesFailedErrorMessage = `<span style="font-size: 20px;">the was an error adding the booking. The users balance was updated correctly, but we couldn't update the session spaces and therefore add the booking. please don't try to submit the form again. Instead, contact Jonathan urgently and tell him the following error message: 'update balance suceeded, update session spaces and booking failed'. please also give him all of the booking details that you just tried to submit so that he can update the database manually.</span>`;
export const bookingManuallyAddedFailedErrorMessage = `<span style="font-size: 20px;">there was an error adding the booking. please try again and if the error persists, contact jonathan, giving him the details of the booking contained in the form that you just tried to submit.</span>`;
export const balanceUpdateFailedErrorMessage = `<span style="font-size: 20px;">sorry, we couldn't add the booking as updating the users balance failed. please try again, or if the error persists, contact jonathan - giving him all of the details of the booking that you were just trying to book so that he can update the database manually</span>`;
export const userHasInsufficentFundsErrorMessage =
  "the user doesn't have enough wallet balance in their account to make this booking. please get them to add funds to their account and try again.";
export const balanceAddedSessionSpacesUpdatedAddBookingFailedErrorMessage = `<span style="font-size: 20px;">the was an error adding the booking. The users balance and  session spaces were updated correctly, but we couldn't add the booking details to the database. please don't try to submit the form again. Instead, contact Jonathan urgently and tell him the following error message: 'update balance and update session spaces succeeded. Update booking failed'. please also give him all of the booking details that you have just tried to submit so that he can update the database manually.</span>`;
export const sessionSpacesUpdatedAddBookingFailedErrorMessage = `<span style="font-size: 20px;">sorry, there was an error adding the booking. the session spaces were updated correctly but we couldn't add the booking info to the database. Please don't try to submit the form again. Instead, please contact jonathan and give him the following error: 'update session spaces succeeded, update booking failed'. Please also give him all of the data you were just trying to submit in the form so that he can update the database manually.</span>`;
export const bookingManuallyCancelledFailedErrorMessage = `<span style="font-size: 20px;">there was an error cancelling the booking. please try again and if the error persists, contact jonathan, giving him the booking id of the booking you wish to cancel.</span>`;
export const sessionSpacesUpdatedDeleteDocumentFailedErrorMessage = `<span style="font-size: 20px;">there was an error cancelling the booking. please don't try to submit the form again. Instead, contact Jonathan and give him the following error: 'update session spaces succeeded, remove booking failed'. please also give him the booking id of the booking you were trying to cancel.</span>`;
export const balanceUpdatedSessionSpacesFailedWhenCancellingErrorMessage = `<span style="font-size: 20px;">there was an error cancelling the booking. please don't try to submit the form again. Instead, contact Jonathan and give him the following error: 'update balance succeeded, update session spaces and remove booking failed'. please also give him the booking id of the booking you were trying to cancel.</span>`;
export const balanceUpdatedSessionSpacesUpdatedDeleteDocFailedWhenCancellingErrorMessage = `<span style="font-size: 20px;">there was an error cancelling the booking. please don't try to submit the form again. Instead, contact Jonathan and give him the following error: 'update balance and update session spaces succeeded, remove booking failed'. please also give him the booking id of the booking you were trying to cancel.</span>`;
export const errorCreatingUserMessage = "there was an error creating the user.";
export const couldntFindBookingToCancelMessage = `<span style="font-size: 20px;">there was an error trying to cancel your booking. the booking was not found. a common cause of this happening is if the page has been reloaded before attempting to cancel the booking. We will take you back to the table when you tap ok. please reselect the booking, then try again.</span>`;
export const bookingsEmailUpdatedChildrensListFailedErrorMessage = (error) => {
  return `<span style="font-size: 20px;">there was an error trying to update the database. The bookings were updated with the new email but the childrens list was not. please contact jonathan and quote this error: 'update bookings email succeeded, update childrens list email failed'. Please also forward the email with the details that you received to him so he can fix the error.the  error received was: '${error}'</span>`;
};
export const latestBookingsUpdateEmailFailedErrorMessage = `<span style="font-size: 20px;">there was an error trying to update the database. please try again or contact jonathan if the error persists.</span>`;
export const errorSendingCancellationEmailMessage =
  "sorry, there was an error sending the email.";
