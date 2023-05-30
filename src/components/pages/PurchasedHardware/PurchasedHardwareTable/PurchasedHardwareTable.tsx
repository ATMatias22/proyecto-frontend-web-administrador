import "./styles.css";
import { PurchasedHardwareTableContainer } from "./PurchasedHardwareTableContainer/PurchasedHardwareTableContainer";
import { PurchasedHardwareTableTitle } from "./PurchasedHardwareTableTitle/PurchasedHardwareTableTitle";

export const PurchasedHardwareTable = () => {
  return (
    <div className="card my-4">
      <PurchasedHardwareTableTitle />
      <PurchasedHardwareTableContainer />
    </div>
  );
};
