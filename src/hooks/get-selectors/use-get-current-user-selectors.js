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
    walletFundsToAdd,
  } = useSelector(selectCurrentUserSelectors);

  const { walletBalance, email, id, name, phoneNumber, provider, schoolCode } =
    currentUser ?? {};

  const currentUserEmailForContactForm = email ? email : "";
  const currentUserNameForContactForm = name ? name : "";
  const currentUserProvider = provider ? provider : "";

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
    schoolCodeForSocialLogin,
    walletFundsToAdd,
    walletBalance,
    id,
    name,
    email,
    phoneNumber,
    currentUserEmailForContactForm,
    currentUserNameForContactForm,
    currentUserProvider,
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
    schoolLogoUrl,
    schoolCode,
  };
};

export default useGetCurrentUserSelectors;
