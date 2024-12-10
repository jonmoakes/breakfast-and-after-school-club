export const createChildrenToAddToBooking = (
  childrenSelectedForBooking,
  usersChildren
) => {
  const oneChildChosen = childrenSelectedForBooking.join(" ");
  const namesToAddToBooking = childrenSelectedForBooking.join(", ");

  let childName = "";

  if (usersChildren && usersChildren[0] !== undefined) {
    childName =
      usersChildren.length === 1 &&
      (usersChildren[0].medicalInfo !== "" ||
        usersChildren[0].dietaryRequirements !== "" ||
        usersChildren[0].additionalInfo !== "")
        ? usersChildren[0].childName + "*"
        : usersChildren[0].childName;
  }

  const childrenInBooking = !childrenSelectedForBooking.length
    ? childName
    : childrenSelectedForBooking.length === 1
    ? oneChildChosen
    : childrenSelectedForBooking.length > 1
    ? namesToAddToBooking
    : childrenSelectedForBooking;

  return childrenInBooking;
};
