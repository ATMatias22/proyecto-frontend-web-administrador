import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SUB_SECTION_ROUTE_SALES_MODIFY } from "../../Sidebar/subsections";
import { ModifySalesForm } from "./ModifySalesForm/ModifySalesForm"

export const ModifySales = () => {

 const breadcrumb: BreadCrums = {
   section_name: SUB_SECTION_ROUTE_SALES_MODIFY.name,
   route: SUB_SECTION_ROUTE_SALES_MODIFY.path,
 };

 const { setBreadcrums } = useOutletContext<Context>();

 useEffect(() => {
   document.title = SUB_SECTION_ROUTE_SALES_MODIFY.name;
   setBreadcrums(breadcrumb);

 }, []);


  return (
    <ModifySalesForm/>
  )
}
