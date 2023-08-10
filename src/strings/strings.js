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
  "error requesting update password link";
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

// success
export const successMessage = "success!";
export const checkEmailMessage = "please check your email!";
export const fundsAddedMessage = (email) => {
  return `The funds have been added to your wallet and a confirmation Email Has Been Sent To ${email}.`;
};
export const passwordResetSuccessMessage =
  "your password has been successfuly reset!";
export const closeAccountSuccess =
  "the closure of your account is now being processed!";
export const datesUploadedToDatabaseSuccessMessage =
  "the dates have been successfully uploaded to the database!";

// infos
export const emailResponseTimeMessage =
  "Your Message Has Been Message Sent! We Aim To Respond Within 24 Hours.";
export const loseAllDataMessage =
  "you will lose any data that you have currently entered into this form.";
export const signInWithNewPasswordMessage =
  "you can now sign in with your new password.";
export const emailChangedMessage = "email changed!";
export const signInWithNewEmailMessage =
  "for security reasons, we will now sign you out of all sessions. please wait until you are redirected to the sign in page, where you can then sign in with your new email address.";
export const signOutThenSignInWithNewPasswordMessage =
  "for security reasons, we have now signed you out of all sessions. you can now sign in with your new password.";
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

//confirms
export const confirmSignOutMessage = "are you sure you wish to sign out?";
export const redirectMessage = "this will redirect you to the sign in page.";
export const yesSignOutMessage = "yes, sign me out!";
export const areYouSureMessage = "are you sure?";
export const confirmAddFundsMessage = (walletFunds) => {
  return `are you sure you wish to add £${walletFunds.toFixed(
    2
  )} to your wallet?`;
};
export const sureCloseAccountQuestion =
  "are you sure you wish to close your account with us?";
export const sureSendContactFormMessage =
  "are you sure you want to send this message?";
export const sureResetPasswordMessage =
  "are you sure you wish to reset your password?";
export const imSureMessage = "i'm sure";
export const addFundsMessage = "yes, add funds!";
export const yesSendIt = "yes, send it!";
export const confirmSendMagicUrlRequest =
  "are you sure you'd like to request a magicUrl link in your email?";

//placeholders
export const enterEmailAddress = "enter your email address";
export const minEightCharacters = "min 8 characters";
export const maxEightCharacters = "max 8 characters";
export const confirmYourPassword = "confirm your password";
export const addFundsPlaceholder = "ie 10.50 for £10.50";
export const enterYourPasswordPlaceholder = "enter your password";

//routes
export const bookingsRoute = "/bookings";
export const bookSessionRoute = "/book-session";
export const contactRoute = "/contact";
export const dashboardRoute = "/dashboard";
export const accountRoute = "/account";
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
