import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { SECTION_ROUTE_PRODUCTS } from "../../../../Sidebar/sections";
import { Product } from "../../../Products/Products";
import "./styles.css";

type InputsFormulario = {
  name: string;
  description: string;
  price: number;
};

export const ModifyProductsFormBody = () => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const [product, setProduct] = useState<Product>();
  const { productId } = useParams();

  const getProduct = () => {
    const URL = "http://localhost:8080/sensor/api/products/" + productId;
    axios
      .get(URL)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.data.error.message);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    reset(product);
  }, [product]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsFormulario>({
    mode: "onChange",
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: product?.price,
    },
  });

  const modifyProduct = handleSubmit((data, event) => {
    event?.preventDefault();
    const URL = "http://localhost:8080/sensor/api/products/" + productId;

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };

    const productModify: Product = {
      id: Number(productId),
      name: data.name,
      description: data.description,
      price: data.price,
      idUser: product?.idUser,
    };

    axios
      .patch(URL, productModify, config)
      .then((response) => {
        console.log(response);
        setSuccess("Se modifico producto correctamente");
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
      <form className="text-start" onSubmit={modifyProduct}>
        <div className="input-group-outline my-3 ">
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

        <div className=" input-group-outline my-3">
          <input
            type="text"
            className={`${"form-control"} ${
              errors.description && "cuadroError"
            }`}
            placeholder="Descripcion"
            {...register("description", {
              required: {
                value: true,
                message: "Ingrese una descripcion para el producto",
              },
            })}
          />
          {errors.description && (
            <span className={"mensajeError"}>{errors.description.message}</span>
          )}
        </div>

        <div className=" input-group-outline my-3">
          <input
            type="text"
            className={`${"form-control"} ${errors.price && "cuadroError"}`}
            placeholder="Precio"
            {...register("price", {
              required: {
                value: true,
                message: "Ingrese un precio",
              },
            })}
          />
          {errors.price && (
            <span className={"mensajeError"}>{errors.price.message}</span>
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
          to={SECTION_ROUTE_PRODUCTS.route}
        >
          Volver
        </Link>
      </form>
    </div>
  );
};
