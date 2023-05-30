import "./styles.css"


export const PurchasedHardwareTableHeader = () => {
  return (
    <thead>
      <tr className="tr-header">
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Id
        </th>
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
          Nombre del producto
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Cantidad
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Fecha de compra
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Proveedor
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Precio
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Editar
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Eliminar
        </th>
      </tr>
    </thead>
  );
}
