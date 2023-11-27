export const SalesViewOrderTableHeader = () => {
    return (
      <thead>
        <tr className="tr-header">
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Id
          </th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            Nombre del comprador
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Apellido del comprador
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Fecha de compra
          </th>
          {/*<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Nombre del producto
    </th>*/}
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Cantidad
          </th>
          {/*<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Estado
    </th>*/}
        </tr>
      </thead>
    );
  }