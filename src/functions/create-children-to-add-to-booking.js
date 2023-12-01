export const createChildrenToAddToBooking = (
  childrenSelectedForBooking,
  childName,
  oneChildChosen,
  namesToAddToBooking
) => {
  return !childrenSelectedForBooking.length
    ? childName
    : childrenSelectedForBooking.length === 1
    ? oneChildChosen
    : childrenSelectedForBooking.length > 1
    ? namesToAddToBooking
    : childrenSelectedForBooking;
};
