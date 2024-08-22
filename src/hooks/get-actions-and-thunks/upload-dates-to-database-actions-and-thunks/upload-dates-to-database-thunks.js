// import { useDispatch } from "react-redux";
// import { uploadDatesToDatabaseAsync } from "../../../store/upload-dates-to-database/upload-dates-to-database-thunks";

// import { testSchoolDates2425 } from "./2024-25-dates/test-school-dates/test-school-dates-24-25";

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
