import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Home from "./Pages/Home/Home";
import Watch from "./Pages/Watch/Watch";
import TheBrand from "./Pages/TheBrand/TheBrand";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Admin from "./Pages/Admin/Admin";

interface publicRouteType {
  path: string;
  component: React.FC;
}

const publicRoute: publicRouteType[] = [
  { path: "/", component: Home },
  { path: "/watches", component: Watch },
  { path: "/the-brand", component: TheBrand },
  { path: "/contact", component: Contact },
  { path: "/cart", component: Cart },
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
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
