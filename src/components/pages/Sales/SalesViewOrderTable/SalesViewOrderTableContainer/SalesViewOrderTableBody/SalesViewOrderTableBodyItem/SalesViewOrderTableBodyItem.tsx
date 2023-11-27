import { Sale } from "../../../../SalesTable/SalesTableContainer/SalesTableBody/interfaces";
//import "./styles.css"

export const SalesViewOrderTableBodyItem = (sale:Sale) => {
  return (
    <tr className="tr-body">
     {/* <td>
        <div className="d-flex px-2 py-1">
          <div className="d-flex flex-column justify-content-center">
            <h6 className="mb-0 text-sm">{sale.saleOrderId}</h6>
          </div>
        </div>
      </td>
      <td>
        <p className="text-xs font-weight-bold mb-0">{sale.namePurchaser}</p>
      </td>
      <td className="align-middle text-center text-sm">
        <p className="text-xs font-weight-bold mb-0">{sale.lastNamePurchaser}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{sale.datePurchase}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{sale.productName}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{sale.quantity}</p>
  </td>*/}
    </tr>
  );
}