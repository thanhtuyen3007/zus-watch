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
import ProductIntro from "./Pages/ProductIntro/ProductIntro";
import AddProduct from "./components/AddProduct/AddProduct";
import AdminProduct from "./components/AdminProduct/AdminProduct";

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
  { path: "products/:id", component: ProductIntro },
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
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />}>
            {/* Nested Routes */}
            <Route index element={<AdminProduct />} />
            {/* Default child route */}
            <Route path="add-product" element={<AddProduct />} />
            <Route path="products" element={<AdminProduct />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
