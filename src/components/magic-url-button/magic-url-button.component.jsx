import { useNavigate } from "react-router-dom";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

import { magicUrlSignInRoute } from "../../strings/strings";

const MagicUrlButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <Text>or:</Text>
      <YellowGreenButton
        type="button"
        onClick={() => navigate(magicUrlSignInRoute)}
      >
        use a magic url!
      </YellowGreenButton>
    </>
  );
};

export default MagicUrlButton;
