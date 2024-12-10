import useGetAddChildInfoSelectors from "../../../hooks/get-selectors/use-get-add-child-info-selectors";
import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";

const useAddChildInfoLogic = () => {
  const {
    addChildInfoIsLoading,
    addChildInfoResult,
    addChildInfoError,
    childInfo,
    childName,
    age,
    consent,
    medicalInfo,
    dietaryRequirements,
    additionalInfo,
  } = useGetAddChildInfoSelectors();
  const { usersChildren } = useGetUsersChildrenSelectors();

  // removes part of the error message for user readability.
  const errorTextToRemove = addChildInfoError
    ? addChildInfoError.indexOf("must be")
    : null;

  const ageErrorForUser = errorTextToRemove
    ? `the childs age ${addChildInfoError.slice(errorTextToRemove)}`
    : null;

  const usersChildrensNames =
    usersChildren !== undefined
      ? usersChildren.map((child) => child.childName)
      : [];

  // case sensitive
  const childNameAlreadyExists = () => {
    const lowercasedChildName = childName.toLowerCase();
    return usersChildrensNames.includes(lowercasedChildName);
  };

  return {
    addChildInfoIsLoading,
    addChildInfoResult,
    addChildInfoError,
    childInfo,
    childName,
    age,
    consent,
    medicalInfo,
    dietaryRequirements,
    additionalInfo,
    ageErrorForUser,
    childNameAlreadyExists,
  };
};

export default useAddChildInfoLogic;
