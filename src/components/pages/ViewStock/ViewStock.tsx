import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SUB_SECTION_ROUTE_PRODUCTS_VIEW_STOCK } from "../../Sidebar/subsections";
import { ViewStockForm } from "./ViewStockForm/ViewStockForm";


export const ViewStock = () => {
  
  const breadcrumb: BreadCrums = {
    section_name: SUB_SECTION_ROUTE_PRODUCTS_VIEW_STOCK.name,
    route: SUB_SECTION_ROUTE_PRODUCTS_VIEW_STOCK.path,
  };

  const { setBreadcrums } = useOutletContext<Context>();

  useEffect(() => {
    document.title = SUB_SECTION_ROUTE_PRODUCTS_VIEW_STOCK.name;
    setBreadcrums(breadcrumb);
  }, []);

  return (
    <ViewStockForm/>
  )
}