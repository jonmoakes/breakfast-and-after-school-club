import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const InformationCollection = () => (
  <ParentDiv>
    <BlueH2>types of data we collect:</BlueH2>
    <Text>
      When you register for an account, we collect your name, email address and
      phone number.
    </Text>
    <Text>
      to create information about a child, the parent themselves must enter in
      the information.
    </Text>
    <Text>
      in the form that adds a child to the database, we collect their childs
      name, age, parental consent choice ( for things like images in school
      newsletters etc - please note that no images are allowed to be uploaded to
      our app ), dietry information ( nut allergies etc ) and medical info (
      uses an inhaler etc ).
    </Text>
    <Text>
      no data is uploaded that is not supplied by the parent themselves.
    </Text>
    <Text>
      the only other way info about a child can be uploaded is by administrators
      manually creating a child entry.
    </Text>
    <Text>
      this is only done with express permisssion of the parent of the child and
      only includes data about the child given by the parent.
    </Text>
    <Text>
      We collect information related to your bookings, such as the date of the
      session, the type of session the child is booked in for ( morning /
      afternoon etc ) and the name of the child in the booking, along with the
      associated information that the parent entered when creating the child.
    </Text>
    <Text>
      this is so the administrator has quick access to the data in order to
      ensure the safety of the child in the breakfast and after school club
      setting.
    </Text>
  </ParentDiv>
);

export default InformationCollection;
