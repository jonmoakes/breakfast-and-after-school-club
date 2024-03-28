import useGetUpdateEmailSelectors from "../../hooks/get-selectors/use-get-update-email-selectors";
import useUpdateEmailActions from "../../hooks/get-actions-and-thunks/update-email-actions-and-thunks/use-update-email-actions";
import useHideUpdateEmailPasswordOnEmpty from "./update-email-hooks/use-hide-update-email-password-on-empty";
import useConfirmUpdateEmail from "./update-email-hooks/use-confirm-update-email";
import useIsOnline from "../../hooks/use-is-online";
import useGetPasswordIsVisibleSelectors from "../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

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
} from "../../strings/placeholders/placeholders-strings";

const NewEmail = () => {
  useHideUpdateEmailPasswordOnEmpty();
  const { newEmail, confirmNewEmail, password } = useGetUpdateEmailSelectors();
  const { updateEmailPasswordIsVisible } = useGetPasswordIsVisibleSelectors();
  const { dispatchToggleUpdateEmailPasswordIsVisible } =
    usePasswordIsVisibleActions();
  const { confirmUpdateEmail } = useConfirmUpdateEmail();
  const { dispatchHandleUpdateEmailDetailsChange } = useUpdateEmailActions();
  const { isOnline } = useIsOnline();

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
          onChange={dispatchHandleUpdateEmailDetailsChange}
        />

        <LowercasedInput
          name="confirmNewEmail"
          type="email"
          value={confirmNewEmail || ""}
          placeholder="confirm new email address"
          required
          onChange={dispatchHandleUpdateEmailDetailsChange}
        />

        <Label>your password:</Label>
        <RelativePositionDiv>
          <PasswordInput
            name="password"
            type={updateEmailPasswordIsVisible ? "text" : "password"}
            value={password || ""}
            placeholder={enterYourPasswordPlaceholder}
            required
            onChange={dispatchHandleUpdateEmailDetailsChange}
          />

          {password.length ? (
            <ToggleUpdateEmailPassword
              {...{ updateEmailPasswordIsVisible }}
              onClick={dispatchToggleUpdateEmailPasswordIsVisible}
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
