import { ChangeEvent, useState } from 'react';
import './styles.css'


export const AddSalesFormTitle = () => {

  const [selectedId, setSelectedId] = useState<string>();


  const onChangeOpcionOrdenVenta  = (e: ChangeEvent<HTMLSelectElement>) => {
      //setSelectedId(e.target.value);

      if (e.target.value == "1") {
        window.localStorage.removeItem("opcionOrden");
        window.localStorage.setItem("opcionOrden", "ENTREGAR_PRODUCTOS");

      } else if (e.target.value == "2") {
        window.localStorage.removeItem("opcionOrden");
        window.localStorage.setItem("opcionOrden", "TERMINADO");
      } else if (e.target.value == "3") {
        window.localStorage.removeItem("opcionOrden");
        window.localStorage.setItem("opcionOrden", "CANCELADO");
      }

  };

  return (


    <div className=" container-title bg-gradient-primary px-0  mx-3  pt-4 pb-3">
      <h6 className="text-white text-capitalize ps-3">Ordenes de Venta</h6>

      <select id="selectMetodoPago" className="custom-select selectMetodoPago"
                            onChange={(e) => {
                                onChangeOpcionOrdenVenta(e);
                            }} >
        <option selected>TODOS</option>
        <option value="1">ENTREGANDO PRODUCTO</option>
        <option value="2">TERMINADO</option>
        <option value="3">CANCELADO</option>
      </select>
      
    </div>
  );

}
