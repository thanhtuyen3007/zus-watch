import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Home from "./Pages/Home/Home";
import TheBrand from "./Pages/TheBrand/TheBrand";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Admin from "./Pages/Admin/Admin";
import Collections from "./Pages/Collections/Collections";
import Watches from "./Pages/Watches/Watches";
// import ProductIntro from "./components/ProductIntro/ProductIntro";

interface publicRouteType {
  path: string;
  component: React.FC;
}

const publicRoute: publicRouteType[] = [
  { path: "/", component: Home },
  { path: "/collections", component: Collections },
  { path: "/the-brand", component: TheBrand },
  { path: "/contact", component: Contact },
  { path: "/cart", component: Cart },
  { path: "/watches", component: Watches },
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
          {/* <Route path="/product/:id" element={<ProductIntro />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
