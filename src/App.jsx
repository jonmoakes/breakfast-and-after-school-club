import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

import ErrorFallback from "./components/errors/error-fallback.component";
import Loader from "./components/loader/loader.component";

import { contactRoute, signUpRoute } from "./strings/strings";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));

function App() {
  return (
    <>
      <GlobalStyle />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path={contactRoute} element={<Contact />} />
              <Route path={signUpRoute} element={<SignUp />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
