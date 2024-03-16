import { useDispatch } from "react-redux";

import {
  hideElement,
  toggleShowElement,
  hideSecondElement,
  toggleShowSecondElement,
} from "../../store/should-show-element/should-show-element.slice";

const useShouldShowElementActions = () => {
  const dispatch = useDispatch();

  const showOppositeShowElement = () => {
    dispatch(toggleShowElement());
  };

  const hideShownElement = () => {
    dispatch(hideElement());
  };

  const showOppositeShowSecondElement = () => {
    dispatch(toggleShowSecondElement());
  };

  const hideShownSecondElement = () => {
    dispatch(hideSecondElement());
  };

  return {
    showOppositeShowElement,
    hideShownElement,
    showOppositeShowSecondElement,
    hideShownSecondElement,
  };
};

export default useShouldShowElementActions;
