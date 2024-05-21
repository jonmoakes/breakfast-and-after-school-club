import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const GeographicRestrictions = () => (
  <ParentDiv>
    <BlueH2>GeographicRestrictions</BlueH2>
    <Text>
      The app is intended for use only by businesses based in the United
      Kingdom.
    </Text>
    <Text>
      By accessing or using the app, you represent and warrant that your
      business is legally registered and operates within the United Kingdom.
    </Text>
    <Text>
      We do not provide the app for use in any other locations, and we make no
      representations that the app is appropriate or available for use in other
      jurisdictions.
    </Text>
    <Text>
      Accessing the app from locations outside the United Kingdom is prohibited,
      and those who choose to access the app from outside the United Kingdom do
      so at their own risk and are responsible for compliance with local laws.
    </Text>
  </ParentDiv>
);

export default GeographicRestrictions;
