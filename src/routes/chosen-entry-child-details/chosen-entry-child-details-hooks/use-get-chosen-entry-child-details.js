import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../../store/user/user.selector";

import { getChosenEntryChildDetailsAsync } from "../../../store/chosen-entry-child-details/chosen-entry-child-details.slice";

const useGetChosenEntryChildDetails = (chosenEntry) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !currentUser ||
      (currentUser && currentUser.id !== import.meta.env.VITE_APP_OWNER_ID)
    )
      return;
    dispatch(getChosenEntryChildDetailsAsync({ chosenEntry }));
  }, [chosenEntry, currentUser, dispatch]);
};

export default useGetChosenEntryChildDetails;
