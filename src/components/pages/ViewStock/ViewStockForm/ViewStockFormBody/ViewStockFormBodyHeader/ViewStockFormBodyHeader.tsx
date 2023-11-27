//import "./styles.css"


export const ViewStockFormBodyHeader = () => {
  return (

<thead>
<tr className="tr-header">
  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
    Id
  </th>
  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
  Codigo dispositivo
  </th>
  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
  Contraseña dispositivo
  </th>
  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
  Aplicado a dispositivo fisico
  </th>
  {/*<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
  No Aplicado a dispositivo fisico
  </th>*/}
</tr>
</thead>
  );
}