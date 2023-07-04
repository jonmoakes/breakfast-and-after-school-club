import { useSelector } from "react-redux";

import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";

import { CapitalizedInput, Label } from "../../../styles/form/form.styles";

import { maxEightCharacters } from "../../../strings/strings";

const DisplayName = ({ handleSignUpFormChange }) => {
  const signUpFormDetails = useSelector(selectSignUpFormDetails);

  const { displayName } = signUpFormDetails;

  return (
    <>
      <Label>display name:</Label>
      <CapitalizedInput
        type="text"
        name="displayName"
        value={displayName || ""}
        onChange={handleSignUpFormChange}
        placeholder={maxEightCharacters}
        required
      />
    </>
  );
};

export default DisplayName;
