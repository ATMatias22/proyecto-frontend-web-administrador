import { useEffect } from "react";
import {  useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SECTION_ROUTE_PROFILE } from "../../Sidebar/sections";
import { BackgroundUserData } from "./BackgroundUserData/BackgroundUserData";
import { UserData } from "./UserData/UserData";

export const Profile = () => {
  const breadcrumb: BreadCrums = {
    section_name: SECTION_ROUTE_PROFILE.name,
    route: SECTION_ROUTE_PROFILE.path,
  };

  const { setBreadcrums } = useOutletContext<Context>();

  useEffect(() => {
    document.title = SECTION_ROUTE_PROFILE.name;
    setBreadcrums(breadcrumb);
  }, []);

  return (
    <>
      <BackgroundUserData />
      <UserData />
    </>
  );
};
