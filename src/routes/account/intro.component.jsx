import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import WalletBalance from "../../components/wallet-balance/wallet-balance.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const Intro = () => {
  const { name, email, appOwnerEmail } = useGetCurrentUserSelectors();

  return (
    <ParentDiv>
      <Text>welcome{name ? ` ${name}!` : "!"}</Text>
      {email === appOwnerEmail ? null : <WalletBalance />}
    </ParentDiv>
  );
};

export default Intro;
