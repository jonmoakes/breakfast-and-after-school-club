import { useDispatch, useSelector } from "react-redux";

import {
  selectAddChildInfoSelectors,
  setChildInfo,
} from "../../../store/add-child-info/add-child-info.slice";

const useHandleAddChildInfoChange = () => {
  const { childInfo } = useSelector(selectAddChildInfoSelectors);

  const dispatch = useDispatch();

  const handleAddChildInfoChange = (event) => {
    const { value, name } = event.target;
    dispatch(setChildInfo({ ...childInfo, [name]: value }));
  };

  return { handleAddChildInfoChange };
};

export default useHandleAddChildInfoChange;
