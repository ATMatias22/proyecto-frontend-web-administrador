//import "./styles.css"


export const ContactFormBodyHeader = () => {
    return (

        <thead>
            <tr className="tr-header">
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Id
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                    Email
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Razón de contacto
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Mensaje
                </th>
            </tr>
        </thead>
    );
}