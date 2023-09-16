import { useSelector, useDispatch } from "react-redux";

import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { selectShouldShowElement } from "../../../store/should-show-element/should-show-element.selector";
import {
  hideElement,
  toggleShowElement,
} from "../../../store/should-show-element/should-show-element.slice";

import WalletBalance from "../../../components/wallet-balance/wallet-balance.component";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { addFundsRoute } from "../../../strings/strings";

const BalanceCheckAndBookSessionHelp = () => {
  const { hasInsufficientFunds } = useConditionalLogic();

  const shouldShowElement = useSelector(selectShouldShowElement);
  const dispatch = useDispatch();

  return (
    <ParentDiv>
      <WalletBalance />
      {hasInsufficientFunds() ? (
        <Text>
          you need at least £4 in your wallet to book a session. please{" "}
          <StyledLink to={addFundsRoute}>Add funds</StyledLink> to your account
          in order to continue.
        </Text>
      ) : (
        <Accordion {...{ shouldShowElement }}>
          <>
            <AccordionTitle
              {...{ shouldShowElement }}
              onClick={() => dispatch(toggleShowElement())}
            >
              <div>
                {shouldShowElement ? "ok, close" : "booking sessions help"}
              </div>
              <>{shouldShowElement ? "-" : "+"}</>
            </AccordionTitle>

            {shouldShowElement && (
              <AccordionContent>
                <Text>
                  to book a session, choose a date by tapping on the date picker
                  box below. you must have funds in your account in order to see
                  the date picker.
                </Text>
                <Text>
                  then, choose whether you want the morning session, afternoon
                  short session or afternoon full session ( or a combination of
                  these ).
                </Text>
                <Text>
                  if you have sufficent funds in your virtual wallet to pay for
                  the sessions, tap the "book session" button to proceed.
                </Text>
                <Text>
                  you will be emailed a confirmation of what you have booked and
                  the funds will be deducted from your virtual wallet balance.
                </Text>
                <YellowGreenButton onClick={() => dispatch(hideElement())}>
                  Ok, Close
                </YellowGreenButton>
              </AccordionContent>
            )}
          </>
        </Accordion>
      )}
    </ParentDiv>
  );
};

export default BalanceCheckAndBookSessionHelp;
