// import { useDispatch } from "react-redux";
// import { uploadDatesToDatabaseAsync } from "../../../store/upload-dates-to-database/upload-dates-to-database-thunks";

// import { testSchoolDates2324 } from "./2023-24-dates/test-school-dates/test-school-dates-23-24";

const useUploadDatesToDatabaseThunk = () => {
  // const dispatch = useDispatch();

  // Make sure top pass proper dates here before continuing!
  const uploadDatesToDatabaseThunk = () => {
    // const datesList = testSchoolDates2324;
    // dispatch(uploadDatesToDatabaseAsync({ datesList }));
  };

  return { uploadDatesToDatabaseThunk };
};

export default useUploadDatesToDatabaseThunk;
