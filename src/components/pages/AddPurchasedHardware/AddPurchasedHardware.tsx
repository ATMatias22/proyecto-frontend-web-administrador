import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SUB_SECTION_ROUTE_PURCHASED_HARDWARE_ADD } from "../../Sidebar/subsections";
import { AddPurchasedHardwareForm } from "./AddPurchasedHardwareForm/AddPurchasedHardwareForm"

export const AddPurchasedHardware = () => {
 const breadcrumb: BreadCrums = {
   section_name: SUB_SECTION_ROUTE_PURCHASED_HARDWARE_ADD.name,
   route: SUB_SECTION_ROUTE_PURCHASED_HARDWARE_ADD.path
 };

 const { setBreadcrums } = useOutletContext<Context>();

 useEffect(() => {
   document.title = SUB_SECTION_ROUTE_PURCHASED_HARDWARE_ADD.name;
   setBreadcrums(breadcrumb);
 }, []);


  return (
    <AddPurchasedHardwareForm/>
  )
}
