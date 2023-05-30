import { UserTableBody } from './UserTableBody/UserTableBody';
import { UserTableHeader } from './UserTableHeader/UserTableHeader';

export const UserTableContainer = () => {
  return (
    <div className="card-body  px-0 pb-2">
      <div className="table-responsive p-0">
        <table className="table align-items-center mb-0">
          {/* USER TABLE HEADER */}
          <UserTableHeader />
          {/* USER TABLE HEADER */}

          {/* USER TABLE BODY */}
          <UserTableBody />

          {/* USER TABLE BODY */}
        </table>
      </div>
    </div>
  );
}
