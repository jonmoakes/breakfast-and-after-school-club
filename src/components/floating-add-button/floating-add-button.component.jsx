import AddIconWhite from "../../assets/add-icon-white.png";

import { IconButton } from "../../styles/buttons/buttons.styles";
import { Icon } from "../../styles/image/image.styles";

const FloatingAddButton = () => (
  <>
    <IconButton>
      <Icon src={AddIconWhite} />
    </IconButton>
  </>
);

export default FloatingAddButton;
