import { useSelector } from "react-redux";

import { selectRequestDateData } from "../../../store/request-date-data/request-date-data.selector";

const useDateDataValues = () => {
  const requestDateData = useSelector(selectRequestDateData);

  const date = requestDateData ? requestDateData.date : "";
  const morningSessionSpaces = requestDateData
    ? requestDateData.morningSessionSpaces
    : "";
  const afternoonSessionSpaces = requestDateData
    ? requestDateData.afternoonSessionSpaces
    : "";

  return {
    date,
    morningSessionSpaces,
    afternoonSessionSpaces,
    requestDateData,
  };
};
export default useDateDataValues;
