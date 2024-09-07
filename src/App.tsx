import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactElement } from "react";
import { DefaultLayout } from "./components/DefaultLayout/DefaultLayout";
import Home from "./components/Pages/Home/Home";
import Collections from "./components/Pages/Collections/Collections";
interface publicRouteType {
  path: string;
  component: () => ReactElement;
}

const publicRoute: publicRouteType[] = [
  { path: "/", component: Home },
  { path: "/collections", component: Collections },
];
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route: publicRouteType, index: number) => {
            const Page: () => ReactElement = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
