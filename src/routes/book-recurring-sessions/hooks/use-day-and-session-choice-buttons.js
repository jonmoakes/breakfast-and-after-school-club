import useBookRecurringSessionsActions from "../../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-book-recurring-sessions-actions";
import useBookRecurringSessionsVariables from "./use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "./use-recurring-sessions-functions";

const useDayAndSessionChoiceButtons = () => {
  const { afternoonShortSessionPrice } = useBookRecurringSessionsVariables();
  const { setChoiceAndGetSessionTypesAndPrices } =
    useRecurringSessionsFunctions();
  const { dispatchSetSessionChoice } = useBookRecurringSessionsActions();

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
      onClick: () => dispatchSetSessionChoice("morning"),
    },
    {
      id: 7,
      heading: "",
      text: afternoonShortSessionPrice ? "afternoon Short" : "afternoon",
      onClick: () =>
        dispatchSetSessionChoice(
          afternoonShortSessionPrice ? "afternoonShort" : "afternoonLong"
        ),
    },

    ...(afternoonShortSessionPrice
      ? [
          {
            id: 8,
            heading: "",
            text: "afternoon Long",
            onClick: () => dispatchSetSessionChoice("afternoonLong"),
          },
          {
            id: 9,
            heading: "",
            text: "AM & PM short",
            onClick: () => dispatchSetSessionChoice("morningAndAfternoonShort"),
          },
          {
            id: 10,
            heading: "",
            text: "AM & PM Long",
            onClick: () => dispatchSetSessionChoice("morningAndAfternoonLong"),
          },
        ]
      : [
          {
            id: 11,
            heading: "",
            text: "AM & PM",
            onClick: () => dispatchSetSessionChoice("morningAndAfternoonLong"),
          },
        ]),
  ].filter((button) => button); // Filter out any null buttons

  return {
    dayChoiceButtons,
    sessionChoiceButtons,
  };
};

export default useDayAndSessionChoiceButtons;
