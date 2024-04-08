import Balancer from "react-wrap-balancer";

import useEditChildInfoLogic from "../hooks/use-edit-child-info-logic";

import { RadioDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { WhiteShadowText } from "../../../styles/p/p.styles";
import { LightGreenSpan, RedSpan } from "../../../styles/span/span.styles";
import { Label } from "../../../styles/form/form.styles";

const Consent = ({ handleUpdatedChildInfoChange }) => {
  const { consent } = useEditChildInfoLogic();

  return (
    <>
      <BlackHr />
      <RadioDiv>
        <WhiteShadowText>
          <Balancer>
            <RedSpan>*</RedSpan> consent for name / image use:
            <br />( current selecton:{" "}
            {consent === "yes" ? (
              <LightGreenSpan>{consent}</LightGreenSpan>
            ) : (
              <RedSpan className="capitalised">{consent}</RedSpan>
            )}
            )
          </Balancer>
        </WhiteShadowText>

        <BlackHr />

        <Label>
          yes
          <input
            type="radio"
            name="consent"
            value="yes"
            onChange={handleUpdatedChildInfoChange}
          />
        </Label>

        <BlackHr />

        <Label>
          no
          <input
            className="red"
            type="radio"
            name="consent"
            value="no"
            onChange={handleUpdatedChildInfoChange}
          />
        </Label>
        <BlackHr />
      </RadioDiv>
    </>
  );
};

export default Consent;
