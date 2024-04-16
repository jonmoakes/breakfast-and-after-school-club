import { useState } from "react";
import Balancer from "react-wrap-balancer";

import useGetUploadDatesToDatabaseSelectors from "../../hooks/get-selectors/use-get-upload-dates-to-database-selectors";
import useConfirmUploadDatesToDatabase from "./upload-dates-to-database-hooks/use-confirm-upload-dates-to-database";
import useUploadDatesToDatabaseSwal from "./upload-dates-to-database-hooks/use-upload-dates-to-database-swal";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { Button } from "../../styles/buttons/buttons.styles";
import { UntransformedSpan } from "../../styles/span/span.styles";

const UploadDatesToDatabase = () => {
  useUploadDatesToDatabaseSwal();
  const { uploadDatesToDatabaseIsLoading } =
    useGetUploadDatesToDatabaseSelectors();
  const { confirmUploadDatesToDatabase } = useConfirmUploadDatesToDatabase();

  const [confirmed, setConfirmed] = useState(false);

  return (
    <Container>
      {uploadDatesToDatabaseIsLoading ? <Loader /> : null}

      <ParentDiv>
        <Balancer>
          <BlackTitle>upload dates</BlackTitle>
        </Balancer>
      </ParentDiv>

      <ParentDiv>
        <BlueH2>before uploading dates:</BlueH2>

        <Text>
          Check that you have created a dates list and passed it to the{" "}
          <UntransformedSpan>uploadDatesToDatabaseThunk</UntransformedSpan>.
          this can be found in the{" "}
          <UntransformedSpan>
            uploadDatesToDatabaseActionsAndThunks
          </UntransformedSpan>{" "}
          folder.
        </Text>

        <Text>
          then, check that in the{" "}
          <UntransformedSpan>uploadDatesToDatabaseAsync</UntransformedSpan>{" "}
          thunk in the store, you have entered in the correct projectId,
          databaseId and collectionId!
        </Text>

        <Text>
          note that when submitted, the thunk will take a few seconds to upload
          the dates to the database.
        </Text>
      </ParentDiv>

      {!confirmed ? (
        <ParentDiv>
          <Text>i confirm i have completed the steps above</Text>
          <Button onClick={() => setConfirmed(true)}>confirm</Button>
        </ParentDiv>
      ) : null}

      {confirmed ? (
        <ParentDiv>
          <Button onClick={confirmUploadDatesToDatabase}>
            confirm upload dates
          </Button>
        </ParentDiv>
      ) : null}
    </Container>
  );
};

export default UploadDatesToDatabase;
