import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useEditChildInfoLogic from "./use-edit-child-info-logic";

import { childInfoRoute } from "../../../strings/routes/routes-strings";

const usePreventShowIfNoData = () => {
  const { childToEditInfo } = useEditChildInfoLogic();

  const navigate = useNavigate();

  useEffect(() => {
    if (childToEditInfo === undefined) {
      navigate(childInfoRoute);
    }
  }, [navigate, childToEditInfo]);
};

export default usePreventShowIfNoData;
