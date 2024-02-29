import { useDispatch, useSelector } from "react-redux";

import useHandleUpdateEmailDetails from "./update-email-hooks/use-handle-update-email-details";
import useHideUpdateEmailPasswordOnEmpty from "./update-email-hooks/use-hide-update-email-password-on-empty";
import useConfirmUpdateEmail from "./update-email-hooks/use-confirm-update-email";
import useIsOnline from "../../hooks/use-is-online";

import { selectUpdateEmailSelectors } from "../../store/update-email/update-email.slice";
import {
  toggleUpdateEmailPasswordIsVisible,
  selectPasswordIsVisibleSelectors,
} from "../../store/password-is-visible/password-is-visible.slice";

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
  const { confirmUpdateEmail } = useConfirmUpdateEmail();
  const { handleUpdateEmailDetailsChange } = useHandleUpdateEmailDetails();
  const { isOnline } = useIsOnline();

  const { updateEmailDetails } = useSelector(selectUpdateEmailSelectors);
  const { updateEmailPasswordIsVisible } = useSelector(
    selectPasswordIsVisibleSelectors
  );
  const dispatch = useDispatch();

  const { newEmail, confirmNewEmail, password } = updateEmailDetails;

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

        <LowercasedInput
          name="confirmNewEmail"
          type="email"
          value={confirmNewEmail || ""}
          placeholder="confirm new email address"
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
        ) : newEmail && confirmNewEmail && password ? (
          <YellowGreenButton type="button" onClick={confirmUpdateEmail}>
            update email
          </YellowGreenButton>
        ) : null}
      </Form>
    </>
  );
};

export default NewEmail;
