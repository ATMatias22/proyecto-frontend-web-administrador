import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { SECTION_ROUTE_PURCHASED_HARDWARE } from "../../../../Sidebar/sections";
import { PurchasedHardware } from "../../../PurchasedHardware/PurchasedHardwareTable/PurchasedHardwareTableContainer/PurchasedHardwareTableBody/interfaces";

type InputsFormulario = {
  name: string;
  quantity: number;
  datePurchase: string;
  provider: string;
  price: number;
};

export const ModifyPurchasedHardwareFormBody = () => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const [purchasedHardware, setPurchasedHardware] =
    useState<PurchasedHardware>();
  const { purchasedHardwareId } = useParams();

  const getPurchasedHardware = () => {
    const URL =
      "http://localhost:8080/sensor/api/purchased-hardwares/" +
      purchasedHardwareId;

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };

    axios
      .get(URL, config)
      .then((res) => {
        setPurchasedHardware(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.data.error.message);
      });
  };

  useEffect(() => {
    getPurchasedHardware();
  }, []);

  useEffect(() => {
    reset(purchasedHardware);
  }, [purchasedHardware]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsFormulario>({
    mode: "onChange",
    defaultValues: {
      name: purchasedHardware?.name,
      quantity: purchasedHardware?.quantity,
      datePurchase: purchasedHardware?.datePurchase,
      provider: purchasedHardware?.provider,
      price: purchasedHardware?.price,
    },
  });

  const modifyPurchasedHardware = handleSubmit((data, event) => {
    event?.preventDefault();
    const URL =
      "http://localhost:8080/sensor/api/purchased-hardwares/" +
      purchasedHardwareId;

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };

    const purchasedHardwareModify: PurchasedHardware = {
      id: Number(purchasedHardwareId),
      name: data.name,
      quantity: data.quantity,
      datePurchase: data.datePurchase,
      provider: data.provider,
      price: data.price,
      userId:purchasedHardware?.userId
    };

    console.log(purchasedHardwareModify);

    axios
      .patch(URL, purchasedHardwareModify, config)
      .then((response) => {
        console.log(response);
        setSuccess("Se modifico hardware comprado correctamente");
        setError("");
      })
      .catch((error) => {
        success && setSuccess("");
        console.log(error.response.data);
        console.log(error.response.data.error.message);
        setError(error.response.data.error.message);
      });
  });

  return (
    <div className="card-body">
      {!!error && <div className=" alert alert-danger">{error}</div>}
      {!!success && <div className=" alert alert-success">{success}</div>}
      <form className="text-start" onSubmit={modifyPurchasedHardware}>
        <div className="input-group-outline my-3">
          <input
            type="text"
            className={`${"form-control"} ${errors.name && "cuadroError"}`}
            placeholder="Nombre del producto"
            {...register("name", {
              required: {
                value: true,
                message: "Ingrese un nombre de producto",
              },
            })}
          />

          {errors.name && (
            <div className={"mensajeError"}>{errors.name.message}</div>
          )}
        </div>

        <div className="input-group-outline my-3">
          <input
            type="text"
            className={`${"form-control"} ${errors.quantity && "cuadroError"}`}
            placeholder="Nombre del producto"
            {...register("quantity", {
              required: {
                value: true,
                message: "Ingrese cantidad",
              },
            })}
          />
          {errors.quantity && (
            <div className={"mensajeError"}>{errors.quantity.message}</div>
          )}
        </div>
        <div className="input-group-outline my-3">
          <input
            type="text"
            className={`${"form-control"} ${
              errors.datePurchase && "cuadroError"
            }`}
            placeholder="YYYY-MM-DD"
            {...register("datePurchase", {
              required: {
                value: true,
                message: "Ingrese fecha que compro",
              },
            })}
          />
          {errors.datePurchase && (
            <div className={"mensajeError"}>{errors.datePurchase.message}</div>
          )}
        </div>
        <div className="input-group-outline my-3">
          <input
            type="text"
            className={`${"form-control"} ${errors.provider && "cuadroError"}`}
            placeholder="Nombre del proveedor"
            {...register("provider", {
              required: {
                value: true,
                message: "Ingrese el proveedor",
              },
            })}
          />
          {errors.provider && (
            <div className={"mensajeError"}>{errors.provider.message}</div>
          )}
        </div>
        <div className="input-group-outline my-3">
          <input
            type="text"
            className={`${"form-control"} ${errors.price && "cuadroError"}`}
            placeholder="Nombre del proveedor"
            {...register("price", {
              required: {
                value: true,
                message: "Ingrese el precio",
              },
            })}
          />
          {errors.price && (
            <div className={"mensajeError"}>{errors.price.message}</div>
          )}
        </div>
        <button
          className="btn text-white bg-gradient-primary w-100 my-4 mb-2"
          type="submit"
        >
          Modificar
        </button>

        <Link
          className="btn text-white bg bg-primary w-100 my-4 mb-2"
          to={SECTION_ROUTE_PURCHASED_HARDWARE.route}
        >
          Volver
        </Link>
      </form>
    </div>
  );
};
