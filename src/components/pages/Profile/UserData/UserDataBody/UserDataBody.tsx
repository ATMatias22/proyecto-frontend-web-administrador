import { UserDataBodyListItem } from "./UserDataBodyListItem/UserDataBodyListItem";

export const UserDataBody = () => {
  return (
    <div className="row">
      <div className="row">
        <div className="col-12">
          <div className="card-body p-3">
            <UserDataBodyListItem />
          </div>
        </div>
      </div>
    </div>
  );
}
