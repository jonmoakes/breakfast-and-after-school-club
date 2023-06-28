// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

// import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
// import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
// import useConfirmSwal from "../../hooks/use-confirm-swal";

// import { selectCurrentUser } from "../../store/user/user.selector";
// import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";

// import { NavLink } from "../../styles/p/p.styles";
// import { BorderLink } from "../../styles/span/span.styles";

// import { signedInRoutesWithoutDash } from "./routes";

// import {
//   areYouSureMessage,
//   loseAllDataMessage,
//   imSureMessage,
// } from "../../strings/strings";

// const NavNotAppOwner = () => {
//   const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
//   const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
//   const { confirmForwardToNewRoute } = useConfirmSwal();

//   const currentUser = useSelector(selectCurrentUser);
//   const showHamburgerMenu = useSelector(selectShowHamburgerMenu);
//   const location = useLocation();
//   const ownerId = import.meta.env.VITE_APP_OWNER_ID;

//   return (
//     <>
//       {/*if NOT on confirm travel details, confirm-customer-details or pay-now routes */}
//       {currentUser && currentUser.id !== ownerId && !isRouteWithNavWarning() ? (
//         <>
//           {signedInRoutesWithoutDash.map((route) => {
//             return route !== location.pathname ? (
//               <NavLink
//                 key={route}
//                 onClick={() => hamburgerHandlerNavigate(route)}
//               >
//                 <BorderLink {...{ showHamburgerMenu }}>
//                   {route.replaceAll("-", " ").replace("/", " ")}
//                 </BorderLink>
//               </NavLink>
//             ) : null;
//           })}
//         </>
//       ) : null}

//       {/*if ON confirm-travel-details, confirm-customer-details or pay-now routes */}
//       {currentUser && currentUser.id !== ownerId && isRouteWithNavWarning() ? (
//         <>
//           {signedInRoutesWithoutDash.map((route) => {
//             return route !== location.pathname ? (
//               <NavLink
//                 key={route}
//                 onClick={() =>
//                   confirmForwardToNewRoute(
//                     areYouSureMessage,
//                     loseAllDataMessage,
//                     imSureMessage,
//                     route
//                   )
//                 }
//               >
//                 <BorderLink {...{ showHamburgerMenu }}>
//                   {route.replaceAll("-", " ").replace("/", " ")}
//                 </BorderLink>
//               </NavLink>
//             ) : null;
//           })}
//         </>
//       ) : null}
//     </>
//   );
// };

// export default NavNotAppOwner;
