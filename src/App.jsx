import { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes";
import MainLayOut from "./layouts";

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Hello</h1>}>
        <Routes>
          <Route
            exact
            element={
              <MainLayOut>
                <Outlet />
              </MainLayOut>
            }
          >
            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
                exact
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
