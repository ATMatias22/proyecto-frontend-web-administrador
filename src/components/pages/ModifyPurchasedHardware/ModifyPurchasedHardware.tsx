import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SUB_SECTION_ROUTE_PURCHASED_HARDWARE_MODIFY } from "../../Sidebar/subsections";
import { ModifyPurchasedHardwareForm } from "./ModifyPurchasedHardwareForm/ModifyPurchasedHardwareForm";

export const ModifyPurchasedHardware = () => {
  const breadcrumb: BreadCrums = {
    section_name: SUB_SECTION_ROUTE_PURCHASED_HARDWARE_MODIFY.name,
    route: SUB_SECTION_ROUTE_PURCHASED_HARDWARE_MODIFY.path,
  };

  const { setBreadcrums } = useOutletContext<Context>();

  useEffect(() => {
   document.title = SUB_SECTION_ROUTE_PURCHASED_HARDWARE_MODIFY.name;
    setBreadcrums(breadcrumb);

  }, []);

  return <ModifyPurchasedHardwareForm />;
};
