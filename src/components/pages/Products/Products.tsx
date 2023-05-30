import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SECTION_ROUTE_PRODUCTS } from "../../Sidebar/sections";
import { ProductsAddButton } from "./ProductsAddButton/ProductsAddButton";
import { ProductsTable } from "./ProductsTable/ProductsTable";
import "./styles.css";

export interface Product {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  idUser?:number;
}


export const Products = () => {

  const breadcrumb: BreadCrums = {
    section_name: SECTION_ROUTE_PRODUCTS.name,
    route: SECTION_ROUTE_PRODUCTS.path,
  };

  const { setBreadcrums } = useOutletContext<Context>();


  useEffect(() => {
    document.title = SECTION_ROUTE_PRODUCTS.name;
    setBreadcrums(breadcrumb);
  }, []);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <ProductsAddButton />
          <ProductsTable />
        </div>
      </div>
    </div>
  );
};
