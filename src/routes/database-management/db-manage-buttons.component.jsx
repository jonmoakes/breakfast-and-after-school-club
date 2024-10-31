import Balancer from "react-wrap-balancer";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const DBManageButtons = ({
  dbManagementButtons,
  dbManagementForErrorReceivedButtons,
}) => (
  <>
    <ParentDiv>
      <BlackH2>
        <Balancer>standard database management options:</Balancer>
      </BlackH2>
      <BlackHr />
      <RenderButtonsList {...{ buttons: dbManagementButtons }} />
    </ParentDiv>

    <ParentDiv>
      <BlackH2>
        <Balancer>for if you received an error email</Balancer>
      </BlackH2>
      <BlackHr />
      <RenderButtonsList
        {...{ buttons: dbManagementForErrorReceivedButtons }}
      />
    </ParentDiv>
  </>
);

export default DBManageButtons;
