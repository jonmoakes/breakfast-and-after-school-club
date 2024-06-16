import { useDispatch } from "react-redux";

import {
  resetBookSessionState,
  setChildrenSelectedForBooking,
  setSessionPrice,
  setSessionType,
  resetSessionTypeAndPrice,
} from "../../../store/book-session/book-session.slice";

import useGetUsersChildrenSelectors from "../../get-selectors/use-get-users-children-selectors";

const useBookSessionActions = () => {
  const dispatch = useDispatch();

  const { usersChildren } = useGetUsersChildrenSelectors();

  const handleSetChildrenSelectedForBookingChange = (event) => {
    const { name, checked } = event.target;
    const selectedChild = usersChildren.find(
      (child) => child.childName === name
    );

    const namesOfChildren =
      selectedChild.medicalInfo !== "" ||
      selectedChild.dietryRequirements !== "" ||
      selectedChild.additionalInfo !== ""
        ? `${name}*`
        : name;
    dispatch(setChildrenSelectedForBooking({ [namesOfChildren]: checked }));
  };

  const dispatchSetSessionPrice = (price) => {
    dispatch(setSessionPrice(price));
  };

  const dispatchSetSessionType = (sessionType) => {
    dispatch(setSessionType(sessionType));
  };

  const dispatchResetSessionTypeAndPrice = () => {
    dispatch(resetSessionTypeAndPrice());
  };

  const dispatchResetBookSessionState = () => {
    dispatch(resetBookSessionState());
  };

  return {
    handleSetChildrenSelectedForBookingChange,
    dispatchSetSessionPrice,
    dispatchSetSessionType,
    dispatchResetSessionTypeAndPrice,
    dispatchResetBookSessionState,
  };
};

export default useBookSessionActions;
