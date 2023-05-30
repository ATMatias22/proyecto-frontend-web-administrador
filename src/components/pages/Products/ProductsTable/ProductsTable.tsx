import "./styles.css";
import { ProductsTableContainer } from "./ProductsTableContainer/ProductsTableContainer";
import { ProductsTableTitle } from "./ProductsTableTitle/ProductsTableTitle";

export const ProductsTable = () => {
  return (
    <div className="card my-4">
      <ProductsTableTitle />
      <ProductsTableContainer />
    </div>
  );
};
