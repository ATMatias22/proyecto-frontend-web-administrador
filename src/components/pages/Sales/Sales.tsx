import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import {  SECTION_ROUTE_SALES } from "../../Sidebar/sections";
import { SalesAddButton } from "./SalesAddButton/SalesAddButton";
import { SalesTable } from "./SalesTable/SalesTable";
import "./styles.css";



export const Sales = () => {

  const breadcrumb: BreadCrums = {
    section_name: SECTION_ROUTE_SALES.name,
    route: SECTION_ROUTE_SALES.path,
  };

  const { setBreadcrums } = useOutletContext<Context>();

  useEffect(() => {
   document.title = SECTION_ROUTE_SALES.name;
    setBreadcrums(breadcrumb);

  }, []);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <SalesTable />
        </div>
      </div>
    </div>
  );
};
