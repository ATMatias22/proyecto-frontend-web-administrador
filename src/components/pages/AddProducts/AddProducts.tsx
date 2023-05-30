import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SUB_SECTION_ROUTE_PRODUCTS_ADD } from "../../Sidebar/subsections";
import { AddProductsForm } from "./AddProductsForm/AddProductsForm"

export const AddProducts = () => {
  
  const breadcrumb: BreadCrums = {
    section_name: SUB_SECTION_ROUTE_PRODUCTS_ADD.name,
    route: SUB_SECTION_ROUTE_PRODUCTS_ADD.path,
  };

  const { setBreadcrums } = useOutletContext<Context>();

  useEffect(() => {
    document.title = SUB_SECTION_ROUTE_PRODUCTS_ADD.name;
    setBreadcrums(breadcrumb);
  }, []);

  return (
    <AddProductsForm/>
  )
}
