// import { SmallButton } from "../../styles/buttons/buttons.styles";
// import { SearchDateHelpDiv } from "../../styles/div/div.styles";
// import { RedH2Underline } from "../../styles/h2/h2.styles";
// import { BlackText } from "../../styles/p/p.styles";
// import { LowercaseSpan } from "../../styles/span/span.styles";

// const SearchingDatesHelp = ({ show, toggleShowHideElement }) => {
//   return (
//     <>
//       {show ? (
//         <SearchDateHelpDiv>
//           <BlackText>
//             please note, if you're searching for a date, please search for it's
//             numerical value.
//           </BlackText>
//           <RedH2Underline>searching for a month:</RedH2Underline>
//           <BlackText>
//             for example "11" for november or "04" for april.
//           </BlackText>
//           <RedH2Underline>searching for a date and month:</RedH2Underline>
//           <BlackText>
//             if you're searching for a date and month, for example August 12th,
//             <br />
//             please search for 08-12. ( make sure to include the "-"! ).
//           </BlackText>
//           <BlackText>
//             another example is 07-05 for July 5th, or 12-04 for December 4th.
//           </BlackText>
//           <RedH2Underline>searching for a full date:</RedH2Underline>
//           <BlackText>
//             a full date would be for example 2023-05-25 for 25th May 2023.
//           </BlackText>
//           <RedH2Underline>reasoning:</RedH2Underline>

//           <BlackText>
//             the reason we have to search for dates this way is because of the
//             way the data is received & formatted from the database.
//           </BlackText>
//           <BlackText>
//             when you've chosen a date when adding a booking, the raw value of
//             the date is in the <LowercaseSpan>yyyy-mm-dd</LowercaseSpan> format
//             which is the standard.
//           </BlackText>
//           <BlackText>
//             in the uK this is not how we write dates, so the app converts the
//             date to the readable format that you see in the table.
//           </BlackText>
//           <BlackText>
//             however, the table would be unable to be sorted into date ordered
//             with this formatted method, so in order to maintain this sorting
//             feature, we need to use the raw
//             <br />
//             <LowercaseSpan>yyy-mm-dd</LowercaseSpan> value.
//           </BlackText>
//           <SmallButton onClick={toggleShowHideElement}>ok close</SmallButton>
//         </SearchDateHelpDiv>
//       ) : null}
//     </>
//   );
// };

// export default SearchingDatesHelp;
