import { Profile } from "./components/pages/Profile/Profile";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Users } from "./components/pages/Users/Users";
import { PurchasedHardware } from "./components/pages/PurchasedHardware/PurchasedHardware";
import {
  INDEX,
  MAIN_ROUTE_PANEL_ADMINISTRATOR,
  SECTION_ROUTE_PRODUCTS,
  SECTION_ROUTE_PROFILE,
  SECTION_ROUTE_PURCHASED_HARDWARE,
  SECTION_ROUTE_SALES,
  SECTION_ROUTE_USERS,
} from "./components/Sidebar/sections";
import { Sales } from "./components/pages/Sales/Sales";
import { ContainerForUseSidebar } from "./components/containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { AddPurchasedHardware } from "./components/pages/AddPurchasedHardware/AddPurchasedHardware";
import {
  SUB_SECTION_ROUTE_PRODUCTS_ADD,
  SUB_SECTION_ROUTE_PRODUCTS_MODIFY,
  SUB_SECTION_ROUTE_PURCHASED_HARDWARE_ADD,
  SUB_SECTION_ROUTE_PURCHASED_HARDWARE_MODIFY,
  SUB_SECTION_ROUTE_SALES_ADD,
  SUB_SECTION_ROUTE_SALES_MODIFY,
  SUB_SECTION_ROUTE_USERS_MODIFY,
} from "./components/Sidebar/subsections";
import { ModifyPurchasedHardware } from "./components/pages/ModifyPurchasedHardware/ModifyPurchasedHardware";
import { AddSales } from "./components/pages/AddSales/AddSales";
import { ModifySales } from "./components/pages/ModifySales/ModifySales";
import { ModifyUsers } from "./components/pages/ModifyUsers/ModifyUsers";
import { FormLogin } from "./components/pages/Login/FormLogin";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { Products } from "./components/pages/Products/Products";
import { AddProducts } from "./components/pages/AddProducts/AddProducts";
import { ModifyProducts } from "./components/pages/ModifyProducts/ModifyProducts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={INDEX.route} element={<FormLogin />} />

        {/* 404 */}

        <Route path="*" element={<NotFound />} />
        <Route
          path={MAIN_ROUTE_PANEL_ADMINISTRATOR.route}
          element={<ContainerForUseSidebar />}
        >
          {/* Seccion perfil */}
          <Route path={SECTION_ROUTE_PROFILE.route} element={<Profile />} />

          {/* Seccion usuarios y sus subsecciones */}
          <Route path={SECTION_ROUTE_USERS.route} element={<Users />} />
          <Route
            path={SUB_SECTION_ROUTE_USERS_MODIFY.route}
            element={<ModifyUsers />}
          />

          {/* Seccion Ventas del hardware y sus subsecciones */}
          <Route
            path={SECTION_ROUTE_PURCHASED_HARDWARE.route}
            element={<PurchasedHardware />}
          />

          <Route
            path={SUB_SECTION_ROUTE_PURCHASED_HARDWARE_ADD.route}
            element={<AddPurchasedHardware />}
          />
          <Route
            path={
              SUB_SECTION_ROUTE_PURCHASED_HARDWARE_MODIFY.route + "/:purchasedHardwareId"
            }
            element={<ModifyPurchasedHardware />}
          />

          {/* Seccion ventas y sus subsecciones */}
          <Route path={SECTION_ROUTE_SALES.route} element={<Sales />} />
          <Route
            path={SUB_SECTION_ROUTE_SALES_ADD.route}
            element={<AddSales />}
          />
          <Route
            path={SUB_SECTION_ROUTE_SALES_MODIFY.route}
            element={<ModifySales />}
          />

          {/* Seccion productos y sus subsecciones */}
          <Route path={SECTION_ROUTE_PRODUCTS.route} element={<Products />} />
          <Route
            path={SUB_SECTION_ROUTE_PRODUCTS_ADD.route}
            element={<AddProducts />}
          />
          <Route
            path={SUB_SECTION_ROUTE_PRODUCTS_MODIFY.route + "/:productId"}
            element={<ModifyProducts />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
