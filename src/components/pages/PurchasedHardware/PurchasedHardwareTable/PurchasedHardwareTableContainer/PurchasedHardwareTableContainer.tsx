import { PurchasedHardwareTableBody } from './PurchasedHardwareTableBody/PurchasedHardwareTableBody';
import { PurchasedHardwareTableHeader } from './PurchasedHardwareTableHeader/PurchasedHardwareTableHeader';

export const PurchasedHardwareTableContainer = () => {
  return (
    <div className="card-body  px-0 pb-2">
      <div className="table-responsive p-0">
        <table className="table align-items-center mb-0">
          {/* USER TABLE HEADER */}
          <PurchasedHardwareTableHeader />
          {/* USER TABLE HEADER */}

          {/* USER TABLE BODY */}
          <PurchasedHardwareTableBody />

          {/* USER TABLE BODY */}
        </table>
      </div>
    </div>
  );
}
