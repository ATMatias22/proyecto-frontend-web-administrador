import "./styles.css"
import { UserTableContainer } from "./UserTableContainer/UserTableContainer";
import { UserTableTitle } from "./UserTableTitle/UserTableTitle";


export const UserTable = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4 user-table">
            <UserTableTitle />
            <UserTableContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
