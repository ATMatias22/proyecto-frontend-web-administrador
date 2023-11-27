import axios from "axios";
import { useEffect, useState } from "react";
import { UserDataBodyItem } from "../../../../Profile/UserData/UserDataBody/UserDataBodyItem/UserDataBodyItem";
import { User } from "./interfaces";
import "./styles.css";
import { UserTableBodyItem } from "./UserTableBodyItem/UserTableBodyItem";

export const UserTableBody = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const URL = "http://localhost:8080/sensor/api/users/all";

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios
      .get(URL, config)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.data.error.message);
      });
  }, []);

  return (
    <tbody>
      {users?.map((user) => (
        <UserTableBodyItem
          key={user.id}
          id={user.id}
          name={user.name}
          lastname={user.lastname}
          country={user.country}
          email={user.email}
        />
      ))}
    </tbody>
  );
};
