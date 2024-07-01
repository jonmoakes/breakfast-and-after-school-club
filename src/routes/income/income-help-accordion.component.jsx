import useGetShouldShowElementSelectors from "../../hooks/get-selectors/use-get-should-show-element-selectors";
import useShouldShowElementActions from "../../hooks/get-actions-and-thunks/use-should-show-element-actions";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { defaultTableSize } from "../../components/tables/default-table-size";
import { BlueH2 } from "../../styles/h2/h2.styles";
import Balancer from "react-wrap-balancer";

const IncomeHelpAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();
  const { dispatchShowOppositeShowElement, dispatchHideShownElement } =
    useShouldShowElementActions();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={dispatchShowOppositeShowElement}
        >
          <div>{shouldShowElement ? "ok, close" : "income help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Text>
              on this page, you can view a list of all received income from
              users of the app.
            </Text>
            <BlackHr />
            <BlueH2>
              <Balancer>returned entries total amount:</Balancer>
            </BlueH2>
            <Text>
              when you have entered a search term, you will see the total amount
              of all of the entries returned from the search query added
              together for easy reference.
            </Text>
            <Text>
              please note, that even entries that match the search term that are
              not visible on the page due to pagination are included in the
              total.
            </Text>
            <Text>
              for example, the default number of rows in the table is{" "}
              {defaultTableSize}. If you entered a search term that returned 150
              entries, {150 - defaultTableSize} of them would not be on the
              first page and you would be able to view them via the pagination
              buttons at the bottom of the table.
            </Text>
            <Text>
              however these extra {150 - defaultTableSize} entries that are not
              visible <RedSpan>would</RedSpan> be included in the total.
            </Text>
            <BlackHr />
            <BlueH2>getting entries from a specific week of the year:</BlueH2>
            <Text>
              you can also get data from just a certain week in the year.
            </Text>
            <Text>tap the 'week filter' button to show an input box.</Text>
            <Text>
              type in which week of the year you wish to get entries from ( ie
              52 for the last week of the year ) and then tap 'show entries'.
            </Text>
            <Text>
              you will then get all the entries from that week and the total
              will be automatically calculated and shown just above the table.
            </Text>
            <Text>
              tap the 'reset' button to remove the week filter and show all
              entries again.
            </Text>
            <Text>
              you can also get a total from entries you search for within the
              week.
            </Text>
            <Text>
              for example, if you have 10 entries in week 26 that total £100 and
              you search for a monday which returns 2 entries in that week, the
              total will be the total cost of those 2 entries.
            </Text>
            <Text>
              remove the search term to get all of the weeks data and total
              again.
            </Text>
            <Text>
              the same principle applies as mentioned previously with regards
              entries that are off screen due to pagination.
            </Text>
            <YellowGreenButton onClick={dispatchHideShownElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default IncomeHelpAccordion;
