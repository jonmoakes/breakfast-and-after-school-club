import { useDispatch } from "react-redux";

import {
  hideElement,
  toggleShowElement,
  hideSecondElement,
  toggleShowSecondElement,
} from "../../store/should-show-element/should-show-element.slice";

const useShouldShowElementActions = () => {
  const dispatch = useDispatch();

  const dispatchShowOppositeShowElement = () => {
    dispatch(toggleShowElement());
  };

  const dispatchHideShownElement = () => {
    dispatch(hideElement());
  };

  const dispatchShowOppositeShowSecondElement = () => {
    dispatch(toggleShowSecondElement());
  };

  const dispatchHideShownSecondElement = () => {
    dispatch(hideSecondElement());
  };

  return {
    dispatchShowOppositeShowElement,
    dispatchHideShownElement,
    dispatchShowOppositeShowSecondElement,
    dispatchHideShownSecondElement,
  };
};

export default useShouldShowElementActions;
