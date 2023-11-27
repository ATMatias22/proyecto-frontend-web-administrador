import "./styles.css";
import { SalesViewOrderTableContainer } from "./SalesViewOrderTableContainer/SalesViewOrderTableContainer";
import { SalesViewOrderTableTitle } from "./SalesViewOrderTableTitle/SalesViewOrderTableTitle";
import { BreadCrums } from "../../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SUB_SECTION_ROUTE_SALES_VIEW_ORDER } from "../../../Sidebar/subsections";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { Context } from "vm";

export const SalesViewOrderTable = () => {

  const breadcrumb: BreadCrums = {
    section_name: SUB_SECTION_ROUTE_SALES_VIEW_ORDER.name,
    route: SUB_SECTION_ROUTE_SALES_VIEW_ORDER.path,
  };

  const { setBreadcrums } = useOutletContext<Context>();

  useEffect(() => {
   document.title = SUB_SECTION_ROUTE_SALES_VIEW_ORDER.name;
    setBreadcrums(breadcrumb);

  }, []);
  return (
    <div className="card my-4">
      <SalesViewOrderTableTitle />
      <SalesViewOrderTableContainer />
    </div>
  );
};
