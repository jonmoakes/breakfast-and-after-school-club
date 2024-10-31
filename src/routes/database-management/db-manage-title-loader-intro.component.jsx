import Balancer from "react-wrap-balancer";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const DBManageTitleLoaderIntro = ({ databaseManagementIsLoading }) => (
  <>
    <ParentDiv>
      <BlackTitle>database management</BlackTitle>
    </ParentDiv>

    {databaseManagementIsLoading ? <Loader /> : null}

    <ParentDiv>
      <Text>
        <Balancer>
          here, you can view and update data in your database.
        </Balancer>
      </Text>

      <Text>
        <Balancer>
          <RedSpan>
            please note, editing the database can break the app if not done
            correctly!
          </RedSpan>
        </Balancer>
      </Text>
    </ParentDiv>
  </>
);

export default DBManageTitleLoaderIntro;
