import Balancer from "react-wrap-balancer";

import { defaultTableSize } from "../default-table-size";

import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const IncomeTableHelp = () => (
  <>
    <BlackHr />
    <BlueH2>
      <Balancer>returned entries total amount:</Balancer>
    </BlueH2>
    <Text>
      when you have entered a search term, you will see the total amount of all
      of the entries returned from the search query added together for easy
      reference.
    </Text>
    <Text>
      please note, that even entries that match the search term that are not
      visible on the page due to pagination are included in the total.
    </Text>
    <Text>
      for example, the default number of rows in the table is {defaultTableSize}
      . If you entered a search term that returned 150 entries,{" "}
      {150 - defaultTableSize} of them would not be on the first page and you
      would be able to view them via the pagination buttons at the bottom of the
      table.
    </Text>
    <Text>
      however these extra {150 - defaultTableSize} entries that are not visible{" "}
      <RedSpan>would</RedSpan> be included in the total.
    </Text>
    <BlackHr />
    <Text>
      for example, if you have 10 entries in week 26 that total £100 and you
      search for a monday which returns 2 entries in that week, the total will
      be the total cost of those 2 entries.
    </Text>
    <Text>remove the search term to get data of all entries again.</Text>
    <BlackHr />
    <BlueH2>getting entries from a specific week of the year:</BlueH2>
    <Text>you can also get data from just a certain week in the year.</Text>
    <Text>
      enter in a week number in the box that says 'filter by week number' ( ie
      52 for the last week of the year ).
    </Text>
    <Text>
      you will then get all of the entries from that week and the total will be
      automatically calculated and shown just above the table.
    </Text>
    <Text>clear the input box to show all of the entries again.</Text>
    <BlueH2>
      <Balancer>if no data is found in a week search:</Balancer>
    </BlueH2>
    <Text>
      if no entries are returned for the week, tap the 'clear week number'
      button ( or manually clear the input box ) to remove the week filter and
      show all entries again.
    </Text>

    <Text>
      the same principle applies as mentioned previously with regards entries
      that are off screen due to pagination.
    </Text>
    <Text>
      if you enter in a search for a week number and then search for something
      within that weeks data ( a date for example ), the total will be total
      amount from data in the the search, not the whole week itself.
    </Text>
    <Text>
      if you change the week number whilst a search term is still in the box,
      you will need to clear the search term and then re-enter it in order to
      get the appropriate data for your search.
    </Text>
    <BlackHr />
    <BlueH2>emailing a user:</BlueH2>
    <Text>
      you can email the parent by simply tapping on the envelope icon in
      whichever row you wish.
    </Text>
    <Text>
      view the email address ( hidden by default for privacy ) to view the
      customers email address.
    </Text>
  </>
);

export default IncomeTableHelp;
