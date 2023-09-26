import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectEditChildInfo } from "../../../store/edit-child-info/edit-child-info.selector";

import { childInfoRoute } from "../../../strings/strings";

const usePreventShowIfNoData = () => {
  const childInfo = useSelector(selectEditChildInfo);

  const navigate = useNavigate();
  useEffect(() => {
    if (childInfo === undefined) {
      navigate(childInfoRoute);
    }
  }, [navigate, childInfo]);
};

export default usePreventShowIfNoData;
