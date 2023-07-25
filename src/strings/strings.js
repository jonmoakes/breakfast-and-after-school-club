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
  "Sorry, There Was An Error Submitting Payment.\nYour Card Has Not Been Charged.\nPlease Try Again.";

// success
export const successMessage = "success!";
export const checkEmailMessage = "please check your email!";

// infos
export const emailResponseTimeMessage =
  "Your Message Has Been Message Sent! We Aim To Respond Within 24 Hours.";
export const loseAllDataMessage =
  "you will lose any data that you have currently entered into this form.";

//confirms
export const confirmSignOutMessage = "are you sure you wish to sign out?";
export const yesSignOutMessage = "yes, sign me out!";
export const signOutSuccessMessage = "you have been successfully signed out!";
export const areYouSureMessage = "are you sure?";
export const confirmAddFundsMessage = (walletFunds) => {
  return `are you sure you wish to add £${walletFunds.toFixed(
    2
  )} to your wallet?`;
};
export const imSureMessage = "i'm sure";

//placeholders
export const enterEmailAddress = "enter your email address";
export const minEightCharacters = "min 8 characters";
export const maxEightCharacters = "max 8 characters";
export const confirmYourPassword = "confirm your password";

//routes
export const bookingsRoute = "/bookings";
export const bookSessionRoute = "/book-session";
export const contactRoute = "/contact";
export const accountRoute = "/account";
export const signInRoute = "/sign-in";
export const signUpRoute = "/sign-up";
export const magicUrlSignInRoute = "/magic-url-sign-in";
export const magicUrlResultRoute = "/magic-url-result";
export const localhostMagicUrlResultRoute =
  "http://localhost:8888/magic-url-result";
export const payNowRoute = "/pay-now";
export const updateEmailRoute = "/update-email";
export const updatePasswordRoute = "/update-password";
export const deleteAccountRoute = "/delete-account";
export const cookiesRoute = "/cookie-policy";
export const privacyRoute = "/privacy-policy";
