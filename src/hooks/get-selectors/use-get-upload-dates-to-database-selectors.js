import { useSelector } from "react-redux";

import { selectUploadDatesToDatabaseSelectors } from "../../store/upload-dates-to-database/upload-dates-to-database.slice";

const useGetUploadDatesToDatabaseSelectors = () => {
  const {
    uploadDatesToDatabaseIsLoading,
    uploadDatesToDatabaseResult,
    uploadDatesToDatabaseError,
  } = useSelector(selectUploadDatesToDatabaseSelectors);

  return {
    uploadDatesToDatabaseIsLoading,
    uploadDatesToDatabaseResult,
    uploadDatesToDatabaseError,
  };
};

export default useGetUploadDatesToDatabaseSelectors;
