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
    schoolCodeForSocialLogin,
  } = useSelector(selectCurrentUserSelectors);

  const { walletBalance, email, id, name, phoneNumber } = currentUser ?? {};
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
    projectId,
    sessionPricesCollectionId,
    sessionPricesDocumentId,
    sessionTimesCollectionId,
    sessionTimesDocumentId,
    stripePublishableKey,
    stripeSecretKey,
    termDatesCollectionId,
    userCollectionId,
  } = currentUserEnvironmentVariables ?? {};

  return {
    appOwnerEmail,
    appOwnerId,
    bookedSessionsCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    childrenCollectionId,
    databaseId,
    earlyFinishDatesCollectionId,
    projectId,
    sessionPricesCollectionId,
    sessionPricesDocumentId,
    sessionTimesCollectionId,
    sessionTimesDocumentId,
    stripePublishableKey,
    stripeSecretKey,
    termDatesCollectionId,
    userCollectionId,
    walletBalance,
    name,
    email,
    id,
    phoneNumber,
    currentUserWalletBalanceResult,
    currentUser,
    currentUserEmailForContactForm,
    currentUserNameForContactForm,
    currentUserIsLoading,
    currentUserError,
    currentUserWalletBalanceError,
    loadStripeKey,
    schoolCodeForSocialLogin,
  };
};

export default useGetCurrentUserSelectors;
