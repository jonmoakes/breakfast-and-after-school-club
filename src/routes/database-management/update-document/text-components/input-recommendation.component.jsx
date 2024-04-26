import { Text } from "../../../../styles/p/p.styles";
import { RedSpan } from "../../../../styles/span/span.styles";

const InputRecommendation = () => (
  <>
    <Text>
      please enter these values in the boxes below <RedSpan>exactly</RedSpan> as
      they are in the email and then tap 'update document'.
    </Text>
    <Text>
      we recommend copy and pasting the values from the email so that there are
      no errors.
    </Text>
  </>
);

export default InputRecommendation;
