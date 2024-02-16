import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectEditChildInfoSelectors } from "../../../store/edit-child-info/edit-child-info.slice";

import { childInfoRoute } from "../../../strings/strings";

const usePreventShowIfNoData = () => {
  const { childToEditInfo } = useSelector(selectEditChildInfoSelectors);

  const navigate = useNavigate();

  useEffect(() => {
    if (childToEditInfo === undefined) {
      navigate(childInfoRoute);
    }
  }, [navigate, childToEditInfo]);
};

export default usePreventShowIfNoData;
