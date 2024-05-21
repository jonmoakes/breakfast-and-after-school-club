import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const DataSharingAndDisclosure = () => (
  <ParentDiv>
    <BlueH2>Data Sharing and Disclosure:</BlueH2>
    <Text>third party sharing:</Text>
    <Text>
      We share information with third-party service providers necessary to
      operate our app, such as payment processors (e.g.{" "}
      <a className="red" href="https://stripe.com/gb">
        Stripe
      </a>{" "}
      ) and data storage providers ({" "}
      <a className="red" href="https://appwrite.io/">
        appwrite
      </a>{" "}
      ).
    </Text>
    <Text>
      We may disclose your information to comply with legal obligations or in
      response to lawful requests by public authorities.
    </Text>
    <Text>
      We do not share your or your children's data with third parties for
      marketing purposes.
    </Text>
  </ParentDiv>
);

export default DataSharingAndDisclosure;
