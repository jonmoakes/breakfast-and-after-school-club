import { format } from "date-fns";
import { getSessionTypeString } from "../functions/get-session-type-string";

//errors
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
export const errorRequestForgotPasswordLinkMessage =
  "error requesting your forgot password link";
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
export const uploadFundsDatabaseErrorInstructions = (
  error,
  walletFundsToAdd
) => {
  return `the error received was: '${error.message}'. please contact the app owner quoting the error message and the amount you tried to add to your wallet ( £${walletFundsToAdd} ). We apologise for the error!`;
};
export const errorRquestingOAuth2Session =
  "error requesting OAuth2Session. please try again";
export const errorRequestingFacebookSignIn =
  "error requesting facebook sign in. please try again.";
export const errorRequestingGoogleSignIn =
  "error requesting google sign in. please try again.";
export const emailAddressNotInDatabase =
  "the email address you entered does not match any email in our database.";
export const errorRequestingMagicUrl =
  "there was an error requesting your magicUrl link";
export const magicUrlNoUserDocCreatedMessage =
  "your user session was created but we couldn't finish the process of creating your account. please contact us using our contact form quoting this error message.";
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
export const failedToSendEmailInstructions = `<span style="font-size: 20px;">sorry, the email failed to send...when you tap ok, you will be redirected to the 'contact us' page, with the form pre populated with the details that we need to fix our error, so please simply press the 'send message' button when on the contact form. We apologise for the inconvenience. please tap ok to continue!</span>`;
export const sessionAlreadyBookedMessage = (childrenSelectedForBooking) => {
  return childrenSelectedForBooking.length
    ? "you have children booked into this session already."
    : "you have already booked this session for this day.";
};

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
export const morningSessionSpacesInvalidDocError =
  'Invalid document structure: Attribute "morningSessionSpaces" has invalid format. Value must be a valid range between 0 and 30';
export const afternoonSessionSpacesInvalidDocError =
  'Invalid document structure: Attribute "afternoonSessionSpaces" has invalid format. Value must be a valid range between 0 and 30';
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
export const getBookingInfoEmailInstructions =
  "if you require this email, please contact us using the contact form on our website. Rest assured however, your booking has been successfully made!";
export const errorUpdatingChild =
  "sorry, there was an error updating your childs information. please try again.";
export const errorDeletingChildMessage =
  "sorry, there was an error deleting your child. please try again.";
export const appwriteAgeAttributeError =
  "Value must be a valid range between 4 and 11";
export const ageError = "the age value should be between 4 and 11";
export const cantIncludeCommaMessage = "names can't include a comma";
export const alreadyHaveChildNameMessage =
  "you can't add a child with the same name.";
export const bookingCancelledButBalanceUpdateError =
  "sorry, your booking was cancelled, but your balance was not updated correctly.";
export const contactFormDetailsPrePopulatedMessage =
  "please contact us urgently by tapping the ok button. We will populate the contact form with the details we need to fix our error, so you simply need to press the 'send message' button when on the contact form. We apologise for the inconvenience.";
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
export const cancelBeforeTimeMessage = (hour) => {
  return `please cancel before ${hour} if you wish to cancel a session.`;
};
export const couldntFetchPreviousBookingsMessage =
  "sorry, we couldn't fetch your previous bookings, which we use to check for double bookings.";
export const requestUserCheckForDoubleCheckBookings =
  "by proceeding, you confirm that you have checked that you have not double booked any sessions. If you do make a mistake however, you can always cancel bookings from your bookings table.";
// success
export const successMessage = "success!";
export const checkEmailMessage = "please check your email!";
export const fundsAddedMessage = (email) => {
  return `Success! The funds have been added to your wallet and a confirmation Email Has Been Sent To<br/><span style="text-transform: lowercase; font-size: 20px; color: hsl(60, 100%, 50%);">${email}</span>`;
};
export const passwordResetSuccessMessage =
  "your password has been successfuly reset!";
export const closeAccountSuccess =
  "the closure of your account is now being processed!";
export const datesUploadedToDatabaseSuccessMessage =
  "the dates have been successfully uploaded to the database!";
export const viewBookingsMessage =
  "you can view your sessions in the 'bookings' page.";
export const sessionBookedMessage = "session booked!";
export const childAddedMessage = "child added!";
export const childUpdatedMessage = "child details updated!";
export const childDeletedMessage =
  "the child has been deleted from the database!";

// infos
export const emailResponseTimeMessage = "Your Message Has Been Sent!";
export const loseAllDataMessage =
  "you will lose any data that you have currently entered into this form.";
export const signInWithNewPasswordMessage =
  "you can now sign in with your new password.";
export const emailChangedMessage = "email changed!";
export const signInWithNewEmailMessage =
  "for security reasons, we will now sign you out of all sessions. please wait until you are redirected to the sign in page, where you can then sign in with your new email address.";
export const signOutThenSignInWithNewPasswordMessage =
  "for security reasons, we will now sign you out of all sessions. please wait until you are redirected to the sign in page, where you can then sign in with your new password.";
export const passwordErrorMessage = "password error";
export const passwordErrorInstructions =
  "please check your password and try again";
export const errorUpdatingEmailMessage =
  "sorry, there was an error updating your email address.";
export const passwordUpdateMustBeSignedInMessage =
  "you must be signed in in order update your password";
export const receiveEmailWhenCompleteMessage =
  "you will receive an email when the process is complete.";
export const walletHasPositiveBalanceMessage =
  "please either spend or request a refund for this amount before proceeding";
export const loseAllAccountDataMessage = "you will permanently lose all data";
export const contactOwnerQuotingError =
  "your wallet balance will not be showing correctly. please contact the owner quoting the following error: ";
export const clickedOnInvalidLinkMessage = `you may have clicked on a sign in link in your email that has already been used. please request another link from the sign in page.`;
export const chooseAnotherEmailMessage =
  "please choose a different email address.";
export const sameEmailMessage = "that's the email you currently use.";
export const alreadyClickedOnUpdatePasswordLink =
  "you may have clicked on a sign in link in your email that has already been used. please sign in and request another link from the 'update password' page which you can find in your account page.";
export const checkBackRegularlyMessage =
  "if a session becomes available again, it will appear here in realtime so please check back often!";
export const entriesAreTheSameMessage = "you haven't changed any data yet.";
export const bookingCancelledMessage = "booking cancelled.";
export const walletBeenUpdatedMessage = "your wallet balance has been updated.";
//confirms
export const confirmCancelBookingMessage =
  "do you want to cancel this booking?";
export const confirmSignOutMessage = "are you sure you wish to sign out?";
export const redirectMessage = "this will redirect you to the sign in page.";
export const yesSignOutMessage = "yes, sign me out!";
export const areYouSureMessage = "are you sure?";
export const confirmAddFundsMessage = (walletFunds) => {
  return `are you sure you wish to add £${walletFunds.toFixed(
    2
  )} to your wallet?`;
};

export const fundsReaddedToAccountMessage = (refundPrice) => {
  return `£${refundPrice}  will be added to your wallet.`;
};
export const confirmSureBookSession = (sessionType, date) => {
  return `are you sure you want to book the ${getSessionTypeString(
    sessionType
  )} session for ${format(new Date(date), "dd MMMM yyyy")}?`;
};
export const fundsDeductedFromBalance = (price) => {
  return `£${price / 100} will be deducted from your wallet balance.`;
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
export const confirmSendMagicUrlRequest = (email) => {
  return `would you like to send a magic URL request to <span style="text-transform: lowercase;  color: hsl(60, 100%, 50%);">${email}</span>?`;
};
export const confirmUpdateEmailMessage = (newEmail) => {
  return `are you sure you wish to update your email to be <span style="text-transform: lowercase;  color: hsl(60, 100%, 50%);">${newEmail}</span>?`;
};

export const confirmAddChildMessage =
  "are you sure you want to add this child?";
export const confirmUpdateChildMessage =
  "are you sure you want to update your childs details?";
export const confirmDeleteChildMessage =
  "are you sure you want to delete your child?";

//placeholders
export const enterEmailAddress = "enter your email address";
export const minEightCharacters = "min 8 characters";
export const maxEightCharacters = "max 8 characters";
export const confirmYourPassword = "confirm your password";
export const addFundsPlaceholder = "ie 10.50 for £10.50";
export const enterYourPasswordPlaceholder = "enter your password";
export const leaveBlankIfNothingToAdd = "leave blank if nothing to add";
export const anyOtherInfo = "anything else you need to tell us? Enter it here!";

//routes
export const userBookingsRoute = "/bookings";
export const bookSessionRoute = "/book-session";
export const contactRoute = "/contact";
export const yourCustomerBookingsRoute = "/your-customer-bookings";
export const accountRoute = "/account";
export const childInfoRoute = "/child-info";
export const addChildInfoRoute = "/add-child-info";
export const signInRoute = "/sign-in";
export const signUpRoute = "/sign-up";
export const magicUrlRequestRoute = "/magic-url-request";
export const magicUrlResultRoute = "/magic-url-result";
export const localhostMagicUrlResultRoute =
  "http://localhost:8888/magic-url-result";
export const localhostSocialLoginResultRoute =
  "http://localhost:8888/social-login-result";
export const socialLoginResultRoute = "/social-login-result";
export const payNowRoute = "/pay-now";
export const updateEmailRoute = "/update-email";
export const updatePasswordRequestRoute = "/update-password-request";
export const updatePasswordResultRoute = "/update-password-result";
export const localhostUpdatePasswordResultRoute =
  "http://localhost:8888/update-password-result";
export const closeAccountRoute = "/close-account";
export const cookiesRoute = "/cookie-policy";
export const privacyRoute = "/privacy-policy";
export const forgotPasswordRequestRoute = "/forgot-password-request";
export const forgotPasswordResultRoute = "/forgot-password-result";
export const localhostForgotPasswordResultRoute =
  "http://localhost:8888/forgot-password-result";
export const addFundsRoute = "/add-funds";
export const paymentResultRoute = "/payment-result";
export const editChildInfoRoute = "/edit-child";
export const deleteChildInfoRoute = "/delete-child";
export const chosenEntryChildDetailsRoute = "/child-details";
export const cancelBookingRoute = "/cancel-booking";
