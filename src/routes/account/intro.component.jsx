import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import WalletBalance from "../../components/wallet-balance/wallet-balance.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const Intro = () => {
  const { name, email, appOwnerEmail } = useGetCurrentUserSelectors();

  return (
    <ParentDiv>
      <Text>welcome{name ? ` ${name}!` : "!"}</Text>

      {email === appOwnerEmail ? (
        <>
          <BlueH2>what would you like to do?</BlueH2>
        </>
      ) : (
        <WalletBalance />
      )}
    </ParentDiv>
  );
};

export default Intro;
