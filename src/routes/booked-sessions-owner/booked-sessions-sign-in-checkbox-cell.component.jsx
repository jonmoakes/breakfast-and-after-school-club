import { useSelector } from "react-redux";
import { parse, isAfter, isBefore, isSameDay } from "date-fns";

import { selectRequestDateDataSelectors } from "../../store/request-date-data/request-date-data.slice";

import { Text } from "../../styles/p/p.styles";

const BookedSessionsSignInCheckboxCell = ({ row }) => {
  const sessionType = row.original.sessionType;
  const date = row.original.date;
  const { bookingClosingTimes } = useSelector(selectRequestDateDataSelectors);

  const isToday = () => {
    if (!date) {
      return false;
    }
    const today = new Date();
    const rowsDate = new Date(date);

    return isSameDay(rowsDate, today) ? true : false;
  };

  const showMorningRegistrationCheckbox = () => {
    const morningRegistrationStartTime = bookingClosingTimes
      ? bookingClosingTimes.morningSessionClosingTime
      : "";

    if (!morningRegistrationStartTime) {
      return false;
    }

    const currentTime = new Date();
    const morningRegStartTime = parse(
      morningRegistrationStartTime,
      "HH:mm",
      new Date()
    );

    return (
      isToday() &&
      sessionType.toLowerCase().includes("morning") &&
      isAfter(currentTime, morningRegStartTime) &&
      isBefore(currentTime, parse("09:30", "HH:mm", new Date())) &&
      true
    );
  };

  const showAfternoonRegistrationCheckbox = () => {
    const afternoonRegistrationStartTime = bookingClosingTimes
      ? bookingClosingTimes.afternoonSessionClosingTime
      : "";

    if (!afternoonRegistrationStartTime) {
      return false;
    }

    const currentTime = new Date();
    const afternoonRegStartTime = parse(
      afternoonRegistrationStartTime,
      "HH:mm",
      new Date()
    );

    return (
      isToday() &&
      sessionType.toLowerCase().includes("afternoon") &&
      isAfter(currentTime, afternoonRegStartTime) &&
      isBefore(currentTime, parse("18:30", "HH:mm", new Date())) &&
      true
    );
  };

  return (
    <>
      {showMorningRegistrationCheckbox() ||
      showAfternoonRegistrationCheckbox() ? (
        <input type="checkbox" />
      ) : (
        <Text>N/A</Text>
      )}
    </>
  );
};

export default BookedSessionsSignInCheckboxCell;
