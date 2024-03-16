import useSelectBookSessionSelectors from "../select-book-session-selectors/use-select-book-session-selectors";
import useGetUsersChildrenSelectors from "../../../../hooks/get-selectors/use-get-users-children-selectors";

const useGetChildrenLogic = () => {
  const { childrenSelectedForBooking } = useSelectBookSessionSelectors();
  const { usersChildren } = useGetUsersChildrenSelectors();

  const noChildrenAddedYet = () => {
    return usersChildren === undefined ? true : false;
  };

  const hasOneChild = () => {
    return usersChildren.length === 1 ? true : false;
  };

  const hasMoreThanOneChild = () => {
    return usersChildren.length > 1 ? true : false;
  };

  const atLeastOneChildHasBeenSelected = () => {
    return childrenSelectedForBooking.length >= 1 ? true : false;
  };

  return {
    noChildrenAddedYet,
    hasOneChild,
    hasMoreThanOneChild,
    atLeastOneChildHasBeenSelected,
    childrenSelectedForBooking,
    usersChildren,
  };
};

export default useGetChildrenLogic;
