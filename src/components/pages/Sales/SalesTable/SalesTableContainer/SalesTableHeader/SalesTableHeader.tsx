import "./styles.css"


export const SalesTableHeader = () => {
  return (
    <thead>
      <tr className="tr-header">
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Id
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
          Email del comprador
        </th>
        {/*<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          {Apellido del comprador}
  </th>*/}
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Fecha de compra
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Total
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Estado
        </th>
        {/*<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Estado
  </th>*/}
      </tr>
    </thead>
  );
}
