import { useSelector } from "react-redux";

import { selectShouldShowElementSelectors } from "../../store/should-show-element/should-show-element.slice";

const useGetShouldShowElementSelectors = () => {
  const { shouldShowElement, shouldShowSecondElement } = useSelector(
    selectShouldShowElementSelectors
  );

  return { shouldShowElement, shouldShowSecondElement };
};
export default useGetShouldShowElementSelectors;
