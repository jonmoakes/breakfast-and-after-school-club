import { useSelector } from "react-redux";
import { selectCurrentUserSelectors } from "../../store/user/user.slice";

const useGetCurrentUserSelectors = () => {
  const {
    currentUserEnvironmentVariables,
    currentUser,
    currentUserWalletBalanceResult,
    currentUserIsLoading,
    currentUserError,
    currentUserWalletBalanceError,
    loadStripeKey,
    walletFundsToAdd,
  } = useSelector(selectCurrentUserSelectors);

  const {
    walletBalance,
    email,
    id,
    appAdminId,
    name,
    phoneNumber,
    schoolCode,
    emergencyContactDetails,
    emergencyContactDetailsTwo,
  } = currentUser ?? {};

  const currentUserEmailForContactForm = email ? email : "";
  const currentUserNameForContactForm = name ? name : "";

  const {
    appOwnerEmail,
    appOwnerId,
    bookedSessionsCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    childrenCollectionId,
    databaseId,
    earlyFinishDatesCollectionId,
    sessionPricesCollectionId,
    sessionPricesDocumentId,
    sessionTimesCollectionId,
    sessionTimesDocumentId,
    stripePublishableKey,
    stripeSecretKey,
    termDatesCollectionId,
    userCollectionId,
    schoolLogoUrl,
    bookingTermsLink,
  } = currentUserEnvironmentVariables ?? {};

  return {
    currentUserEnvironmentVariables,
    currentUser,
    currentUserWalletBalanceResult,
    currentUserIsLoading,
    currentUserError,
    currentUserWalletBalanceError,
    loadStripeKey,
    walletFundsToAdd,
    walletBalance,
    id,
    name,
    email,
    phoneNumber,
    currentUserEmailForContactForm,
    currentUserNameForContactForm,
    appOwnerEmail,
    appOwnerId,
    appAdminId,
    bookedSessionsCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    childrenCollectionId,
    databaseId,
    earlyFinishDatesCollectionId,
    sessionPricesCollectionId,
    sessionPricesDocumentId,
    sessionTimesCollectionId,
    sessionTimesDocumentId,
    stripePublishableKey,
    stripeSecretKey,
    termDatesCollectionId,
    userCollectionId,
    schoolLogoUrl,
    schoolCode,
    emergencyContactDetails,
    emergencyContactDetailsTwo,
    bookingTermsLink,
  };
};

export default useGetCurrentUserSelectors;
