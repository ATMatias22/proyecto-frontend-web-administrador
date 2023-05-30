import "./styles.css";
import { SalesTableContainer } from "./SalesTableContainer/SalesTableContainer";
import { SalesTableTitle } from "./SalesTableTitle/SalesTableTitle";

export const SalesTable = () => {
  return (
    <div className="card my-4">
      <SalesTableTitle />
      <SalesTableContainer />
    </div>
  );
};
