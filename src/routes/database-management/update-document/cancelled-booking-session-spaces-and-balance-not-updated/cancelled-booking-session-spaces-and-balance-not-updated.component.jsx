import RequiredData from "./required-data.component";
import InputRecommendation from "../text-components/input-recommendation.component";
import UpdateSessionSpacesForm from "./update-session-spaces-form.component";

import { Text } from "../../../../styles/p/p.styles";

const CancelledBookingSessionSpacesAndBalanceNotUpdated = () => (
  <>
    <RequiredData />
    <InputRecommendation />

    <Text>
      if successful, the session spaces in the database will be updated to the
      correct number and the user should see their correct balance show
      immediately.
    </Text>
    <Text>
      if you receive an error when submitting the form, plase contact jonathan,
    </Text>

    <UpdateSessionSpacesForm />
  </>
);

export default CancelledBookingSessionSpacesAndBalanceNotUpdated;
