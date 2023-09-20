import { useDispatch, useSelector } from "react-redux";

import { selectAddChildInfo } from "../../../store/add-child-info/add-child-info.selector";
import { setChildInfo } from "../../../store/add-child-info/add-child-info.slice";

const useHandleAddChildInfoChange = () => {
  const addChildInfo = useSelector(selectAddChildInfo);
  const dispatch = useDispatch();

  const handleAddChildInfoChange = (event) => {
    const { value, name } = event.target;
    dispatch(setChildInfo({ ...addChildInfo, [name]: value }));
  };

  return { handleAddChildInfoChange };
};

export default useHandleAddChildInfoChange;
