// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

// import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

// import { selectCurrentUser } from "../../store/user/user.selector";
// import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";

// import { NavLink } from "../../styles/p/p.styles";
// import { BorderLink } from "../../styles/span/span.styles";

// import { signedInRoutes } from "./routes";

// const NavAppOwner = () => {
//   const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

//   const showHamburgerMenu = useSelector(selectShowHamburgerMenu);
//   const currentUser = useSelector(selectCurrentUser);
//   const location = useLocation();

//   return (
//     <>
//       {currentUser && currentUser.id === import.meta.env.VITE_APP_OWNER_ID ? (
//         <>
//           {signedInRoutes.map((route) => {
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
//     </>
//   );
// };

// export default NavAppOwner;
