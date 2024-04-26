import RequiredData from "./required-data.component";
import InputRecommendation from "../text-components/input-recommendation.component";
import UpdateBalanceForm from "./update-balance-form.component";

import { Text } from "../../../../styles/p/p.styles";

const BalanceErrorAfterCancelledBooking = () => (
  <>
    <RequiredData />
    <InputRecommendation />
    <Text>
      if successful, the user should instantly see their balance updated to the
      correct amount.
    </Text>

    <UpdateBalanceForm />
  </>
);

export default BalanceErrorAfterCancelledBooking;
