import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const RenderButtons = ({ buttons }) => {
  return (
    <>
      {buttons.map((button) => {
        const { id, text, onClick } = button;
        return (
          <div key={id}>
            <BlackHr />
            <YellowGreenButton onClick={onClick}>{text}</YellowGreenButton>
          </div>
        );
      })}
    </>
  );
};

export default RenderButtons;
