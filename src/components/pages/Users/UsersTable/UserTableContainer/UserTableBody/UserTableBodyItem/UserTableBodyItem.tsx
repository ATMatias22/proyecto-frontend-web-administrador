import { User } from "../interfaces";
import "./styles.css";



export const UserTableBodyItem = (user:User) => {
  return (
    <tr className="tr-body">
      <td>
        <div className="d-flex px-2 py-1">
          <div className="d-flex flex-column justify-content-center">
            <h6 className="mb-0 text-sm">{user.id}</h6>
          </div>
        </div>
      </td>
      <td>
        <p className="text-xs font-weight-bold mb-0">{user.name}</p>
      </td>
      <td className="align-middle text-center text-sm">
        <p className="text-xs font-weight-bold mb-0">{user.lastname}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{user.country}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{user.email}</p>
      </td>
    </tr>
  );
};
