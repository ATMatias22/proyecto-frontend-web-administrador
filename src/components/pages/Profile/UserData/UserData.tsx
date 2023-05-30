
import "./styles.css";
import { UserDataBody } from "./UserDataBody/UserDataBody";
import { UserDataHeader } from "./UserDataHeader/UserDataHeader";

export const UserData = () => {


  return (
    <div className="card card-body mx-3 mx-md-4 data-user-container">
      <UserDataHeader />
      <UserDataBody />
    </div>
  );
};
