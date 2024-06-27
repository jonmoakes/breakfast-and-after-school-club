import useBookRecurringSessionsVariables from "./use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "./use-recurring-sessions-functions";

const useDayAndSessionChoiceButtons = () => {
  const { afternoonShortSessionPrice, showConfirmButton, showHelp } =
    useBookRecurringSessionsVariables();
  const {
    setChoiceAndGetSessionTypesAndPrices,
    dispatchSetShowConfirmButton,
    dispatchSetShowHelp,
    dispatchSetSessionChoice,
  } = useRecurringSessionsFunctions();

  const setSessionAndResetBookingData = (payload) => {
    dispatchSetSessionChoice(payload);
    if (showConfirmButton) {
      dispatchSetShowConfirmButton(false);
    }
    if (showHelp) {
      dispatchSetShowHelp(false);
    }
  };

  const dayChoiceButtons = [
    {
      id: 1,
      heading: "",
      text: "monday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("monday"),
    },
    {
      id: 2,
      heading: "",
      text: "tuesday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("tuesday"),
    },
    {
      id: 3,
      heading: "",
      text: "wednesday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("wednesday"),
    },
    {
      id: 4,
      heading: "",
      text: "thursday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("thursday"),
    },
    {
      id: 5,
      heading: "",
      text: "friday",
      onClick: () => setChoiceAndGetSessionTypesAndPrices("friday"),
    },
  ];

  const sessionChoiceButtons = [
    {
      id: 6,
      heading: "",
      text: "morning",
      onClick: () => setSessionAndResetBookingData("morning"),
    },
    {
      id: 7,
      heading: "",
      text: afternoonShortSessionPrice ? "afternoon Short" : "afternoon",
      onClick: () =>
        setSessionAndResetBookingData(
          afternoonShortSessionPrice ? "afternoonShort" : "afternoonLong"
        ),
    },

    ...(afternoonShortSessionPrice
      ? [
          {
            id: 8,
            heading: "",
            text: "afternoon Long",
            onClick: () => setSessionAndResetBookingData("afternoonLong"),
          },
        ]
      : []),
  ].filter((button) => button); // Filter out any null buttons

  return {
    dayChoiceButtons,
    sessionChoiceButtons,
  };
};

export default useDayAndSessionChoiceButtons;
