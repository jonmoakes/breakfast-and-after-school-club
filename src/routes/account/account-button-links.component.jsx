import { useSelector } from "react-redux";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import { selectCurrentUser } from "../../store/user/user.selector";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const AccountButtonLinks = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { provider } = currentUser;

  const { emailProviderButtons, authProviderButtons, appOwnerButtons } =
    useNavigateToRoute();
  console.log(currentUser.id);
  return (
    <ParentDiv>
      <BlueH2>what would you like to do?</BlueH2>

      {currentUser.id === import.meta.env.VITE_APP_OWNER_ID
        ? appOwnerButtons.map((button) => {
            const { id, text, onClick } = button;
            return (
              <div key={id}>
                <BlackHr />
                <YellowGreenButton onClick={onClick}>{text}</YellowGreenButton>
              </div>
            );
          })
        : currentUser.id !== import.meta.env.VITE_APP_OWNER_ID &&
          provider === "email"
        ? emailProviderButtons.map((button) => {
            const { id, text, onClick } = button;
            return (
              <div key={id}>
                <BlackHr />
                <YellowGreenButton onClick={onClick}>{text}</YellowGreenButton>
              </div>
            );
          })
        : authProviderButtons.map((button) => {
            const { id, text, onClick } = button;
            return (
              <div key={id}>
                <BlackHr />
                <YellowGreenButton onClick={onClick}>{text}</YellowGreenButton>
              </div>
            );
          })}
    </ParentDiv>
  );
};

export default AccountButtonLinks;
