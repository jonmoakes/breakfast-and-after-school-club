import { Link } from "react-router-dom";

import { FeatureDiv, ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/buttons/buttons.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { aboutRoute } from "../../strings/routes/routes-strings";

const Info = () => (
  <ParentDiv>
    <FeatureDiv>
      <Text>
        with the breakfast and after school club app, you can Simplify bookings,
        payments and communication for parents and administrators.
      </Text>
    </FeatureDiv>

    <FeatureDiv>
      <BlackHr />
      <BlueH2 className="no-underline">
        📅
        <br />
        Easy Booking
      </BlueH2>
      <Text>Parents can book and cancel sessions in a few taps.</Text>
      <BlackHr />
    </FeatureDiv>

    <FeatureDiv>
      <BlueH2 className="no-underline">
        💸 <br />
        Virtual Wallet
      </BlueH2>
      <Text>
        Users pay an amount into their wallet which is then deducted or refunded
        as they place or amend their booking.
      </Text>
      <BlackHr />
    </FeatureDiv>

    <FeatureDiv>
      <BlueH2 className="no-underline">
        📧 <br />
        Instant Communication
      </BlueH2>
      <Text>Effortlessly connect with parents at the touch of a button.</Text>
      <BlackHr />
    </FeatureDiv>

    <FeatureDiv>
      <BlueH2 className="no-underline">
        📊 <br />
        Comprehensive Overview
      </BlueH2>
      <Text>View and analyse all bookings in one centralised table.</Text>
      <BlackHr />
    </FeatureDiv>

    <FeatureDiv>
      <Link to={aboutRoute}>
        <Button>find out more!</Button>
      </Link>
      <Text>
        or get in touch to request a full demo or to ask any questions!
      </Text>
      <BlackHr />
    </FeatureDiv>
  </ParentDiv>
);

export default Info;
