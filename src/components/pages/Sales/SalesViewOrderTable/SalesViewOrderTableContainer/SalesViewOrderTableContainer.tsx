import { SalesViewOrderTableBody } from './SalesViewOrderTableBody/SalesViewOrderTableBody';
import { SalesViewOrderTableHeader } from './SalesViewOrderTableHeader/SalesViewOrderTableHeader';

export const SalesViewOrderTableContainer  = () => {
  return (
    <div className="card-body  px-0 pb-2">
      <div className="table-responsive p-0">
        <table className="table align-items-center mb-0">
          {/* USER TABLE HEADER */}
          <SalesViewOrderTableHeader />
          {/* USER TABLE HEADER */}

          {/* USER TABLE BODY */}
          <SalesViewOrderTableBody />

          {/* USER TABLE BODY */}
        </table>
      </div>
    </div>
  );
}
