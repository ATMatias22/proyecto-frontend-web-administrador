import { useEffect, useState } from "react";

import axios from "axios";
import { ContactFormBodyHeader } from "./ContactFormBodyHeader/ContactFormBodyHeader";
import { ContactFormBodyItem } from "./ContactFormBodyItem/ContactFormBodyItem";


interface contactItemDTO {
    id: number;
    email: string;
    reasonForContact: string;
    message: string;
}

export const ContactFormBody = () => {

    const [contact, setContact] = useState<contactItemDTO[]>();


    useEffect(() => {

        const URL = "http://localhost:8080/sensor/api/contact-messages/all";


        const config: any = {
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"),
            },
        };
        axios
            .get(URL, config)
            .then((response) => {
                setContact(response.data);

                //  console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response.data);
                console.log(error.response.data.error.message);
            });
    }, []);

    return (
        <div className="card-body  px-0 pb-2">
            <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">

                    <ContactFormBodyHeader />

                    <tbody>
                        {contact?.map((contact) => (
                            <ContactFormBodyItem
                                key={contact.id}
                                id={contact.id}
                                email={contact.email}
                                reasonForContact={contact.reasonForContact}
                                message={contact.message}

                            />
                        ))}
                    </tbody>


                </table>
            </div>
        </div>
    );
}