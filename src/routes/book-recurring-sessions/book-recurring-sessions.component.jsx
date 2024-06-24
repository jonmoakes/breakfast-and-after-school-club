import {
  format,
  // format,
  isFriday,
  isMonday,
  isThursday,
  isTuesday,
  isWednesday,
} from "date-fns";

import useGetRequestDateDataSelectors from "../../hooks/get-selectors/use-get-request-date-data-selectors";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueSpan, RedSpan } from "../../styles/span/span.styles";

import { useState } from "react";
import { BlueH2 } from "../../styles/h2/h2.styles";
import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";
import {
  MinimalButton,
  YellowGreenButton,
} from "../../styles/buttons/buttons.styles";
import useGetCurrentMonthDateDataEarlyFinishDatesBookingClosingTimesAndSessionTimesUseEffect from "../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-get-current-month-date-data-early-finish-dates-booking-closing-times-and-session-times-use-effect";
import useRequestSessionPricesThunk from "../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-request-session-prices-thunk";
import useGetSessionTypesAndPricesSelectors from "../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import Balancer from "react-wrap-balancer";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

const BookRecurringSessions = () => {
  useGetCurrentMonthDateDataEarlyFinishDatesBookingClosingTimesAndSessionTimesUseEffect();
  const { requestSessionPricesThunk } = useRequestSessionPricesThunk();
  const {
    sessionTypesAndPrices,
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useGetSessionTypesAndPricesSelectors();
  const { walletBalance } = useGetCurrentUserSelectors();

  // const date = new Date();
  const monthAsString = "july";
  //  format(date, "MMMM");

  const { dateData, earlyFinishDates } = useGetRequestDateDataSelectors();
  // earlyFinishDates, bookingClosingTimes } =

  const [dayChoice, setDayChoice] = useState("");
  const [sessionChoice, setSessionChoice] = useState("");

  const chosenDateDocuments = dateData
    ? dateData.filter((doc) => {
        const date = new Date(doc.date);
        switch (dayChoice) {
          case "monday":
            return isMonday(date);
          case "tuesday":
            return isTuesday(date);
          case "wednesday":
            return isWednesday(date);
          case "thursday":
            return isThursday(date);
          case "friday":
            return isFriday(date);
          default:
            return "";
        }
      })
    : null;

  const datesMinusAnyEarlyFinishDates = () => {
    // Extract all dates from earlyFinishDates
    const earlyFinishDateSet = earlyFinishDates
      ? new Set(earlyFinishDates.map((dateObj) => dateObj.date))
      : null;

    const filteredChosenDateDocuments = chosenDateDocuments
      ? chosenDateDocuments.filter((doc) => !earlyFinishDateSet.has(doc.date))
      : null;

    return filteredChosenDateDocuments;
  };

  const morningSessionSpacesArray = chosenDateDocuments
    ? chosenDateDocuments.map((doc) => doc.morningSessionSpaces)
    : null;

  const afternoonSessionSpacesArray = chosenDateDocuments
    ? datesMinusAnyEarlyFinishDates().map((doc) => doc.afternoonSessionSpaces)
    : null;

  const isAnyMorningSessionZero = morningSessionSpacesArray
    ? morningSessionSpacesArray.some((space) => space === 0)
    : null;

  const isAnyAfternoonSessionZero = afternoonSessionSpacesArray
    ? afternoonSessionSpacesArray.some((space) => space === 0)
    : null;

  const setChoiceAndGetSessionTypesAndPrices = (choice) => {
    if (!Object.keys(sessionTypesAndPrices).length) {
      setDayChoice(choice);
      requestSessionPricesThunk();
    } else {
      setDayChoice(choice);
    }
  };

  const resetChoices = () => {
    setDayChoice("");
    setSessionChoice("");
  };

  const calculateCostOfSessionsUserWantsToBook = () => {
    switch (sessionChoice) {
      case "morning":
        return morningSessionPrice * chosenDateDocuments.length * 100;
      case "afternoonShort":
        return (
          afternoonShortSessionPrice *
          datesMinusAnyEarlyFinishDates().length *
          100
        );
      case "afternoonLong":
        return (
          afternoonLongSessionPrice *
          datesMinusAnyEarlyFinishDates().length *
          100
        );
      case "morningAndAfternoonShort":
        return (
          morningAndAfternoonShortSessionPrice *
          datesMinusAnyEarlyFinishDates().length *
          100
        );
      case "morningAndAfternoonLong":
        return (
          morningAndAfternoonLongSessionPrice *
          datesMinusAnyEarlyFinishDates().length *
          100
        );
      default:
        return null;
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
      onClick: () => setSessionChoice("morning"),
    },
    {
      id: 7,
      heading: "",
      text: afternoonShortSessionPrice ? "afternoon Short" : "afternoon",
      onClick: () =>
        setSessionChoice(
          afternoonShortSessionPrice ? "afternoonShort" : "afternoonLong"
        ),
    },

    ...(afternoonShortSessionPrice
      ? [
          {
            id: 8,
            heading: "",
            text: "afternoon Long",
            onClick: () => setSessionChoice("afternoonLong"),
          },
          {
            id: 9,
            heading: "",
            text: "AM & PM short",
            onClick: () => setSessionChoice("morningAndAfternoonShort"),
          },
          {
            id: 10,
            heading: "",
            text: "AM & PM Long",
            onClick: () => setSessionChoice("morningAndAfternoonLong"),
          },
        ]
      : [
          {
            id: 11,
            heading: "",
            text: "AM & PM",
            onClick: () => setSessionChoice("morningAndAfternoonLong"),
          },
        ]),
  ].filter((button) => button); // Filter out any null buttons

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>book recurring sessions</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>
          here, you can select a specific session for each date in{" "}
          <RedSpan>{monthAsString}</RedSpan>
        </Text>
        <Text>
          on the first day of the next month, you will then be able to book
          sessions for the following month.
        </Text>
      </ParentDiv>

      {!dayChoice ? (
        <ParentDiv>
          <BlueH2>
            <Balancer>I want sessions on a:</Balancer>
          </BlueH2>
          <RenderButtonsList {...{ buttons: dayChoiceButtons }} />
        </ParentDiv>
      ) : null}

      {dayChoice ? (
        <ParentDiv>
          <Text>
            you have chosen a<br />
            <RedSpan>{dayChoice}</RedSpan>
          </Text>
          <MinimalButton onClick={resetChoices}>change day</MinimalButton>
        </ParentDiv>
      ) : null}

      {dayChoice ? (
        <ParentDiv>
          <BlueH2>choose session type:</BlueH2>{" "}
          <RenderButtonsList {...{ buttons: sessionChoiceButtons }} />
          {sessionChoice.includes("morning") && isAnyMorningSessionZero ? (
            <>
              <Text>
                sorry, we have no morning spaces on one of the {dayChoice} dates
                this month, so we cannot book every day for you.
              </Text>
              <Text>please try another session or tap the button below.</Text>
              <MinimalButton onClick={resetChoices}>ok</MinimalButton>
            </>
          ) : null}
          {sessionChoice.includes("afternoon") && isAnyAfternoonSessionZero ? (
            <>
              <Text>
                sorry, we have no afternoon spaces on one of the {dayChoice}{" "}
                dates this month, so we cannot book every day for you.
              </Text>
              <Text>please try another session or tap the button below.</Text>
              <MinimalButton onClick={resetChoices}>reset</MinimalButton>
            </>
          ) : null}
        </ParentDiv>
      ) : null}

      {calculateCostOfSessionsUserWantsToBook() === null ||
      isAnyMorningSessionZero ||
      isAnyAfternoonSessionZero ? null : (
        <ParentDiv>
          {walletBalance < calculateCostOfSessionsUserWantsToBook() ? (
            <>
              <Text>
                you don't have enough in your virtual wallet to cover all these
                sessions.
              </Text>
              <Text>
                please add
                <br />£
                <RedSpan>
                  {(
                    (calculateCostOfSessionsUserWantsToBook() - walletBalance) /
                    100
                  ).toFixed(2)}
                </RedSpan>
                <br />
                To your wallet in order to book all of the{" "}
                <RedSpan>{dayChoice} </RedSpan>sessions for{" "}
                <RedSpan>{monthAsString}</RedSpan>
              </Text>
            </>
          ) : (
            <>
              {sessionChoice === "morning" ? (
                <>
                  <Text>
                    you will be booking the following <RedSpan>morning</RedSpan>{" "}
                    sessions for <RedSpan>{monthAsString}</RedSpan>:
                  </Text>
                  {chosenDateDocuments.map((dateDoc) => {
                    const formattedDate = format(
                      new Date(dateDoc.date),
                      "dd MMMM yyyy"
                    );
                    return (
                      <BlueSpan key={dateDoc.date}>{formattedDate}</BlueSpan>
                    );
                  })}
                </>
              ) : null}

              {sessionChoice === "afternoonShort" ||
              sessionChoice === "afternoonLong" ? (
                <>
                  <Text>
                    you will be booking the following{" "}
                    <RedSpan>afternoon</RedSpan> sessions for{" "}
                    <RedSpan>{monthAsString}</RedSpan>:
                  </Text>
                  {datesMinusAnyEarlyFinishDates().map((dateDoc) => {
                    const formattedDate = format(
                      new Date(dateDoc.date),
                      "dd MMMM yyyy"
                    );
                    return (
                      <BlueSpan key={dateDoc.date}>{formattedDate}</BlueSpan>
                    );
                  })}
                </>
              ) : null}

              {sessionChoice === "morningAndAfternoonShort" ? (
                <>
                  <Text>
                    you will be booking the following{" "}
                    <RedSpan>morning AND afternoon Short</RedSpan> sessions for{" "}
                    <RedSpan>{monthAsString}</RedSpan>:
                  </Text>
                  {datesMinusAnyEarlyFinishDates().map((dateDoc) => {
                    const formattedDate = format(
                      new Date(dateDoc.date),
                      "dd MMMM yyyy"
                    );
                    return (
                      <BlueSpan key={dateDoc.date}>{formattedDate}</BlueSpan>
                    );
                  })}
                </>
              ) : null}

              {sessionChoice === "morningAndAfternoonLong" ? (
                <>
                  <Text>
                    you will be booking the following{" "}
                    <RedSpan>morning AND afternoon Long</RedSpan> sessions for{" "}
                    <RedSpan>{monthAsString}</RedSpan>:
                  </Text>
                  {datesMinusAnyEarlyFinishDates().map((dateDoc) => {
                    const formattedDate = format(
                      new Date(dateDoc.date),
                      "dd MMMM yyyy"
                    );
                    return (
                      <BlueSpan key={dateDoc.date}>{formattedDate}</BlueSpan>
                    );
                  })}
                </>
              ) : null}

              <Text>
                the total cost is
                <br />
                <RedSpan>
                  £{(calculateCostOfSessionsUserWantsToBook() / 100).toFixed(2)}
                </RedSpan>
              </Text>
              <Text>if these are correct, please tap the button below.</Text>
              <YellowGreenButton>book sessions</YellowGreenButton>
            </>
          )}
        </ParentDiv>
      )}
    </Container>
  );
};

export default BookRecurringSessions;
