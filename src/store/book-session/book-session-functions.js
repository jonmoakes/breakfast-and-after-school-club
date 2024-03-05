// if usersChildren.length === 1, returns string value of consent given - ie 'yes' or 'no
// if usersChildren.length > 1, return an array of strings ie ['yes', 'no']
const getConsentsForSelectedChildren = (
  childrenSelectedForBooking,
  usersChildren
) => {
  return usersChildren.length === 1
    ? usersChildren[0].consent
    : childrenSelectedForBooking.map((selectedChild) => {
        const childObject = usersChildren.find(
          (child) => child.childName === selectedChild
        );
        return childObject ? childObject.consent : null;
      });
};

// if usersChildren.length === 1 returns the string of 'yes' or 'no'
// if usersChildren.length > 1, returns a string with the values separated by a comma.
// ie if array is ['yes', 'no'], because they're joined together, they become one string and add a comma after it.
export const createConsentChoiceForEachChildInBooking = (
  usersChildren,
  childrenSelectedForBooking
) => {
  const consentChoiceForEachChildInBooking =
    usersChildren.length === 1
      ? getConsentsForSelectedChildren(
          childrenSelectedForBooking,
          usersChildren
        )
      : getConsentsForSelectedChildren(
          childrenSelectedForBooking,
          usersChildren
        ).join(", ");

  return consentChoiceForEachChildInBooking;
};
