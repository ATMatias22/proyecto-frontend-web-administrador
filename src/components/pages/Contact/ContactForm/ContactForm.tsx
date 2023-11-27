//import "./styles.css"

import { ContactFormBody } from "./ContactFormBody/ContactFormBody";
import { ContactFormTitle } from "./ContactFormTitle/ContactFormTitle";



export const ContactForm = () => {
    return (
        <div className="page-header align-items-start mt-5 px-3 ">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-12 mx-auto">
                        <div className="card z-index-0 fadeIn3 fadeInBottom">
                            <ContactFormTitle />
                            <ContactFormBody />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}