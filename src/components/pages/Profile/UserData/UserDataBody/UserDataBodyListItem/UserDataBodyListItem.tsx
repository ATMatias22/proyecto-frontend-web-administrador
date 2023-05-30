import { useState } from "react";

import { User } from "../../../intefaces";
import { UserDataBodyItem } from "../UserDataBodyItem/UserDataBodyItem";




const formatDay = (date: string) => {
  let parseToDate: Date = new Date(date);
  return (
    parseToDate.getDate() +
    "-" +
    (parseToDate.getMonth() + 1) +
    "-" +
    parseToDate.getFullYear()
  );
};

export const UserDataBodyListItem = () => {

  const [data] = useState<User>(
    JSON.parse(window.localStorage.getItem("user") || "{}")
  );

  return (
    <ul className="list-group">
      <UserDataBodyItem
        category={"Nombre completo"}
        value={data.name + " " + data.lastName}
      />
      <UserDataBodyItem
        category={"Fecha de nacimiento"}
        value={formatDay(data.datesBirth)}
      />
      <UserDataBodyItem category={"Nacionalidad"} value={data.country} />
      <UserDataBodyItem category={"Email"} value={data.email} />
    </ul>
  );
};
