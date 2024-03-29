import useGetSendEmailSelectors from "../../hooks/get-selectors/use-get-send-email-selectors";
import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useConfirmCloseAccount from "./close-account-hooks/use-confirm-close-account";
import useCloseAccountSwal from "./close-account-hooks/use-close-account-swal";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { contactRoute } from "../../strings/routes/routes-strings";

const CloseAccount = () => {
  useCloseAccountSwal();

  const { currentUserProvider } = useGetCurrentUserSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  const { confirmCloseAccount } = useConfirmCloseAccount();

  console.log(currentUserProvider);
  return (
    <Container>
      {sendEmailIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>close your account</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>
          if you wish to close your account, please send us a request using the
          "close account" button below.
        </Text>
        <Text>
          once we have received your request, please allow up to 14 days for all
          of this data to be deleted.
        </Text>

        <Text>you will receive an email once the process is complete.</Text>
        {currentUserProvider !== "email" ? (
          <>
            <Text>
              you should also remove access to the app in your{" "}
              {currentUserProvider === "facebook" ? "facebook" : "google"}{" "}
              account.
            </Text>
            {currentUserProvider === "facebook" ? (
              <>
                <Text>
                  in facebook, navigate to 'settings', then scroll down until
                  you find 'apps and websites' and tap on it.
                </Text>
                <Text>
                  then, tap on 'breakfast & after school club' and then tap
                  remove.
                </Text>
              </>
            ) : (
              <>
                <Text>
                  please tap on the following link to see how to remove app
                  access from your google account. The link is from the official
                  google docs.
                </Text>
                <Text>
                  <a
                    className="red"
                    href="https://support.google.com/accounts/answer/13533235?hl=en#zippy=%2Csign-in-with-google"
                  >
                    Manage connections between your Google Account and
                    third-parties
                  </a>
                </Text>
              </>
            )}
          </>
        ) : null}
        <Text>
          please make sure that if you have funds in your account, that you
          either spend or request a refund for the amount in your wallet before
          proceeding with the delete account request.
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Text>any questions?</Text>
        <Text>
          please <StyledLink to={contactRoute}>contact us</StyledLink>
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Text>happy to proceed with your account deletion?</Text>
        <Text>tap the button below!</Text>
        <YellowGreenButton onClick={confirmCloseAccount}>
          close account
        </YellowGreenButton>
      </ParentDiv>
    </Container>
  );
};

export default CloseAccount;
