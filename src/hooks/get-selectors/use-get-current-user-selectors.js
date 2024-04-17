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

  const { walletBalance, email, id, name, phoneNumber, schoolCode } =
    currentUser ?? {};

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
  };
};

export default useGetCurrentUserSelectors;
