import { useSelector } from "react-redux";
import { selectGetAllChildrenSelectors } from "../../store/get-all-children/get-all-children.slice";

const useGetAllChildrenSelectors = () => {
  const { getAllChildrenIsLoading, allChildren, getAllChildrenError } =
    useSelector(selectGetAllChildrenSelectors);

  return { getAllChildrenIsLoading, allChildren, getAllChildrenError };
};

export default useGetAllChildrenSelectors;
