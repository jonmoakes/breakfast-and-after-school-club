export const createChildrenToAddToBooking = (
  childrenSelectedForBooking,
  usersChildren
) => {
  const childName =
    usersChildren && usersChildren[0] !== undefined
      ? usersChildren[0].childName
      : "";
  const oneChildChosen = childrenSelectedForBooking.join(" ");
  const namesToAddToBooking = childrenSelectedForBooking.join(", ");

  const childrenInBooking = !childrenSelectedForBooking.length
    ? childName
    : childrenSelectedForBooking.length === 1
    ? oneChildChosen
    : childrenSelectedForBooking.length > 1
    ? namesToAddToBooking
    : childrenSelectedForBooking;

  return childrenInBooking;
};
