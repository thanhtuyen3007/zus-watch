import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { DefaultLayout } from "./components/DefaultLayout/DefaultLayout";
import Home from "./components/Pages/Home/Home";
import Collections from "./components/Pages/Collections/Collections";
import TheBrand from "./components/Pages/TheBrand/TheBrand";
import Contact from "./components/Pages/Contact/Contact";
import News from "./components/Pages/News/News";

interface publicRouteType {
  path: string;
  component: React.FC;
}

const publicRoute: publicRouteType[] = [
  { path: "/", component: Home },
  { path: "/collections", component: Collections },
  { path: "/the-brand", component: TheBrand },
  { path: "/news", component: News },
  { path: "/contact", component: Contact },
];
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route: publicRouteType, index: number) => {
            const Page: React.FC = route.component;
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
