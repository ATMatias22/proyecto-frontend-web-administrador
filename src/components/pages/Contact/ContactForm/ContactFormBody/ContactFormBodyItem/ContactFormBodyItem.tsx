import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import "./styles.css"

interface contactItemDTO {
  id: number;
  email: string;
  reasonForContact: string;
  message: string
}

export const ContactFormBodyItem = (contact: contactItemDTO) => {

  const [contactID, setContactID] = useState<number>(0);

  /*useEffect(() => {
    setContactID(contact.contactId);
  }, []);*/

  

  /*const cambiarEstadoAplicado = () => {
    if (localStorage.getItem("token")) {
      const token: string = JSON.stringify(localStorage.getItem("token"));

      const payload = token.split(".")[1];
      const payloadDecoded = atob(payload);
      const values = JSON.parse(payloadDecoded);

      //const opcionOrden = window.localStorage.getItem("opcionOrden");

      const URL = "http://localhost:8080/sensor/api/contact-messages/" + contactID;

      const config: any = {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      };
      axios.patch(URL, {}, config)
        .then((res) => {
          console.log("cambiado a VERDADERO")
        })
        .catch((error) => {
          console.log(error.res.data);
          console.log(error.res.data.error.message);
        });
    }
  }*/

  return (
    <tr className="tr-body">
      <td>
        <div className="d-flex px-2 py-1">
          <div className="d-flex flex-column justify-content-center">
            <h6 className="mb-0 text-sm">{contact.id}</h6>
          </div>
        </div>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{contact.email}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{contact.reasonForContact}</p>
      </td>
      <td className="align-middle text-center text-sm">
      <p className="text-xs font-weight-bold mb-0">{contact.message}</p>
      </td>
    </tr>
  );
}