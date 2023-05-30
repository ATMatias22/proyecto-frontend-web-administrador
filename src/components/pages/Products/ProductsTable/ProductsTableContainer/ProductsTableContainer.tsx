import { ProductsTableBody } from './ProductsTableBody/ProductsTableBody';
import { ProductsTableHeader } from './ProductsTableHeader/ProductsTableHeader';

export const ProductsTableContainer = () => {
  return (
    <div className="card-body  px-0 pb-2">
      <div className="table-responsive p-0">
        <table className="table align-items-center mb-0">
          {/* USER TABLE HEADER */}
          <ProductsTableHeader />
          {/* USER TABLE HEADER */}

          {/* USER TABLE BODY */}
          <ProductsTableBody />

          {/* USER TABLE BODY */}
        </table>
      </div>
    </div>
  );
}
