import axios from "axios";
import { useEffect, useState } from "react";
import { PurchasedHardware } from "./interfaces";
import { PurchasedHardwareTableBodyItem } from "./PurchasedHardwareTableBodyItem/PurchasedHardwareTableBodyItem";

export const PurchasedHardwareTableBody = () => {
  const [purchasedHardwares, setPurchasedHardwares] =
    useState<PurchasedHardware[]>();

  useEffect(() => {
    const URL = "http://localhost:8080/sensor/api/purchased-hardwares/all";
    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };

    axios
      .get(URL, config)
      .then((response) => {
        setPurchasedHardwares(response.data);
        console.log(response.data)

      })
      .catch((error) => {
  
        console.log(error.response.data);
        console.log(error.response.data.error.message);


      });
  }, []);

  return (
    <tbody>
      {purchasedHardwares?.map((ph) => (
        <PurchasedHardwareTableBodyItem key={ph.id} id={ph.id} name={ph.name} quantity={ph.quantity} datePurchase={ph.datePurchase} provider={ph.provider} price={ph.price} />
      ))}
    </tbody>
  );
};
