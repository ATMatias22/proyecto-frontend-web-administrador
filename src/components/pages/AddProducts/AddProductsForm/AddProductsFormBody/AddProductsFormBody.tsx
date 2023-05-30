import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { SECTION_ROUTE_PRODUCTS } from "../../../../Sidebar/sections";

type InputsFormsAddProduct = {
  name: string;
  description: string;
  price: number;
  file: FileList;
};

interface ProductDTO {
  name: string;
  description: string;
  price: number;
  idUser:number;
}

interface ImageProductDTO {
  multipartFile:File;
}

export const AddProductsFormBody = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsFormsAddProduct>({
    mode: "onChange",
  });

  const [idUser, setIdUser] = useState<number>();

  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  useEffect(() => {
    const dataUser = JSON.parse(window.localStorage.getItem("user") || "{}");
    setIdUser(dataUser.id);
  }, []);

  const addProduct = handleSubmit((data, event) => {
    event?.preventDefault();
    const URL = "http://localhost:8080/sensor/api/products";

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };

    const productDTO: ProductDTO = {
      name: data.name,
      description: data.description,
      price: data.price,
      idUser: Number(idUser),
    };

    const formData = new FormData();
    formData.append("product", JSON.stringify(productDTO) );
    formData.append("file", data.file[0]);
   

    axios
      .post(URL, formData, config)
      .then((response) => {
        console.log(response);
        setSuccess("Se creo producto correctamente");
        event?.target.reset();
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

      <form className="text-start" onSubmit={addProduct}>
        <div className=" input-group-outline my-3">
          <input
            type="text"
            className={`${"form-control"} ${errors.name && "cuadroError"}`}
            placeholder="Nombre del producto"
            {...register("name", {
              required: {
                value: true,
                message: "Ingrese nombre del producto",
              },
            })}
          />

          {errors.name && (
            <span className={errors.name && "mensajeError"}>
              {errors.name.message}
            </span>
          )}
        </div>

        <div className=" input-group-outline my-3 ">
          <input
            type="text"
            className={`${"form-control"} ${
              errors.description && "cuadroError"
            }`}
            placeholder="Descripcion"
            {...register("description", {
              required: {
                value: true,
                message: "Ingrese su descripcion",
              },
            })}
          />

          {errors.description && (
            <span className={errors.description && "mensajeError"}>
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="input-group-outline my-3">
          <input
            type="number"
            className={`${"form-control"} ${errors.price && "cuadroError"}`}
            placeholder="Precio"
            {...register("price", {
              required: {
                value: true,
                message: "Ingrese su precio",
              },
            })}
          />

          {errors.price && (
            <span className={errors.price && "mensajeError"}>
              {errors.price.message}
            </span>
          )}
        </div>

        <div className="input-group-outline my-3">
          <input
            type="file"
            className={`${"form-control"} ${errors.file && "cuadroError"}`}
            placeholder="Precio"
            {...register("file", {
              required: {
                value: true,
                message: "Ingrese su archivo",
              },
            })}
          />

          {errors.file && (
            <span className={errors.file && "mensajeError"}>
              {errors.file.message}
            </span>
          )}
        </div>

        <button
          className="btn text-white bg-gradient-primary w-100 my-4 mb-2"
          type="submit"
        >
          Agregar
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
