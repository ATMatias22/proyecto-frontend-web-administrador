import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SECTION_ROUTE_PURCHASED_HARDWARE } from "../../Sidebar/sections";
import { PurchasedHardwareAddButton } from "./PurchasedHardwareAddButton/PurchasedHardwareAddButton";
import { PurchasedHardwareTable } from "./PurchasedHardwareTable/PurchasedHardwareTable";
import "./styles.css";


export const PurchasedHardware = () => {
  const breadcrumb: BreadCrums = {
    section_name: SECTION_ROUTE_PURCHASED_HARDWARE.name,
    route: SECTION_ROUTE_PURCHASED_HARDWARE.path,
  };

  const { setBreadcrums } = useOutletContext<Context>();

  useEffect(() => {
   document.title = SECTION_ROUTE_PURCHASED_HARDWARE.name;
    setBreadcrums(breadcrumb);

  }, []);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <PurchasedHardwareAddButton />
          <PurchasedHardwareTable />
        </div>
      </div>
    </div>
  );
};
