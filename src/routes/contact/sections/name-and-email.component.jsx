import useGetContactFormSelectors from "../../../hooks/get-selectors/use-get-contact-form-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useContactFormActions from "../../../hooks/get-actions-and-thunks/contact-form-actions-and-thunks/use-contact-form-actions";

import {
  CapitalizedInput,
  Label,
  LowercasedInput,
} from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const NameAndEmail = () => {
  const { name, email } = useGetContactFormSelectors();
  const { currentUser } = useGetCurrentUserSelectors();
  const { dispatchHandleContactFormDetailsChange } = useContactFormActions();

  return (
    <>
      {!currentUser ? (
        <>
          <Label>
            <RedSpan>* </RedSpan>Your Name:
          </Label>
          <CapitalizedInput
            type="text"
            name="name"
            onChange={dispatchHandleContactFormDetailsChange}
            value={name || ""}
          />

          <Label>
            <RedSpan>* </RedSpan>Your Email:
          </Label>
          <LowercasedInput
            type="email"
            name="email"
            onChange={dispatchHandleContactFormDetailsChange}
            value={email || ""}
          />
        </>
      ) : null}
    </>
  );
};

export default NameAndEmail;
