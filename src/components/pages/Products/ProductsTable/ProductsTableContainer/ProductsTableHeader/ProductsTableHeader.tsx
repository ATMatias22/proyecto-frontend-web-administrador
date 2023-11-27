import "./styles.css"


export const ProductsTableHeader = () => {
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
          Descripcion
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
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Agregar stock
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Ver datos Stock
        </th>
      </tr>
    </thead>
  );
}
