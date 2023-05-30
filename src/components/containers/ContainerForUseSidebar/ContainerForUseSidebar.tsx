import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Header } from "../../Header/Header";
import { INDEX } from "../../Sidebar/sections";
import { Sidebar } from "../../Sidebar/Sidebar";
import { HeaderContainerForUseSidebar } from "../HeaderContainerForUseSidebar/HeaderContainerForUseSidebar";
import { PageContainerForUseSidebar } from "../PageContainerForUseSidebar/PageContainerForUseSidebar";
import "./styles.css";

export interface BreadCrums {
  section_name: string;
  route: BreadCrumsRoute[];
}

export interface BreadCrumsRoute{
  id:number,
  name:string
}

export const ContainerForUseSidebar = () => {
  
  const [toggleButton, setToggleButton] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const changeToggleButton = (): void => {
    setToggleButton(!toggleButton);
  };

  const [breadcrums, setBreadcrums] = useState<BreadCrums>({
    section_name: "",
    route: [{ id: 0, name: "" }]
  });


  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      window.localStorage.removeItem("user");
      navigate(INDEX.route);
    }
  }, []);


  return (
    <>
      {token && (
        <div
          id="body"
          className={toggleButton ? "sb-sidenav-toggled bg-light" : "bg-light"}
        >
          <div className="d-flex " id="wrapper">
            <Sidebar toggleButton={setToggleButton} width={width} />
            <HeaderContainerForUseSidebar>
              <Header
                onClick={changeToggleButton}
                width={width}
                breadcrums={breadcrums}
              />
              <PageContainerForUseSidebar>
                <Outlet context={{ setBreadcrums }} />
              </PageContainerForUseSidebar>
            </HeaderContainerForUseSidebar>
          </div>
        </div>
      )}
    </>
  );
};
