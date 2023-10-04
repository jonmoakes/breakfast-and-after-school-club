import { useDispatch, useSelector } from "react-redux";

import { selectShouldShowElement } from "../../store/should-show-element/should-show-element.selector";
import { toggleShowElement } from "../../store/should-show-element/should-show-element.slice";

import { OrangeButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  FilterEntriesButtonDiv,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const FilterButton = ({ showAllDates, setShowAllDates }) => {
  const shouldShowElement = useSelector(selectShouldShowElement);
  const dispatch = useDispatch();

  return (
    <>
      <Accordion>
        <>
          <AccordionTitle
            {...{ shouldShowElement }}
            onClick={() => dispatch(toggleShowElement())}
          >
            <div>{shouldShowElement ? "ok, close" : "show filtering info"}</div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>
          {shouldShowElement && (
            <AccordionContent>
              {showAllDates ? (
                <Text>
                  you are currently viewing all bookings ever created. tap the
                  "show todays bookings" button below to show only bookings for
                  today.
                </Text>
              ) : (
                <>
                  <Text>
                    you are currently viewing bookings for the current date.
                  </Text>
                  <Text>
                    Note - the search box will not show bookings from past or
                    future dates if you search for them whilst viewing bookings
                    from the current date.
                  </Text>
                  <Text>
                    please switch to viewing all bookings in order to search for
                    past or future bookings.
                  </Text>
                  <Text>
                    tap the "show all bookings" button below to show all
                    bookings ( including past & future bookings ).
                  </Text>
                </>
              )}
              <Text>
                if you tap the button to change the table filtering, please note
                that if you have a search term already entered as you swap, you
                will have to re enter the search term in order to trigger the
                search.
              </Text>
            </AccordionContent>
          )}
        </>
      </Accordion>

      <FilterEntriesButtonDiv>
        {showAllDates ? (
          <OrangeButton onClick={() => setShowAllDates(false)}>
            show todays bookings
          </OrangeButton>
        ) : (
          <OrangeButton onClick={() => setShowAllDates(true)}>
            show all bookings
          </OrangeButton>
        )}
      </FilterEntriesButtonDiv>
    </>
  );
};

export default FilterButton;
