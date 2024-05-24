import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const PdfIcon = () => (
  <ParentDiv>
    <BlueH2>PDF icon:</BlueH2>
    <Text>
      Pdf icons created by{" "}
      <a
        className="red"
        href="https://www.flaticon.com/free-icons/pdf"
        title="pdf icons"
      >
        Stockio - Flaticon
      </a>
    </Text>
  </ParentDiv>
);

export default PdfIcon;
