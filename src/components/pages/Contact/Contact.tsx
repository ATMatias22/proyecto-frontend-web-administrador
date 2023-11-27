import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "vm";
import { BreadCrums } from "../../containers/ContainerForUseSidebar/ContainerForUseSidebar";
import { SECTION_ROUTE_CONTACT } from "../../Sidebar/sections";
import { ContactForm } from "./ContactForm/ContactForm";
//import { ProductsAddButton } from "./ProductsAddButton/ProductsAddButton";
//import { ProductsTable } from "./ProductsTable/ProductsTable";
//import "./styles.css";

export const Contact = () => {

  const breadcrumb: BreadCrums = {
    section_name: SECTION_ROUTE_CONTACT.name,
    route: SECTION_ROUTE_CONTACT.path,
  };

  const { setBreadcrums } = useOutletContext<Context>();


  useEffect(() => {
    document.title = SECTION_ROUTE_CONTACT.name;
    setBreadcrums(breadcrumb);
  }, []);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
