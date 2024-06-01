import Balancer from "react-wrap-balancer";

import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useConfirmCreateChild from "./hooks/use-confirm-create-child";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv, RadioDiv } from "../../styles/div/div.styles";
import {
  CapitalizedInput,
  Form,
  Label,
  StyledInput,
  StyledTextArea,
} from "../../styles/form/form.styles";
import { WhiteShadowText } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { leaveBlankIfNothingToAdd } from "../../strings/placeholders/placeholders-strings";

const CreateChildForm = () => {
  const {
    childName,
    childAge,
    consent,
    medicalInfo,
    dietryRequirements,
    additionalInfo,
    parentName,
    parentEmail,
    parentPhoneNumber,
    parentsUserId,
  } = useGetDatabaseManagementSelectors();
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { confirmCreateChild } = useConfirmCreateChild();

  return (
    <ParentDiv>
      <Form>
        <Label>
          <RedSpan>* </RedSpan>Child Name:
        </Label>
        <CapitalizedInput
          type="text"
          name="childName"
          onChange={handleDataToUpdateDocumentChange}
          value={childName || ""}
          placeholder="full name please"
        />

        <Label>
          <RedSpan>* </RedSpan>Child Age:
        </Label>
        <StyledInput
          type="number"
          inputMode="numeric"
          name="childAge"
          onChange={handleDataToUpdateDocumentChange}
          value={childAge || ""}
        />

        <BlackHr />
        <RadioDiv>
          <WhiteShadowText>
            <Balancer>
              <RedSpan>*</RedSpan> does the parent give you consent to use this
              childs name and / or image for use in our newsletters / social
              media etc?
            </Balancer>
          </WhiteShadowText>

          <BlackHr />

          <Label>
            yes
            <input
              type="radio"
              name="consent"
              value="yes"
              onChange={handleDataToUpdateDocumentChange}
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
              onChange={handleDataToUpdateDocumentChange}
            />
          </Label>
          <BlackHr />
        </RadioDiv>

        <Label>medical info:</Label>
        <StyledTextArea
          className="small-bottom-margin"
          type="text"
          name="medicalInfo"
          onChange={handleDataToUpdateDocumentChange}
          value={medicalInfo || ""}
          placeholder={leaveBlankIfNothingToAdd}
        />

        <Label>dietry requirements:</Label>
        <StyledTextArea
          className="small-bottom-margin"
          type="text"
          name="dietryRequirements"
          onChange={handleDataToUpdateDocumentChange}
          value={dietryRequirements || ""}
          placeholder={leaveBlankIfNothingToAdd}
        />

        <Label>additional info:</Label>
        <StyledTextArea
          className="small-bottom-margin"
          type="text"
          name="additionalInfo"
          onChange={handleDataToUpdateDocumentChange}
          value={additionalInfo || ""}
          placeholder={leaveBlankIfNothingToAdd}
        />

        <Label>
          <RedSpan>* </RedSpan>parent name:
        </Label>
        <StyledInput
          type="text"
          name="parentName"
          onChange={handleDataToUpdateDocumentChange}
          value={parentName || ""}
          placeholder={"matches name in the 'users list'"}
        />

        <Label>
          <RedSpan>* </RedSpan>parent email:
        </Label>
        <StyledInput
          type="email"
          name="parentEmail"
          onChange={handleDataToUpdateDocumentChange}
          value={parentEmail || ""}
          placeholder={"matches email in the 'users list'"}
        />

        <Label>
          <RedSpan>* </RedSpan>parent phone number:
        </Label>
        <StyledInput
          type="number"
          pattern="[0-9]*[.]?[0-9]+"
          name="parentPhoneNumber"
          onChange={handleDataToUpdateDocumentChange}
          value={parentPhoneNumber || ""}
          placeholder="11 digits"
        />

        <Label>
          <RedSpan>* </RedSpan>parents user id:
        </Label>
        <StyledInput
          type="text"
          name="parentsUserId"
          onChange={handleDataToUpdateDocumentChange}
          value={parentsUserId || ""}
          placeholder="20 characters, lowercased"
        />

        {childName &&
        childAge &&
        consent &&
        parentName &&
        parentEmail &&
        parentPhoneNumber &&
        parentsUserId ? (
          <YellowGreenButton
            type="button"
            onClick={() =>
              confirmCreateChild(
                childAge,
                childName,
                consent,
                medicalInfo,
                dietryRequirements,
                additionalInfo,
                parentName,
                parentEmail,
                parentPhoneNumber,
                parentsUserId
              )
            }
          >
            create child
          </YellowGreenButton>
        ) : (
          <WhiteShadowText>
            please fill in at least the fields marked with <RedSpan>*</RedSpan>{" "}
            in the form above.
          </WhiteShadowText>
        )}
      </Form>
    </ParentDiv>
  );
};

export default CreateChildForm;
