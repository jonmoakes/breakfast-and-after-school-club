import useRequestDateDataActions from "../../../hooks/get-actions/use-request-date-data-actions";

const useChooseDateHandleChange = () => {
  const { dispatchSetChosenDate } = useRequestDateDataActions();

  const chooseDateHandleChange = (event) => {
    dispatchSetChosenDate(event);
  };

  return { chooseDateHandleChange };
};

export default useChooseDateHandleChange;
