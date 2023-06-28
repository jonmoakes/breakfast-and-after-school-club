import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

import ErrorFallback from "./components/errors/error-fallback.component";
import Loader from "./components/loader/loader.component";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));

function App() {
  return (
    <>
      <GlobalStyle />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
