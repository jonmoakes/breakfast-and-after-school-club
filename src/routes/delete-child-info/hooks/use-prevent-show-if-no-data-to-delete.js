import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useGetDeleteChildInfoSelectors from "../../../hooks/get-selectors/use-get-delete-child-info-selectors";

import { childInfoRoute } from "../../../strings/routes/routes-strings";

const usePreventShowIfNoDataToDelete = () => {
  const { childToDeleteInfo } = useGetDeleteChildInfoSelectors();

  const navigate = useNavigate();

  useEffect(() => {
    if (childToDeleteInfo === undefined) {
      navigate(childInfoRoute);
    }
  }, [navigate, childToDeleteInfo]);
};

export default usePreventShowIfNoDataToDelete;
