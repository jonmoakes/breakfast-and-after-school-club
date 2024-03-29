import { useSelector } from "react-redux";

import { selectUploadDatesToDatabaseSelectors } from "../../store/upload-dates-to-database/upload-dates-to-database.slice";

const useGetUploadDatesToDatabaseSelectors = () => {
  const {
    uploadDatesToDatabaseIsLoading,
    uploadDatesToDatabaseSuccessMessage,
    uploadDatesToDatabaseError,
  } = useSelector(selectUploadDatesToDatabaseSelectors);

  return {
    uploadDatesToDatabaseIsLoading,
    uploadDatesToDatabaseSuccessMessage,
    uploadDatesToDatabaseError,
  };
};

export default useGetUploadDatesToDatabaseSelectors;
