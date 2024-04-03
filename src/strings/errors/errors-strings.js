import { getSessionTypeString } from "../../functions/get-session-type-string";

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
export const passwordsDontMatchMessage =
  "the password and confirm password fields don't match. Please try again. Tap the eye icon to view data entered in the fields.";
export const noNetworkMessage =
  "there is no internet connection. Please check your connection and try again.";
export const pleaseEnterYourCardDetails = "please enter your card details";
export const formNotCompleteWarning =
  "the pay button will show when the form is complete";
export const errorSubmittingPaymentMessage =
  "Sorry, There Was An Error Submitting Payment. Your Card Has Not Been Charged. Please Try Again or contact us if the problem persists.";
export const appwritePasswordError =
  "Invalid credentials. Please check the email and password.";
export const errorRequestResetPasswordLinkMessage =
  "error requesting your reset password link";
export const errorRequestUpdatePasswordLinkMessage =
  "error requesting update password link. please try again.";
export const errorSendingAccountClosureRequest =
  "sorry, there was an error sending your request.";
export const errorResettingPassword =
  "sorry, there was an error resetting your password";
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
export const failedToUpdateBalanceMessage = `<span style="font-size: 20px;">there was an error when adding your funds. the payment has successfully completed, but there was an error updating your balance in our database. please tap 'ok' below. This will email the app owner with all the necessary details so that they can update the database manually. the app owner will then email you when your balance has been successfully updated. you will then be asked to tap on the button that says 'not correct' under your wallet balance in the 'account' page to refresh your balance. if you urgently need to book a session, please contact us using the contact form. We are sorry for the inconvenience!</span>`;
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
  "sorry, just before you pressed the confirm button, another user booked the last session..";
export const errorAddingChild = "there was an error adding your child";
export const enterChildsName = "please enter your childs full name";
export const enterChildsAge = "please enter your childs age";
export const errorFetchingChildren =
  "there was an error fetching your child / children";
export const errorFetchingChildDetails =
  "sorry, there was an error fetching the children details...";
export const errorReceivedMessage = (error) => {
  return `the error received was: '${error}'. please contact us if the error persists.`;
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
export const errorDeletingChildMessage =
  "sorry, there was an error deleting your child. please try again.";
export const appwriteAgeAttributeErrorMessage =
  'Attribute "age" has invalid format';
export const cantIncludeCommaMessage = "names can't include a comma";
export const alreadyHaveChildNameMessage =
  "you can't add a child with the same name.";
export const contactFormDetailsPrePopulatedMessage =
  "please contact us urgently by tapping the ok button. We will populate the contact form with the details we need to fix our error, so you simply need to press the 'send message' button when on the contact form. We apologise for the inconvenience.";
export const errorTryingToCancelBookingMessage =
  "sorry, there was an error trying to cancel your booking";
export const tryingToCancelErrorMessage = (error) => {
  return `the error received was: ${error}. If the issue persists, please contact the school directly to cancel your booking. We apologise for the inconvenience.`;
};
export const errorCancellingBookingMessage =
  "sorry, there was an error cancelling your booking.";
export const errorInstructions =
  "please tap ok to continue. This will email the app owner with details of the error, allowing them to fix it manually. Your balance has not been affected. We apologise for the inconvenience.";
export const cantCancelPastBookingMessage =
  "sorry, you can't cancel a past booking.";
export const tooLateToCancelMorningMessage =
  "it's too late to cancel your morning session.";
export const tooLateToCancelAfternoonMessage =
  "it's too late to cancel your afternoon session.";
export const tooLateToCancelDualSession =
  "it's too late to cancel your dual session.";
export const cancelBeforeTimeMessage = (time) => {
  return `please cancel before ${time} if you wish to cancel the session.`;
};
export const errorSendCancellationConfirmationEmailMessage = `<span style="font-size: 20px;">sorry, there was an error sending you the email with confirmation of this cancellation. Rest assured though, your booking has been cancelled and funds have been added to your wallet. if you require this email confirmation, please contact us using our contact form.</span>`;
export const errorFetchingBalanceMessage =
  "sorry, we couldn't fetch your balance..";
export const invalidSchoolCode = "Invalid school code";
export const invalidSchoolCodeHelpMessage =
  "please try again. if you have forgotten your code, please contact your school. please note that the school code is case sensitive";
export const passwordLengthErrorMessage =
  "password must be at least 8 characters in length. please try again";
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
export const errorRequestingFacebookSignIn =
  "error requesting facebook sign in. please try again.";
export const errorRequestingGoogleSignIn =
  "error requesting google sign in. please try again.";
