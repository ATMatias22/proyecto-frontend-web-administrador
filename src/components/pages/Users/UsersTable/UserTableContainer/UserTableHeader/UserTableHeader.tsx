import "./styles.css"


export const UserTableHeader = () => {
  return (
    <thead>
      <tr className="tr-header">
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Id
        </th>
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
          Nombre
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Apellido
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Nacionalidad
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Email
        </th>
      </tr>
    </thead>
  );
}
