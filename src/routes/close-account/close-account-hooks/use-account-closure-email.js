import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { capitalizeString } from "../../../functions/capitalize-string";

const useAccountClosureEmail = () => {
  const { name } = useGetCurrentUserSelectors();

  const accountClosureEmail = `
  
Hi ${name ? capitalizeString(name) : name}

This Email Is Just To Confirm That You Have Requested To Close Your Account With The Breakfast And After School Club App.

Thank You For Using Our Service!

We Confirm That The Process Of Deleting Your Account Is Underway And We Will Notify You As Soon As It Is Complete.

Please Allow Up To 14 Days For The Deletion Of Your Account.

Kind Regards,

The Breakfast And After School Club Team!
_________________________________________
`;

  return { accountClosureEmail };
};

export default useAccountClosureEmail;
