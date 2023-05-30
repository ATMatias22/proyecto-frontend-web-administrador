import { SalesTableBody } from './SalesTableBody/SalesTableBody';
import { SalesTableHeader } from './SalesTableHeader/SalesTableHeader';

export const SalesTableContainer = () => {
  return (
    <div className="card-body  px-0 pb-2">
      <div className="table-responsive p-0">
        <table className="table align-items-center mb-0">
          {/* USER TABLE HEADER */}
          <SalesTableHeader />
          {/* USER TABLE HEADER */}

          {/* USER TABLE BODY */}
          <SalesTableBody />

          {/* USER TABLE BODY */}
        </table>
      </div>
    </div>
  );
}
