// import { useSelector, useDispatch } from "react-redux";

// import useConfirmSwal from "../../hooks/use-confirm-swal";
// import useFireSwal from "../../hooks/use-fire-swal";
// import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

// import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";
// import { selectCurrentUser } from "../../store/user/user.selector";
// import { signOutStart } from "../../store/user/user.action";
// import { clearTravelDetailsReducer } from "../../store/travel-details/travel-details.action";
// import { clearErrorMessage } from "../../store/error/error.action";

// import { NavLink } from "../../styles/p/p.styles";
// import { BorderLink } from "../../styles/span/span.styles";

// import {
//   signOutSuccessMessage,
//   signOutConfirmMessage,
//   yesSignMeOutMessage,
// } from "../../strings/strings";

// const NavSignOut = () => {
//   const { confirmSwal } = useConfirmSwal();
//   const { fireSwal } = useFireSwal();
//   const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

//   const showHamburgerMenu = useSelector(selectShowHamburgerMenu);
//   const currentUser = useSelector(selectCurrentUser);

//   const dispatch = useDispatch();

//   const confirmResult = () => {
//     dispatch(signOutStart());
//     dispatch(clearTravelDetailsReducer());
//     dispatch(clearErrorMessage());
//     fireSwal("success", signOutSuccessMessage, "", 2000, false, true);
//     hamburgerHandlerNavigate("/");
//   };

//   const confirmSignOut = () => {
//     confirmSwal(signOutConfirmMessage, "", yesSignMeOutMessage, confirmResult);
//   };

//   return (
//     <>
//       {currentUser && (
//         <NavLink onClick={confirmSignOut}>
//           <BorderLink {...{ showHamburgerMenu }}>sign out</BorderLink>
//         </NavLink>
//       )}
//     </>
//   );
// };

// export default NavSignOut;
