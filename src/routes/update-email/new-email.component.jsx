import { useDispatch, useSelector } from "react-redux";

import useHandleUpdateEmailDetails from "./update-email-hooks/use-handle-update-email-details";
import useHideUpdateEmailPasswordOnEmpty from "./update-email-hooks/use-hide-update-email-password-on-empty";
import useUpdateEmailSubmit from "./update-email-hooks/use-update-email-submit";
import useIsOnline from "../../hooks/use-is-online";

import { selectUpdateEmailDetails } from "../../store/update-email/update-email.selector";
import { selectUpdateEmailPasswordIsVisible } from "../../store/password-is-visible/password-is-visible.selector";
import { toggleUpdateEmailPasswordIsVisible } from "../../store/password-is-visible/password-is-visible.slice";

import NetworkError from "../../components/errors/network-error.component";

import {
  Form,
  Label,
  LowercasedInput,
  PasswordInput,
} from "../../styles/form/form.styles";
import { RelativePositionDiv } from "../../styles/div/div.styles";
import { ToggleUpdateEmailPassword } from "../../styles/span/span.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  enterEmailAddress,
  enterYourPasswordPlaceholder,
} from "../../strings/strings";

const NewEmail = () => {
  useHideUpdateEmailPasswordOnEmpty();
  const { updateEmailSubmit } = useUpdateEmailSubmit();
  const { handleUpdateEmailDetailsChange } = useHandleUpdateEmailDetails();
  const { isOnline } = useIsOnline();

  const updateEmailDetails = useSelector(selectUpdateEmailDetails);
  const updateEmailPasswordIsVisible = useSelector(
    selectUpdateEmailPasswordIsVisible
  );
  const dispatch = useDispatch();

  const { newEmail, password } = updateEmailDetails;

  return (
    <>
      <Form>
        <Label>new email address:</Label>
        <LowercasedInput
          name="newEmail"
          type="email"
          value={newEmail || ""}
          placeholder={enterEmailAddress}
          required
          onChange={handleUpdateEmailDetailsChange}
        />

        <Label>your password:</Label>
        <RelativePositionDiv>
          <PasswordInput
            name="password"
            type={updateEmailPasswordIsVisible ? "text" : "password"}
            value={password || ""}
            placeholder={enterYourPasswordPlaceholder}
            required
            onChange={handleUpdateEmailDetailsChange}
          />

          {password.length ? (
            <ToggleUpdateEmailPassword
              {...{ updateEmailPasswordIsVisible }}
              onClick={() => dispatch(toggleUpdateEmailPasswordIsVisible())}
            />
          ) : null}
        </RelativePositionDiv>

        {!isOnline ? (
          <NetworkError />
        ) : newEmail && password ? (
          <YellowGreenButton type="button" onClick={updateEmailSubmit}>
            update email
          </YellowGreenButton>
        ) : null}
      </Form>
    </>
  );
};

export default NewEmail;
