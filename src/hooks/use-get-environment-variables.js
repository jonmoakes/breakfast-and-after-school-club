import { useSelector } from "react-redux";
import { selectEnvironmentVariables } from "../store/user/user.selector";

const useGetEnvironmentVariables = () => {
  const environmentVariables = useSelector(selectEnvironmentVariables);
  const {
    databaseId,
    userCollectionId,
    childrenCollectionId,
    bookedSessionsCollectionId,
    sessionPricesCollectionId,
    sessionPricesDocumentId,
    termDatesCollectionId,
    appOwnerId,
    appOwnerEmail,
  } = environmentVariables;
  return {
    databaseId,
    userCollectionId,
    childrenCollectionId,
    bookedSessionsCollectionId,
    sessionPricesCollectionId,
    sessionPricesDocumentId,
    termDatesCollectionId,
    appOwnerId,
    appOwnerEmail,
  };
};

export default useGetEnvironmentVariables;
