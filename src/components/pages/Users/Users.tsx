import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SECTION_ROUTE_USERS } from "../../Sidebar/sections";
import "./styles.css";
import { UserTable } from "./UsersTable/UserTable";
export const Users = () => {

const breadcrumb: BreadCrums = {
  section_name: SECTION_ROUTE_USERS.name,
  route: SECTION_ROUTE_USERS.path,
};

const { setBreadcrums } = useOutletContext<Context>();

useEffect(() => {
   document.title = SECTION_ROUTE_USERS.name;
  setBreadcrums(breadcrumb);
}, []);


  return (
    <>
      <UserTable/>
    </>
  );
};
